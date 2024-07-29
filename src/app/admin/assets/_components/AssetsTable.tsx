'use client'
import { useRef, useState } from 'react'
import type { Asset } from '@prisma/client'
import { Input, Table } from 'antd'
import type { InputRef, TableColumnsType } from "antd";
import dayjs from 'dayjs';
import { useKeyDown } from '~/utils/hooks'

type AssetsTableProps = {
  data: Asset[]
}

export function AssetsTable({ data }: AssetsTableProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const inputRef = useRef <InputRef>(null)

  // This keybind listens for a barcode to be scanned. The transmission is prefixed with 'F2'.
  useKeyDown(() => {
    setInputValue('')
    inputRef.current!.focus()
  }, ['F2'])
  
  function handleChange(newValue: string) {
    setInputValue(newValue)
  }

  const COLUMNS: TableColumnsType<Asset> = [
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
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          handleChange(e.target.value)
        }}/>
      <Table className="flex-1" columns={COLUMNS} dataSource={data} pagination={false} rowKey={(record) => record.id} />
    </div>
  )
}