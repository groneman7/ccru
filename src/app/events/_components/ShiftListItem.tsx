"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Event, EventPosition } from "~/prisma/client";
import { Button } from "~/components/ui/button";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
// import { addUserToShift } from "~/server/queries";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

type ShiftListItemProps = {
    key: string;
    currentUser: {
        id: string;
        name: string;
        username: string;
    };
    event: Event;
    position: EventPosition;
    shiftId: string;
    volunteer?: string;
};

export default function ShiftListItem({
    key,
    currentUser,
    event,
    position,
    shiftId,
    volunteer,
}: ShiftListItemProps) {
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    const router = useRouter();

    async function handleSignUp() {
        console.log("handleSignUp");
        // const response = await addUserToShift(shiftId, currentUser.id);
        // if (response.status === 200) {
        //     setConfirmModal(false);
        //     router.refresh();
        // }
    }

    function ConfirmModal(/* props: ModalProps */) {
        return (
            <div>Confirm Modal</div>
            // <Modal {...props}>
            //     <div className="p-2">
            //         <div className="px-4 py-1">
            //             <h4 className="text-xl font-bold">
            //                 {dayjs(event.date).format("dddd, MMMM D, YYYY")}
            //             </h4>
            //             <div className="flex flex-col gap-1 p-4">
            //                 <h5 className="text-lg font-semibold">{event.eventName}</h5>
            //                 <div>
            //                     {dayjs.tz(event.timeStart).format("h:mm A")} –{" "}
            //                     {dayjs.tz(event.timeEnd).format("h:mm A")}
            //                 </div>
            //                 <div>{event.location}</div>
            //             </div>
            //         </div>
            //         <Divider orientation="left">Sign up</Divider>
            //         <div className="p-4">
            //             <div className="flex items-center justify-center gap-4 text-lg">
            //                 <span>{position?.label ?? position?.positionName}</span>
            //                 <span>{currentUser.name}</span>
            //             </div>
            //         </div>
            //     </div>
            // </Modal>
        );
    }

    return (
        <>
            {/* <ConfirmModal
                open={confirmModal}
                onCancel={() => setConfirmModal(false)}
                onOk={handleSignUp}
            /> */}
            <div
                key={key}
                className="flex items-center gap-4 pt-2">
                <div className="basis-1/3">{position?.label ?? position?.positionName}</div>
                {volunteer ? (
                    <div>{volunteer}</div>
                ) : (
                    <Button
                        onClick={() => setConfirmModal(true)}
                        /* type="text" */
                    >
                        Sign up
                    </Button>
                )}
            </div>
        </>
    );
}
