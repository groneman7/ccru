'use client'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'

export type UserData = {
  // key: React.Key;
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddress?: string;
  userRole?: string;
  userType?: string;
}

type UsersTableProps = {
  users: UserData[]
}

export function UsersTable({
  users
}: UsersTableProps) {
  function getUserRoleClassName(userRole: string) {
    switch (userRole) {
      case 'Officer':
        return 'bg-violet-700 text-white'
      case 'Administrator':
        return 'bg-orange-700 text-white'
    }
  }

  const COLUMNS: TableColumnsType<UserData> = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      render: (_, record) => <a href={`/admin/users/${record.id}`}>{record.lastName}, {record.firstName}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'emailAddress'
    },
    {
      title: 'Role',
      dataIndex: 'userRole',
      render: (text: string) => <span className={`${getUserRoleClassName(text)} text-sm px-1.5 py-0.5 rounded`}>{text}</span>
    },
    {
      title: 'Type',
      dataIndex: 'userType'
    }
  ]

  return (
    <Table columns={COLUMNS} dataSource={users} rowKey={(record) => record.id} />
  )
}