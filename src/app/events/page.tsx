import { permanentRedirect } from 'next/navigation'
import dayjs from 'dayjs'

export default function EventsPage() {
  const today = dayjs().format('YYYY-MM-DD')
  permanentRedirect(`/events/${today}`)
}