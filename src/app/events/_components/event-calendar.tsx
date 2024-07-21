'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import type { Event } from '@prisma/client'
import { Calendar } from 'antd'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import type { Dayjs } from 'dayjs'

dayjs.extend(timezone)
dayjs.tz.setDefault("America/New_York");

type EventCalendarProps = {
  events?: Event[]
}

export default function EventCalender({ events }: EventCalendarProps) {
  const router = useRouter()
  const pathname = usePathname().split('/')
  
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(pathname[pathname.length - 1]))

  async function handleSelect(newDate: Dayjs) {
    setSelectedDate(newDate)
    router.replace(`/events/${newDate.format('YYYY-MM-DD')}`)
  }

  function handleCellRender(value: Dayjs) {
    const filtered = events?.filter((event) => value.isSame(dayjs(event.date)))

    return filtered && filtered.length > 0 ? (
      <ul>
        {filtered.map((event) => <li key={event.id} className="text-sm">{event.name}</li>)}
      </ul>
    ) : (
      null
    )
  }

  return (
    <div>
      <Calendar value={selectedDate} onSelect={handleSelect} cellRender={handleCellRender}/>
    </div>
  )
}