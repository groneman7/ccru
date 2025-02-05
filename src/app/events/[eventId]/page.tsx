import { SignedIn, SignedOut } from "@clerk/nextjs";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { canModifySignups, canSignUp } from "~/prisma/auth";
import { assignUserToShift, getEventById } from "~/prisma/events";
import SignUpButton from "~/components/SignUpButton";
import ModifyShiftDropdown from "~/components/ModifyShiftDropdown";
import { cn } from "~/lib/utils";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

// Event Page
export default async function Page({ params }: { params: { eventId: string } }) {
    const clerk = await clerkClient();
    const me = await currentUser();

    const { eventId } = await params;
    const { data: event, status, message } = await getEventById(eventId).then((res) => res);
    if (!event) {
        return <div>Error... event not found.</div>;
    }

    const usersAssignedToThisEvent = [
        ...new Set(
            event["shifts"]
                .filter((shift) => shift["user"] !== null && shift["user"] !== "")
                .map((shift) => shift["user"])
        ),
    ];
    const userList = await clerk.users
        .getUserList({
            limit: 500,
            userId: usersAssignedToThisEvent as string[],
        })
        .then((res) =>
            res.data.map((user) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
            }))
        );

    // Still not happy with this.. it's sloppy, and the logic is pretty basic.
    const availableUsers = me
        ? await clerk.users.getUserList({ limit: 500 }).then((res) =>
              res.data
                  .filter((user) => !usersAssignedToThisEvent.includes(user.id))
                  .map((user) => ({
                      id: user.id,
                      firstName: user.firstName,
                      lastName: user.lastName,
                  }))
          )
        : [];

    async function assignUserAction(_: any, payload: { shiftId: string; userId: string }) {
        "use server";

        const { data, message, status } = await assignUserToShift(
            payload.shiftId,
            payload.userId
        ).then((res) => res);
        console.log(status, message, data);
        return { status, message };
    }

    return (
        <div className="flex w-xl flex-col border-2 border-red-500 p-4">
            {/* Event Header */}
            <div className="flex gap-2 self-start">
                <h3 className="text-2xl font-bold">{event["name"]}</h3>
            </div>
            {/* Event Details */}
            <div className="p-4">
                {/* Event Date */}
                <div className="text-lg font-semibold">
                    {dayjs(event["date"]).format("dddd, MMMM D")}
                </div>
                {/* Event Time */}
                <div>
                    {dayjs(event["time_start"]).tz("America/New_York").format("h:mm A")} –{" "}
                    {dayjs(event["time_end"]).tz("America/New_York").format("h:mm A")}
                </div>
                {/* Event Location */}
                <div className="py-2">{event["location"]}</div>
                {/* Event Description */}
                {event["description"] && <div>{event["description"]}</div>}
                {/* Event Shifts */}
                <div className="flex flex-col divide-y px-2 py-4">
                    <SignedIn>
                        {Promise.all(
                            event["shifts"].map(async (shift) => {
                                const { position } = shift;
                                const user = userList.find((u) => u.id === shift["user"]);
                                const isMe = me?.id === shift.user;
                                const meCanSignUp = me
                                    ? await canSignUp(event.id, position.id, me.id).then(
                                          (res) => res.value
                                      )
                                    : false;

                                return (
                                    <div
                                        key={`${shift.id}`}
                                        className="flex h-16 items-center gap-4 py-3">
                                        <span className="w-44">
                                            {position.label || position.name}
                                        </span>
                                        <span
                                            className={cn(
                                                "flex-1 truncate",
                                                isMe && "font-bold text-sky-600"
                                            )}>
                                            {user ? (
                                                isMe ? (
                                                    "Me"
                                                ) : (
                                                    `${user.firstName} ${user.lastName}`
                                                )
                                            ) : meCanSignUp ? (
                                                <SignUpButton
                                                    eventDate={dayjs(event["date"]).format(
                                                        "dddd, MMMM D"
                                                    )}
                                                    eventDescription={
                                                        event["description"] || undefined
                                                    }
                                                    eventLocation={
                                                        event["location"] || undefined
                                                    }
                                                    eventName={event["name"]}
                                                    eventTimeEnd={dayjs(
                                                        event["time_end"]
                                                    ).format("h:mm A")}
                                                    eventTimeStart={dayjs(
                                                        event["time_start"]
                                                    ).format("h:mm A")}
                                                    positionLabel={
                                                        position.label || position.name!
                                                    }
                                                />
                                            ) : null}
                                        </span>
                                        <ModifyShiftDropdown
                                            allUsers={availableUsers}
                                            canModifySignups={await canModifySignups(me!.id)}
                                            isMe={isMe}
                                            onAssignAction={assignUserAction}
                                            shiftId={shift.id}
                                            userAssigned={user}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </SignedIn>
                    <SignedOut>
                        {event["shifts"].map((shift) => {
                            const { position } = shift;
                            const user = shift["user"];

                            return (
                                <div
                                    key={`${shift.id}`}
                                    className="flex items-center gap-4 py-3">
                                    <span className="w-36">
                                        {position.label || position.name}
                                    </span>
                                    <span>{user ? user : null}</span>
                                </div>
                            );
                        })}
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}
