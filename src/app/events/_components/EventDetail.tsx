import { currentUser } from "@clerk/nextjs/server";
import type { Event, EventShift } from "~/prisma/client";
import { getPositions } from "~/prisma/events";

import dayjs, { type Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import ShiftListItem from "./ShiftListItem";
import { canModifySignups as getCanModifySignups, canSignUp } from "~/prisma/auth";
import { getUserListForAssignments } from "~/prisma/users";
dayjs.extend(timezone);

export type EventDetailProps = {
    event: Omit<Event, "shifts"> & {
        shifts: (Omit<EventShift, "userId"> & {
            positionLabel: string;
            user?: { id: string; name: string };
        })[];
    };
};

export default async function EventDetail({ event }: EventDetailProps) {
    const me = await currentUser();
    const userList = await getUserListForAssignments();

    const canModifySignups: boolean = me ? await getCanModifySignups(me.id) : false;

    const { data: positions } = await getPositions();
    if (!positions) {
        return <div>Error... positions not found.</div>;
    }

    return (
        <div className="p-4">
            <div className="text-lg font-semibold">
                {dayjs(event.date).format("dddd, MMMM D")}
            </div>
            <div>
                {dayjs(event.timeStart).tz("America/New_York").format("h:mm A")} –{" "}
                {dayjs(event.timeEnd).tz("America/New_York").format("h:mm A")}
            </div>
            <div className="py-2">{event.location}</div>
            <div className="flex flex-col divide-y px-2 py-4">
                {Promise.all(
                    event.shifts.map(async (shift, i: number) => {
                        return (
                            <ShiftListItem
                                key={`${i}-${shift.positionId}`}
                                canSignUp={
                                    me ? await canSignUp(me.id, shift.positionId) : false
                                }
                                canModifySignups={canModifySignups}
                                event={event}
                                isMe={me?.id === shift.user?.id}
                                label={shift.positionLabel || "Position label not found."}
                                positionId={shift.positionId}
                                user={shift.user}
                                userList={
                                    me?.id === shift.user?.id || canModifySignups
                                        ? userList
                                        : undefined
                                }
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
