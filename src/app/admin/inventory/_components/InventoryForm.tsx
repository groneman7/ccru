'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Inventory, InventoryBrand } from '@prisma/client';
import { Button, DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd';
import type { InputRef, SelectProps } from 'antd';
import type { BaseSelectRef } from 'rc-select/lib'
import { createBrand, createItem, deleteItem, getAllQuantityUnits, searchBrands } from '~/server/inventory'
import { useBarcodeScan, useDebounce } from '~/lib/hooks'
import FormGroup from '~/components/FormGroup';
import { InventoryLinkForm } from './InventoryLinkForm'
import dayjs from "dayjs";

const SEARCH_DELAY = 500;

type InventoryFormProps = {
  item?: Inventory
};

export function InventoryForm({ item }: InventoryFormProps) {
  const router = useRouter()
  // State
  const [inventoryForm] = Form.useForm<Inventory>();

  const [newLinkModal, setNewLinkModal] = useState<boolean>(false)

  const [promptBarcodeScan, setPromptBarcodeScan] = useState<boolean>(!item ? false : false); // CHANGE BACK TO true : false IF new item
  const [barcodeEntry, setBarcodeEntry] = useState<boolean>(false)
  const [barcodeBypassed, setBarcodeBypassed] = useState<boolean>(false)
  const [brandSearchValue, setBrandSearchValue] = useState<string>('')
  const [brandSearchLoading, setBrandSearchLoading] = useState<boolean>(false)
  const [brands, setBrands] = useState<InventoryBrand[]>([])
  const [addedBrands, setAddedBrands] = useState<InventoryBrand[]>([])
  const [allBrands, setAllBrands] = useState<InventoryBrand[]>([])
  
  const upcRef = useRef<InputRef>(null)
  const selectRef = useRef<BaseSelectRef>(null);

  const [unitsFieldFocused, setUnitsFieldFocused] = useState<boolean>(false)
  const [units, setUnits] = useState<SelectProps['options']>([])



  // Functions
  function handleSearch(newValue: string) {
    if (newValue === '') {
      setBrandSearchLoading(false)
      setBrands([])
    } else {
      setBrandSearchLoading(true)
    }
    setBrandSearchValue(newValue)
  }

  function handleAddNewBrand(newBrand: string) {
    setAddedBrands((current) => ([
      ...current,
      {
        id: `TEMP_BRAND_${current.length + 1}`,
        brandName: newBrand
      }
    ]))
    selectRef.current!.blur()
  }

  async function handleSubmit() {
    const formValues: Omit<Inventory, 'id'> = inventoryForm.getFieldsValue(true)

    if (formValues.brandId) {
      if (formValues.brandId.startsWith('TEMP_BRAND')) {
        const newBrandResponse = await createBrand(addedBrands.find((b) => b.id === formValues.brandId)!.brandName)
        if (newBrandResponse.status === 201) {
          formValues.brandId = newBrandResponse.data!.id;
          console.log('New brand created', newBrandResponse.data)
        }
      }
    }
    
    const response = await createItem(formValues)
    if (response.status === 201) {
      router.replace('/admin/inventory')
      router.refresh()
    }
  }

  async function handleDelete() {
    const response = await deleteItem(item!.id)
    if (response.status === 200) {
      router.replace('/admin/inventory')
      router.refresh()
    }
  }



  // Hooks
  useEffect(() => {
    if (item) {
      inventoryForm.setFieldsValue({...item, expiration: dayjs(item.expiration)})
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const test = []
    if (addedBrands && addedBrands.length > 0) {
      test.push({ brandName: 'Recently added', id: 'recent', options: [...addedBrands] })
    }
    if (brands && brands.length > 0) {
      test.push({ brandName: 'Search results', id: 'search', options: [...brands] })
    }
    setAllBrands(test)
  }, [brands, addedBrands])

  useEffect(() => {
    if (addedBrands && addedBrands.length > 0) {
      inventoryForm.setFieldValue('brandId', addedBrands[addedBrands.length - 1]!.id)
    }
  }, [addedBrands, inventoryForm])

  useEffect(() => {
    if (barcodeEntry) {
      upcRef.current!.focus()
    }
  }, [barcodeEntry])

  useBarcodeScan(() => {
    const upc = inventoryForm.getFieldValue('upc') as string
    if (upc) {
      inventoryForm.setFieldValue('upc', '')
      upcRef.current!.focus()
    }
    if (!upc && !barcodeEntry) {
      setBarcodeEntry(true)
    }
  })

  useDebounce(async () => {
    if (unitsFieldFocused) {
      const { data } = await getAllQuantityUnits()
      if (data) {
        const mappedUnits = data.map(unit => ({
          value: unit.id,
          label: unit.label
        }))
        setUnits(mappedUnits)
      }
    }
  }, 0, [unitsFieldFocused])

  useDebounce(async () => {
    if (brandSearchValue !== '') {
      const { data } = await searchBrands(brandSearchValue)
      if (data) setBrands(data)
      setBrandSearchLoading(false)
    }
  }, SEARCH_DELAY, [brandSearchValue])



  // Other components
  function BarcodePrompt() {
    return (
      <div className="flex flex-1 flex-col items-center justify-start gap-8">
        <div className="text-2xl font-semibold">
          Scan product barcode to get started
        </div>
        <div>Insert barcode symbol here</div>
        <div>
          <Button
            className="btn-primary form-control"
            onClick={() => setPromptBarcodeScan(false)}>
          Manual Entry
        </Button>
      </div>
    </div>
    )
  }

  function InventoryToolbar() {
    return (
      <div className="flex items-center justify-between gap-8 border border-red-500">
        <div className="flex items-center gap-4">
          <Button onClick={() => setNewLinkModal(true)} type="link">
            Create link
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleDelete}>
            Delete
          </Button>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
        </div>
      </div>
    );
  }

  function InventorySidebar() {
    return (
      <div className="flex basis-1/2 flex-col border border-green-500">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold">ibuprofen 200mg tablet</span>
          <ul className="p-2">
            <li className="flex gap-2">
              <span className="flex-1 cursor-pointer text-blue-500 hover:underline">
                Walgreens ibuprofen 200mg tablet
              </span>
              <span className="basis-1/3 text-right">154</span>
            </li>
            <li className="cursor-pointer text-blue-500 hover:underline">
              Kroger ibuprofen 200mg tablet
            </li>
            <li className="cursor-pointer text-blue-500 hover:underline">
              Advil ibuprofen 200mg tablet
            </li>
            <li className="cursor-pointer text-blue-500 hover:underline">
              Costco ibuprofen 200mg tablet
            </li>
          </ul>
        </div>
        <div>Insert comments here</div>
      </div>
    );
  }

  
  
  // Render
  return promptBarcodeScan ? (
    <BarcodePrompt />
  ) : (
    <>
      <Modal open={newLinkModal} onCancel={() => setNewLinkModal(false)}>
        <InventoryLinkForm />
      </Modal>
      <Form
        className="flex flex-1 flex-col gap-4 border border-purple-500"
        form={inventoryForm}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <InventoryToolbar />
        <div className="flex gap-4 border border-blue-500">
          <div className="flex flex-col flex-1 gap-4 border border-orange-500">
            <FormGroup>
              <Form.Item
                className="flex-1"
                label="Item"
                name="itemName"
                rules={[
                  {
                    required: true,
                    message: "Please enter a name for this item.",
                  },
                ]}
              >
                <Input className="form-control input-primary" />
              </Form.Item>
              <div className="flex w-44 self-stretch">
                {(item?.upc ?? barcodeEntry) ? (
                  <Form.Item label="UPC" name="upc">
                    <Input
                      className="form-control input-primary"
                      onBlur={(e) => {
                        if (!e.target.value.trim()) {
                          setBarcodeEntry(false);
                          inventoryForm.setFieldValue("upc", "");
                        }
                      }}
                      ref={upcRef}
                    />
                  </Form.Item>
                ) : (
                  <div
                    className="flex flex-1 cursor-pointer select-none flex-col items-center justify-center gap-1 self-stretch rounded border border-slate-200 text-slate-500 hover:border-slate-400 hover:bg-slate-50 hover:transition hover:duration-150 active:bg-slate-200 active:transition active:duration-150"
                    onClick={() => setBarcodeEntry(true)}
                  >
                    <span>Scan barcode</span>
                    <span className="text-xs italic text-slate-400">
                      Or manually enter UPC
                    </span>
                  </div>
                )}
              </div>
            </FormGroup>
            <Form.Item label="Brand" name="brandId">
              <Select
                className="form-control select-primary"
                fieldNames={{ label: "brandName", value: "id" }}
                loading={brandSearchLoading}
                showSearch
                onSearch={handleSearch}
                ref={selectRef}
                optionRender={(option) => (
                  <div
                    key={option.value}
                    className="flex items-center justify-between"
                  >
                    <span>{option.label}</span>
                    {/* @ts-expect-error Weird antd typing that doesn't realize the option values can be strings. */}
                    {!option.value!.startsWith("TEMP_BRAND") && (
                      <span className="text-slate-400">{option.value}</span>
                    )}
                  </div>
                )}
                options={allBrands}
                optionFilterProp="brandName"
                notFoundContent={
                  brandSearchValue ? (
                    brandSearchLoading ? (
                      <div className="flex flex-1 items-center justify-between pl-3">
                        Loading
                      </div>
                    ) : (
                      <div className="flex flex-1 items-center justify-between px-1">
                        <div
                          className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-slate-500 hover:bg-slate-100 hover:transition hover:duration-150 active:bg-slate-200 active:transition active:duration-150"
                          onClick={() => handleAddNewBrand(brandSearchValue)}
                        >
                          <span>Create</span>
                          <span className="rounded bg-slate-100 px-1 text-slate-600">
                            {brandSearchValue}
                          </span>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-1 items-center justify-between pl-3 pr-1">
                      <span className="text-slate-500">
                        Start typing to search for a brand
                      </span>
                      <div>
                        <Button size="small">Load all</Button>
                      </div>
                    </div>
                  )
                }
                onInputKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (brandSearchLoading) {
                      return e.stopPropagation();
                    }
                    if (!brandSearchLoading && [...brands].length === 0) {
                      if (
                        addedBrands.length === 0 ||
                        addedBrands.filter((o) =>
                          o.brandName?.includes(brandSearchValue),
                        ).length === 0
                      ) {
                        e.stopPropagation();
                        handleAddNewBrand(brandSearchValue);
                      }
                    }
                  }
                }}
              />
            </Form.Item>
            <FormGroup>
              <div className="flex items-end gap-2">
                <Form.Item initialValue={1} label="Quantity" name="quantity">
                  <InputNumber
                    changeOnWheel
                    className="form-control input-primary"
                    keyboard
                    min={1}
                  />
                </Form.Item>
                <Form.Item
                  className="self-end"
                  name="quantityUnitId"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select
                    className="form-control select-primary"
                    onFocus={() =>
                      !unitsFieldFocused && setUnitsFieldFocused(true)
                    }
                    optionFilterProp="label"
                    options={units}
                    placeholder="Units"
                    showSearch
                  />
                </Form.Item>
              </div>
              <div className="flex items-end gap-2">
                <Form.Item initialValue={1} label="Pkg size" name="packageSize">
                  <InputNumber
                    changeOnWheel
                    className="form-control input-primary"
                    keyboard
                    min={1}
                  />
                </Form.Item>
                <Form.Item
                  className="self-end"
                  name="packageSizeUnitId"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select
                    className="form-control select-primary"
                    onFocus={() =>
                      !unitsFieldFocused && setUnitsFieldFocused(true)
                    }
                    optionFilterProp="label"
                    options={units}
                    placeholder="Units"
                    showSearch
                  />
                </Form.Item>
              </div>
            </FormGroup>
            <FormGroup>
              <Form.Item label="Expiration" name="expiration">
                <DatePicker className="form-control input-primary" />
              </Form.Item>
              <Form.Item label="LOT" name="lot">
                <Input className="form-control input-primary" />
              </Form.Item>
              <Form.Item label="NDC" name="ndc">
                <Input
                  className="form-control input-primary"
                  onKeyDown={(e) => {
                    const match = /[a-zA-Z !@#$%^&*()_+={}[\]|\\:;"'<>,.?/]/;
                    if (e.ctrlKey || e.altKey || e.metaKey) {
                      return;
                    } else {
                      if (
                        match.test(e.key) &&
                        ![
                          "Backspace",
                          "Tab",
                          "ArrowLeft",
                          "ArrowRight",
                          "ArrowUp",
                          "ArrowDown",
                          "Insert",
                          "Delete",
                          "Home",
                          "End",
                          "PageUp",
                          "PageDown",
                        ].includes(e.key)
                      ) {
                        e.preventDefault();
                      }
                    }
                  }}
                />
              </Form.Item>
            </FormGroup>
          </div>
          <InventorySidebar />
        </div>
      </Form>
    </>
  );
}