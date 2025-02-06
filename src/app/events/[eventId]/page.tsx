import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { canModifySignups, canSignUp } from "~/prisma/auth";
import { assignUserToShift, getEventById } from "~/prisma/events";
import SignUpButton from "~/components/SignUpButton";
import ModifyShiftDropdown from "~/components/ModifyShiftDropdown";
import { cn } from "~/lib/utils";
import { CalendarFold, Clock, MapPin, Text, UserRound } from "lucide-react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ReactNode } from "react";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

// Event Page
export default async function Page({ params }: { params: { eventId: string } }) {
    // Very first: if there's no event found, then don't bother with the rest.
    const { eventId } = await params;
    const { data: event, status, message } = await getEventById(eventId).then((res) => res);
    if (!event) return <div>Error... event not found.</div>;

    const clerk = await clerkClient();
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

    // Next: let's see if we're logged in. If not, then we just need basic info.
    const me = await currentUser();
    if (!me)
        return (
            <PageWrapper>
                <BasicEventDetails />
                <BasicEventShifts />
            </PageWrapper>
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

    async function assignUserAction(
        _: any,
        payload: { shiftId: string; userId: string | null }
    ) {
        "use server";

        const { data, message, status } = await assignUserToShift(
            payload.shiftId,
            payload.userId
        ).then((res) => res);
        console.log(status, message, data);
        return { status, message };
    }

    function PageWrapper({ children }: { children: ReactNode }) {
        return (
            <div className="flex w-2xl flex-col border-2 border-red-500 p-4">{children}</div>
        );
    }

    function BasicEventDetails() {
        return (
            <>
                <div className="flex gap-2 self-start">
                    <h3 className="text-2xl font-bold">{event!["name"]}</h3>
                </div>
                <div className="p-4">
                    <div className="text-lg font-semibold">
                        {dayjs(event!["date"]).format("dddd, MMMM D")}
                    </div>
                    <div>
                        {dayjs(event!["time_start"]).tz("America/New_York").format("h:mm A")} –{" "}
                        {dayjs(event!["time_end"]).tz("America/New_York").format("h:mm A")}
                    </div>
                    <div className="py-2">{event!["location"]}</div>
                    {event!["description"] && <div>{event!["description"]}</div>}
                </div>
            </>
        );
    }

    function BasicEventShifts() {
        return (
            <div className="flex flex-col divide-y px-2 py-4">
                {event!["shifts"].map((shift) => {
                    const { position } = shift;
                    const user = userList.find((u) => u.id === shift["user"]);

                    return (
                        <div
                            key={`${shift.id}`}
                            className="flex h-16 items-center gap-4 py-3">
                            <span className="w-44">{position.label || position.name}</span>
                            <span>{user ? `${user.firstName} ${user.lastName}` : null}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex w-2xl flex-col border-2 border-red-500 p-4">
            <BasicEventDetails />
            {/* Event Shifts */}
            <div className="flex flex-col divide-y px-2 py-4">
                {Promise.all(
                    event["shifts"].map(async (shift) => {
                        const { position } = shift;
                        const user = userList.find((u) => u.id === shift["user"]);
                        const isMe = me.id === shift.user;
                        const meCanSignUp = await canSignUp(event.id, position.id, me.id).then(
                            (res) => res.value
                        );

                        return (
                            <div
                                key={`${shift.id}`}
                                className="flex h-16 items-center gap-4 py-3">
                                <span className="w-44">{position.label || position.name}</span>
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
                                            eventName={event["name"]}
                                            shiftId={shift.id}
                                            userId={me!.id}
                                            onSignUpAction={assignUserAction}>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex flex-1 items-center gap-2">
                                                    <div>
                                                        <UserRound className="h-5 w-5" />
                                                    </div>
                                                    <div className="text-lg font-bold">
                                                        {position.label || position.name!}
                                                    </div>
                                                </div>
                                                {event["description"] && (
                                                    <div className="flex flex-1 items-center gap-3">
                                                        <div>
                                                            <Text className="h-4 w-4" />
                                                        </div>
                                                        <div>{event["description"]}</div>
                                                    </div>
                                                )}
                                                <div className="flex flex-1 items-center gap-3">
                                                    <div>
                                                        <CalendarFold className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        {dayjs(event["date"]).format(
                                                            "dddd, MMMM D"
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-center gap-3">
                                                    <div>
                                                        <Clock className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        {dayjs(event["time_start"]).format(
                                                            "h:mm A"
                                                        )}{" "}
                                                        –{" "}
                                                        {dayjs(event["time_end"]).format(
                                                            "h:mm A"
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-center gap-3">
                                                    <div>
                                                        <MapPin className="h-4 w-4" />
                                                    </div>
                                                    <div>{event["location"]}</div>
                                                </div>
                                            </div>
                                        </SignUpButton>
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
            </div>
        </div>
    );
}
