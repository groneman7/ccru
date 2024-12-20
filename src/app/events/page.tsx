import { permanentRedirect } from "next/navigation";
import dayjs from "dayjs";

// Events Page
export default function Page() {
    const today = dayjs().format("YYYY-MM-DD");
    permanentRedirect(`/events/${today}`);
}
