import { clerkClient } from "@clerk/nextjs/server"
import { getUserRolesAndTypes } from '~/server/queries'
import { UsersTable } from './_components/UsersTable';
import type { UserData } from './_components/UsersTable'

export default async function UsersAdminPage() {
  const clerk = clerkClient()
  const { data: userList } = await clerk.users.getUserList()
  const { userTypes, userRoles } = await getUserRolesAndTypes()

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
  
  const sortedUserList: UserData[] = mappedUserList.sort((a, b) => a.lastName.localeCompare(b.lastName))
  
  return (
    <div className='bg-white flex-1 p-4 rounded shadow-md'>
      <UsersTable users={sortedUserList} />
    </div>
  )
}