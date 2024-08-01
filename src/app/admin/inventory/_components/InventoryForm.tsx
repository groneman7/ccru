'use client'
import { useEffect, useRef, useState } from 'react'
import type { Inventory } from '@prisma/client';
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import type { SelectProps } from 'antd';
import { getAllQuantityUnits, searchBrands } from '~/server/inventory'
import { useDebounce } from '~/utils/hooks'

const SEARCH_DELAY = 500;

type InventoryFormProps = {
  item?: Inventory
};

export function InventoryForm({ item }: InventoryFormProps) {
  const [inventoryForm] = Form.useForm();

  const [barcodeScan, setBarcodeScan] = useState<boolean>(!item ? false : false); // CHANGE BACK TO true : false
  const [brandSearchValue, setBrandSearchValue] = useState<string>('')
  const [brandSearchLoading, setBrandSearchLoading] = useState<boolean>(false)
  const [brandItems, setBrandItems] = useState<SelectProps['options']>([])
  const [addedOptions, setAddedOptions] = useState<SelectProps['options']>([])
  const selectRef = useRef(null)

  const [unitsFieldFocused, setUnitsFieldFocused] = useState<boolean>(false)
  const [units, setUnits] = useState<SelectProps['options']>([])

  useEffect(() => {
    if (addedOptions && addedOptions.length > 0) {
      inventoryForm.setFieldValue('brand', addedOptions[addedOptions.length - 1]!.value)
    }
  }, [addedOptions, inventoryForm])

  function handleSearch(newValue: string) {
    if (newValue === '') {
      setBrandSearchLoading(false)
      setBrandItems([])
    } else {
      setBrandSearchLoading(true)
    }
    setBrandSearchValue(newValue)
  }

  function handleAddNewBrand(newBrand: string) {
    setAddedOptions((current): SelectProps['options'] => ([
      ...current!,
      {
        value: `TEMP_VALUE_${current!.length + 1}`,
        label: newBrand
      }
    ]))
    selectRef?.current?.blur()
  }

  useDebounce(async () => {
    if (unitsFieldFocused) {
      const { data } = await getAllQuantityUnits()
      if (data) {
        const mappedUnits = data.map(unit => ({
          value: unit.id,
          label: unit.name
        }))
        setUnits(mappedUnits)
      }
    }
  }, 0, [unitsFieldFocused])

  useDebounce(async () => {
    if (brandSearchValue !== '') {
      const { data } = await searchBrands(brandSearchValue)
      if (data) setBrandItems(data)
      setBrandSearchLoading(false)
    }
  }, SEARCH_DELAY, [brandSearchValue])

  const mappedBrands: SelectProps['options'] = brandItems?.map((brand) => (
    {
      value: brand.id,
      label: brand.name
    }
  )) ?? []

  return barcodeScan ? (
    <div className="flex flex-1 flex-col items-center justify-start gap-8">
      <div className="text-2xl font-semibold">
        Scan product barcode to get started
      </div>
      <div>Insert barcode symbol here</div>
      <div>
        <Button
          className="btn-primary form-control"
          onClick={() => setBarcodeScan(false)}
        >
          Manual Entry
        </Button>
      </div>
    </div>
  ) : (
    <Form
      className="flex flex-1 flex-col gap-4"
      form={inventoryForm}
      layout="vertical"
    >
      <div className="flex gap-4">
        <Form.Item className="flex-1" label="Item" name="itemName">
          <Input className="form-control input-primary" />
        </Form.Item>
        <Form.Item className="basis-40 self-end">
          <Button block className="btn-primary form-control">
            Scan Barcode
          </Button>
        </Form.Item>
      </div>
      <Form.Item label="Brand" name="brand">
        <Select
          className="form-control select-primary"
          loading={brandSearchLoading}
          showSearch
          onSearch={handleSearch}
          ref={selectRef}
          options={[...mappedBrands, ...addedOptions!]}
          optionFilterProp="label"
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
              if (!brandSearchLoading && [...brandItems!].length === 0) {
                if (
                  addedOptions!.length === 0 ||
                  addedOptions!.filter((o) =>
                    o.label?.toString()?.includes(brandSearchValue),
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
      <div className="flex gap-8">
        <div className="flex gap-2">
          <Form.Item label="Quantity" name="quantity">
            <InputNumber
              changeOnWheel
              className="form-control input-primary"
              keyboard
              min={1}
            />
          </Form.Item>
          <Form.Item className="self-end" name="quantityUnits">
            <Select
              className="form-control select-primary"
              onFocus={() => !unitsFieldFocused && setUnitsFieldFocused(true)}
              options={units}
              placeholder="Units"
              showSearch
            />
          </Form.Item>
        </div>
        <div className="flex gap-2">
          <Form.Item label="Pkg size" name="packageSize">
            <InputNumber
              changeOnWheel
              className="form-control input-primary"
              keyboard
              min={1}
            />
          </Form.Item>
          <Form.Item className="self-end" name="packageSizeUnits">
            <Select
              className="form-control select-primary"
              onFocus={() => !unitsFieldFocused && setUnitsFieldFocused(true)}
              options={units}
              placeholder="Units"
              showSearch
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-1 gap-8">
        <Form.Item label="Expiration" name="expiration">
          <DatePicker className="form-control input-primary" />
        </Form.Item>
        <Form.Item label="LOT" name="lot">
          <Input className="form-control input-primary" />
        </Form.Item>
      </div>
    </Form>
  );
}