"use client";
import type { Event, EventPosition } from "~/prisma/client";
import { Button } from "~/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { cn } from "~/lib/utils";
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
import type { EventDetailProps } from "./EventDetail";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";
import { UserList } from "~/prisma/users";
import { useState } from "react";
// import { addUserToShift } from "~/server/queries";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

type ShiftListItemProps = {
    canSignUp?: boolean;
    canModifySignups?: boolean;
    event: EventDetailProps["event"];
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
    event,
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

    function SignUp() {
        return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="link">Sign up</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            You're signing up for{" "}
                            <span className="font-bold">{event.eventName}</span>
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-1 items-center gap-2">
                            <div>
                                <UserRound className="h-5 w-5" />
                            </div>
                            <div className="text-lg font-bold">{label}</div>
                        </div>
                        {event.description && (
                            <div className="flex flex-1 items-center gap-3">
                                <div>
                                    <Text className="h-4 w-4" />
                                </div>
                                <div>{event.description}</div>
                            </div>
                        )}
                        <div className="flex flex-1 items-center gap-3">
                            <div>
                                <CalendarFold className="h-4 w-4" />
                            </div>
                            <div>{event.date.toDateString()}</div>
                        </div>
                        <div className="flex flex-1 items-center gap-3">
                            <div>
                                <Clock className="h-4 w-4" />
                            </div>
                            <div>
                                {event.timeStart?.toTimeString()} –{" "}
                                {event.timeEnd?.toTimeString()}
                            </div>
                        </div>
                        <div className="flex flex-1 items-center gap-3">
                            <div>
                                <MapPin className="h-4 w-4" />
                            </div>
                            <div>{event.location}</div>
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                        // onClick={handleSignUp}
                        >
                            Sign up
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    }

    function ModifyDropdown() {
        const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
        const [assignOpen, setAssignOpen] = useState<boolean>(false);

        return (
            <DropdownMenu
                open={dropdownOpen}
                onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        variant="secondary">
                        <Ellipsis className="p-1" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {isMe ? (
                        <>
                            <DropdownMenuItem>Cancel</DropdownMenuItem>
                            <DropdownMenuItem>Swap</DropdownMenuItem>
                        </>
                    ) : (
                        canModifySignups && (
                            <DropdownMenuSub
                                open={assignOpen}
                                onOpenChange={setAssignOpen}>
                                <DropdownMenuSubTrigger>
                                    {user ? "Reassign" : "Assign"}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Seach users..."
                                            autoFocus={true}
                                            className="h-9"
                                        />
                                        <CommandList>
                                            <CommandEmpty>No users found.</CommandEmpty>
                                            <CommandGroup>
                                                {userList?.map((user) => (
                                                    <CommandItem
                                                        key={user.id}
                                                        value={user.id}
                                                        onSelect={(value) => {
                                                            console.log(value);
                                                            setAssignOpen(false);
                                                            setDropdownOpen(false);
                                                        }}>
                                                        {user.firstName} {user.lastName}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        )
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <div className="flex items-center gap-4 py-3">
            <span className="w-36">{label}</span>
            <span className={cn("flex-1 truncate", isMe && "font-bold text-sky-600")}>
                {user ? isMe ? "Me" : user.name : canSignUp ? <SignUp /> : null}
            </span>
            {(isMe || canModifySignups) && <ModifyDropdown />}
        </div>
    );
}

// <Select>
//     <SelectTrigger className="">
//         <SelectValue placeholder="Assign user" />
//     </SelectTrigger>
//     <SelectContent>
//         {/* {userList.map((user) => {
//             return (
//                 <SelectItem
//                     key={user.username}
//                     value={user.username}>
//                     {user.firstName} {user.lastName}
//                 </SelectItem>
//             );
//         })} */}
//     </SelectContent>
// </Select>
