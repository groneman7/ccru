import { clerkClient } from '@clerk/nextjs/server'
import { Avatar, Divider } from 'antd'
import { getUserRolesAndTypes } from '~/server/queries'

export default async function UserIdAdminPage({ params }: { params: { userId: string }}) {
  const { userId } = params
  const clerk = clerkClient()
  const user = await clerk.users.getUser(userId)
  const phoneNumber = user.primaryPhoneNumber?.phoneNumber
  const formattedPhoneNumber = phoneNumber ? `(${phoneNumber?.substring(2, 5)}) ${phoneNumber?.substring(5, 8)}-${phoneNumber?.substring(8)}` : null;

  const { userRoles, userTypes } = await getUserRolesAndTypes()

  const userType = userTypes?.find(i => i.id === user.privateMetadata?.typeId)?.name
  
  return (
    <div className="flex max-w-(--breakpoint-lg) flex-1 gap-8 rounded bg-white p-8 shadow-md">
      <div className="flex basis-1/4 flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={user.imageUrl} size={96} />
          <h3 className="text-xl font-semibold">
            {user.firstName} {user.lastName}
          </h3>
        </div>
        <div className="text-xs text-slate-500">{user.id}</div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <Divider orientation="left">
          <div className="font-semibold">Basic information</div>
        </Divider>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm text-slate-500">First name</div>
              <div>{user.firstName}</div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm text-slate-500">Last name</div>
              <div>{user.lastName}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm text-slate-500">Email address</div>
              <div>{user.primaryEmailAddress?.emailAddress ?? "None"}</div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm text-slate-500">Phone number</div>
              <div>{formattedPhoneNumber ?? "None"}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm text-slate-500">User Type</div>
              <div>{userType ?? "Not assigned"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}