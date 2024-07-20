'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'

export default function EventCalender() {
  const router = useRouter()
  const [value, setValue] = useState<Dayjs>(dayjs())

  function handleSelect(newDate: Dayjs) {
    setValue(newDate)
    router.push(`/events/${newDate.format('YYYY-MM-DD')}`)
  }

  return (
    <div>
      <Calendar value={value} onSelect={handleSelect}/>
    </div>
  )
}