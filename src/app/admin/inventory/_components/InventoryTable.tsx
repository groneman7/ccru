'use client'
import { useRef, useState } from 'react'
import type { Inventory } from '@prisma/client'
import { Button, Input, Table } from 'antd'
import type { InputRef, TableColumnsType } from "antd";
import dayjs from 'dayjs';
import { useBarcodeScan } from '~/utils/hooks'

type InventoryTableProps = {
  data: Inventory[]
}

export function InventoryTable({ data }: InventoryTableProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const inputRef = useRef <InputRef>(null)

  useBarcodeScan(() => {
    setInputValue('')
    inputRef.current!.focus()
  })
  
  function handleChange(newValue: string) {
    setInputValue(newValue)
  }

  const COLUMNS: TableColumnsType<Inventory> = [
    {
      title: "Item",
      dataIndex: "name",
    },
    {
      title: "Package",
      key: "package",
      render: (_, record) => `${record.packageSize} ${record.packageSizeUnit}${record.packageSize !== 1 ? 's' : ''}`,
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (_, record) => `${record.quantity} ${record.quantityUnit}${record.quantity > 1 ? 's' : ''}`
    },
    {
      title: "Category",
      dataIndex: "category"
    },
    {
      title: "Expiration",
      dataIndex: 'expiration',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD')
    },
    {
      title: "LOT",
      dataIndex: "lot"
    }
  ];

  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex flex-1 gap-4 justify-between">
        <Button href="/admin/inventory/new" type="primary">New Item</Button>
        <Input
          className="basis-1/3"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            handleChange(e.target.value)
          }}/>
      </div>
      <Table className="flex-1" columns={COLUMNS} dataSource={data} pagination={false} rowKey={(record) => record.id} />
    </div>
  )
}