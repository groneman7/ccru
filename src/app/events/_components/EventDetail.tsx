import { clerkClient, currentUser } from "@clerk/nextjs/server";
import type { Event /* TestShift */ } from "~/prisma/client";
import { getPositions } from "~/prisma/events";
import dayjs from "dayjs";
import { Button } from "~/components/ui/button";

type EventDetailProps = {
    event: Event;
};

export default async function EventDetail({ event }: EventDetailProps) {
    const user = await currentUser();
    const clerk = await clerkClient();

    const { data: positions } = await getPositions();

    async function getVolunteerName(userId: string) {
        const user = await clerk.users.getUser(userId);
        return `${user.firstName} ${user.lastName}`;
    }

    return (
        <div className="p-4">
            <div className="text-lg font-semibold">{event.eventName}</div>
            <div>
                {dayjs(event.timeStart).format("h:mm A")} –{" "}
                {dayjs(event.timeEnd).format("h:mm A")}
            </div>
            <div className="py-2">{event.location}</div>
            <div className="flex flex-col divide-y px-2 py-4">
                {event.shifts.map((shift, i: number) => {
                    const position = positions?.find((p) => p.id === shift.positionId);
                    const userCanSignUp = position?.allowedUserTypes?.includes(
                        user!.privateMetadata.typeId
                    );
                    return (
                        <div
                            key={`${shift.positionId}-${i}`}
                            className="flex items-center gap-4 py-3">
                            <span className="w-36">
                                {positions?.find((p) => p.id === shift.positionId)?.label}
                            </span>
                            <span className="flex-1 truncate">
                                {shift.userId || // TODO: Change this to user's name rather than user ID.
                                    (userCanSignUp ? (
                                        <Button
                                            className="-my-1"
                                            size="sm"
                                            variant="link">
                                            Sign up
                                        </Button>
                                    ) : (
                                        ""
                                    ))}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
