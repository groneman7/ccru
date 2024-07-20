import { SignedIn } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Button } from 'antd'
import dayjs from 'dayjs'

export default async function EventPage({ params }: { params: { date: string }}) {
  const user = await currentUser()
  const date = dayjs(params.date)
  return (
    <div className="p-2">
      <div className='flex justify-between'>
        <h3 className="text-xl font-semibold">{date.format('dddd, MMMM D, YYYY')}</h3>
        <SignedIn>
          {user?.privateMetadata?.permissions?.events['create-new'] && <Button>Create New Event</Button>}
        </SignedIn>
      </div>
    </div>
  )
}