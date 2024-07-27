import { clerkClient } from "@clerk/nextjs/server"
import { getUserTypes } from '~/server/queries'
import { UsersTable } from './_components/UsersTable';
import type { UserData } from './_components/UsersTable'

export default async function UsersAdminPage() {
  const clerk = clerkClient()
  const { data: userList } = await clerk.users.getUserList()
  const { userTypes, userRoles } = await getUserTypes()

  const mappedUserList: UserData[] = userList?.map((user) => {
    const emailAddress = user.primaryEmailAddress?.emailAddress
    const userRole = userRoles?.find(i => i.id === user.privateMetadata?.roleId)?.name
    const userType = userTypes?.find((i) => i.id === user.privateMetadata?.typeId)?.name

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress,
      userRole,
      userType
    }
  })
  
  return (
    <div className='bg-white flex-1 p-4 rounded shadow-md'>
      <UsersTable users={mappedUserList} />
    </div>
  )
}