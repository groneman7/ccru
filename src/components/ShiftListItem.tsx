"use client";

import { UserList } from "~/prisma/users";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "~/components/ui/dropdown-menu";
import { CalendarFold, Clock, Ellipsis, MapPin, Text, UserRound } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
// import type { EventDetailProps } from "~/components/EventDetail";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

type ShiftListItemProps = {
    canSignUp?: boolean;
    canModifySignups?: boolean;
    // event: EventDetailProps["event"];
    label: string;
    isMe?: boolean;
    positionId: string;
    user?: {
        id: string;
        name: string;
    };
    userList?: UserList;
};

export default function ShiftListItem({
    canSignUp,
    canModifySignups,
    // event,
    label,
    isMe,
    positionId,
    user,
    userList,
}: ShiftListItemProps) {
    function handleSignUp() {
        console.log("handleSignUp");
        // const response = await addUserToShift(shiftId, currentUser.id);
        // if (response.status === 200) {
        //     setConfirmModal(false);
        //     router.refresh();
        // }
    }

    return (
        <div className="flex items-center gap-4 py-3">
            <span className="w-36">{label}</span>
            <span className={cn("flex-1 truncate", isMe && "font-bold text-sky-600")}>
                {/* {user ? isMe ? "Me" : user.name : canSignUp ? <SignUp /> : null} */}
            </span>
            {/* {(isMe || canModifySignups) && <ModifyDropdown />} */}
        </div>
    );
}
