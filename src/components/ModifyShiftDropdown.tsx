"use client";

import { useState } from "react";
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
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";
import { User } from "@clerk/nextjs/server";

type ModifyDropdownProps = {
    allUsers: User[];
    canModifySignups?: boolean;
    isMe?: boolean;
    shiftId: string;
    userAssigned?: string;
    onAssignAction?: (shiftId: string, userId: string) => void;
};

export default function ModifyShiftDropdown({
    allUsers,
    canModifySignups,
    isMe,
    shiftId,
    userAssigned,
    onAssignAction,
}: ModifyDropdownProps) {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [assignOpen, setAssignOpen] = useState<boolean>(false);

    return (
        <DropdownMenu
            open={dropdownOpen}
            onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost">
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
                                {userAssigned ? "Reassign" : "Assign"}
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
                                            {allUsers?.map((user) => (
                                                <CommandItem
                                                    key={user.id}
                                                    value={user.id}
                                                    onSelect={(value) => {
                                                        setAssignOpen(false);
                                                        setDropdownOpen(false);
                                                        onAssignAction?.(shiftId, value);
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
