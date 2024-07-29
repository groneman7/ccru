import { Button } from 'antd'

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="bg-slate-50 flex flex-1">
      <div className="bg-white flex flex-col gap-2 basis-1/6 p-4 border-r">
        <Button href="/admin/users">Users</Button>
        <Button href="/admin/assets">Assets</Button>
      </div>
      <div className="p-8 flex flex-1 self-start items-start justify-center">{children}</div>
    </div>
  )
}