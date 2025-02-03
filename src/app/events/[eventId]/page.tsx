import { SignedIn, SignedOut } from "@clerk/nextjs";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { getEventById, getPositionsByIds } from "~/prisma/events";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { success } from "~/lib/defaultQueryResponses";
import { canSignUp } from "~/prisma/auth";
import { cn } from "~/lib/utils";
import { EventShift } from "~/prisma/client";
import SignUpButton from "~/components/SignUpButton";
dayjs.extend(utc);
dayjs.extend(timezone);

// Event Page
export default async function Page({ params }: { params: { eventId: string } }) {
    const clerk = await clerkClient();
    const me = await currentUser();

    const { eventId } = await params;
    const eventsResponse = await getEventById(eventId);
    if (!success(eventsResponse)) {
        return <div>No event found.</div>;
    }
    const event = eventsResponse.data;

    const positionsToDisplay = [...new Set(event["shifts"].map((shift) => shift["position"]))];
    const positionsResponse = await getPositionsByIds(positionsToDisplay);
    if (!success(positionsResponse)) {
        return <div>Error... positions not found.</div>;
    }
    const positions = positionsResponse.data;

    const usersToDisplay = [
        ...new Set(
            event["shifts"]
                .filter((shift) => shift["user"] !== null && shift["user"] !== "")
                .map((shift) => shift["user"])
        ),
    ];
    const { data: userList } = await clerk.users.getUserList({
        userId: usersToDisplay as string[],
    });

    return (
        <div className="p-4">
            <div className="flex flex-col justify-between gap-2">
                <h3 className="text-2xl font-bold">{event["name"]}</h3>
            </div>
            <div className="p-4">
                <div className="text-lg font-semibold">
                    {dayjs(event["date"]).format("dddd, MMMM D")}
                </div>
                <div>
                    {dayjs(event["time_start"]).tz("America/New_York").format("h:mm A")} –{" "}
                    {dayjs(event["time_end"]).tz("America/New_York").format("h:mm A")}
                </div>
                <div className="py-2">{event["location"]}</div>
                <div className="flex flex-col divide-y px-2 py-4">
                    <SignedIn>
                        {Promise.all(
                            event["shifts"].map(async (shift: EventShift, i: number) => {
                                const position = positions.find(
                                    (p) => p.id === shift["position"]
                                )!;
                                const user = userList.find((u) => u.id === shift["user"]);
                                const isMe = me?.id === shift.user;
                                const meCanSignUp = me
                                    ? await canSignUp(me.id, shift["position"])
                                    : false;

                                return (
                                    <div
                                        key={`${i}-${shift["position"]}`}
                                        className="flex items-center gap-4 py-3">
                                        <span className="w-36">
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
                                                    eventTimeEnd={dayjs(event["time_end"])
                                                        .tz("America/New_York")
                                                        .format("h:mm A")}
                                                    eventTimeStart={dayjs(event["time_start"])
                                                        .tz("America/New_York")
                                                        .format("h:mm A")}
                                                    positionLabel={
                                                        position.label || position.name!
                                                    }
                                                />
                                            ) : null}
                                        </span>
                                    </div>
                                );
                            })
                        )}
                    </SignedIn>
                    <SignedOut>
                        {event["shifts"].map((shift: EventShift, i: number) => {
                            const position = positions.find((p) => p.id === shift["position"])!;
                            const user = shift["user"];

                            return (
                                <div
                                    key={`${i}-${shift["position"]}`}
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

// {
//     Promise.all(
//         event["shifts"].map(async (shift: EventShift) => {
//             return (
//                 <>
//                     <SignedIn>
//                         <div className="flex items-center gap-4 py-3">
//                             <span className="w-36">{position.label || position.name}</span>
//                             <span
//                                 className={cn(
//                                     "flex-1 truncate",
//                                     isMe && "font-bold text-sky-600"
//                                 )}>
//                                 {user ? isMe ? "Me" : user.name : canSignUp ? <SignUp /> : null}
//                             </span>
//                             {(isMe || canModifySignups) && <ModifyDropdown />}
//                         </div>
//                         {/* <ShiftListItem
//                                             key={`${i}-${shift["position"]}`}
//                                             canSignUp={
//                                                 me
//                                                     ? await canSignUp(me.id, shift["position"])
//                                                     : false
//                                             }
//                                             canModifySignups={canModifySignups}
//                                             event={event}
//                                             isMe={me?.id === shift.user?.id}
//                                             label={
//                                                 shift.positionLabel ||
//                                                 "Position label not found."
//                                             }
//                                             positionId={shift["position"]}
//                                             user={shift["user"]}
//                                             userList={
//                                                 me?.id === shift["user"]?.id || canModifySignups
//                                                     ? userList
//                                                     : undefined
//                                             }
//                                         /> */}
//                     </SignedIn>
//                     {/* <SignedOut>
//                                         <ShiftListItem
//                                             key={`${i}-${shift["position"]}`}
//                                             // event={event}
//                                             label={
//                                                 shift.positionLabel ||
//                                                 "Position label not found."
//                                             }
//                                             user={shift["user"]}
//                                         />
//                                     </SignedOut> */}
//                 </>
//             );
//         })
//     );
// }

// {
//     <div>
//         {event ? (
//             <EventDetail
//                 key={event.id}
//                 event={event}
//             />
//         ) : (
//             <div>Empty</div>
//         )}
//     </div>;
// }
