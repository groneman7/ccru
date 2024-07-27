import { clerkClient } from '@clerk/nextjs/server'
import { Avatar, Divider } from 'antd'

export default async function UserIdAdminPage({ params }: { params: { userId: string }}) {
  const { userId } = params
  const clerk = clerkClient()
  const user = await clerk.users.getUser(userId)
  console.log(user)
  
  return (
    <div className='bg-white flex flex-1 gap-8 p-8 rounded shadow-md max-w-screen-lg'>
      <div className='flex flex-col gap-4 basis-1/4'>
        <div className='flex items-center gap-4'>
          <Avatar src={user.imageUrl} size={64} />
          <h3 className='text-xl font-bold'>{user.lastName}, {user.firstName}</h3>
        </div>
        <div className="text-xs text-slate-500">{user.id}</div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <Divider orientation="left"><div className="font-bold">Basic information</div></Divider>
        <div>test</div>
      </div>
    </div>
  )
}