'use client'
import { useEffect, useRef, useState } from 'react'
import type { Asset } from '@prisma/client';
import { Button, Form, Input, Select } from 'antd';
import type { SelectProps } from 'antd';
import { searchBrands } from '~/server/assets'
import { useDebounce } from '~/utils/hooks'

const SEARCH_DELAY = 500;

type AssetFormProps = {
  asset: Asset | null
}

export function AssetForm({ asset }: AssetFormProps) {
  const [assetForm] = Form.useForm();

  const [barcodeScan, setBarcodeScan] = useState<boolean>(!asset ? true : false)
  const [brandSearchValue, setBrandSearchValue] = useState<string>('')
  const [brandSearchLoading, setBrandSearchLoading] = useState<boolean>(false)
  const [brandItems, setBrandItems] = useState<SelectProps['options']>([])
  const [addedOptions, setAddedOptions] = useState<SelectProps['options']>([])
  const selectRef = useRef(null)

  useEffect(() => {
    if (addedOptions && addedOptions.length > 0) {
      assetForm.setFieldValue('brand', addedOptions[addedOptions.length - 1]!.value)
    }
  }, [addedOptions, assetForm])

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
    if (brandSearchValue !== '') {
      const { results } = await searchBrands(brandSearchValue)
      if (results) setBrandItems(results)
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
    <div className="flex flex-col flex-1 gap-8 items-center justify-start">
      <div className="text-2xl font-semibold">
        Scan product barcode to get started
      </div>
      <div>
        Insert barcode symbol here
      </div>
      <div>
        <Button onClick={() => setBarcodeScan(false)}>Manual Entry</Button>
      </div>
    </div>
  ) : (
    <Form className="flex-1" form={assetForm}>
      <Form.Item
        label="Asset"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Brand"
        name="brand"
      >
        <Select
          loading={brandSearchLoading}
          showSearch
          onSearch={handleSearch}
          ref={selectRef}
          options={[...mappedBrands, ...addedOptions!]}
          optionFilterProp="label"
          notFoundContent={
            brandSearchValue ? 
            (
              brandSearchLoading ? (
                <div>Loading</div>
              ) : (
                <div className="">Press 'Enter' to create <span className="bg-slate-100 rounded p-0.5">{brandSearchValue}</span></div>
              )
            ) : <div>Start typing to search for a brand</div>
          }
          onInputKeyDown={(e) => {
            if (e.key === "Enter") {
              if (brandSearchLoading) {
                return e.stopPropagation()
              }
              if (!brandSearchLoading && [...brandItems!].length === 0) {
                if (addedOptions!.length === 0 || addedOptions!.filter(o => o.label?.toString()?.includes(brandSearchValue)).length === 0) {
                  e.stopPropagation()
                  handleAddNewBrand(brandSearchValue)
                }
              }
            }
          }}
        />
      </Form.Item>
    </Form>
  );
}