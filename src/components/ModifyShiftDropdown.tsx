"use client";

import { useActionState, useEffect, useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
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
import DropdownCombobox from "~/components/DropdownCombobox";
import { CalendarFold, Clock, Ellipsis, MapPin, Text, UserRound } from "lucide-react";

type ModifyDropdownProps = {
    allUsers: { id: string; firstName: string; lastName: string }[];
    canModifySignups?: boolean;
    isMe?: boolean;
    shiftId: string;
    userAssigned?: { id: string; firstName: string; lastName: string };
    onAssignAction: (state, payload) => any;
};

export default function ModifyShiftDropdown({
    allUsers,
    canModifySignups,
    isMe,
    shiftId,
    userAssigned,
    onAssignAction,
}: ModifyDropdownProps) {
    const router = useRouter();
    const [state, action, pending] = useActionState<
        { status: number | null; message: string | null },
        { shiftId: string; userId: string }
    >(onAssignAction, {
        status: null,
        message: null,
    });

    // Maybe want to consider useOptimistic instead.
    useEffect(() => {
        if (state.status === 200) {
            toast.success("Shift modified.");
            router.refresh();
        }
    }, [state]);

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    // const [assignOpen, setAssignOpen] = useState<boolean>(false);

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
                        <>
                            <DropdownCombobox
                                filterKeys={["firstName", "lastName"]}
                                sortKeys={[{ key: "lastName" }, { key: "firstName" }]}
                                onSelect={(option) => {
                                    setDropdownOpen(false);
                                    startTransition(() => {
                                        action({
                                            shiftId,
                                            userId: option.id,
                                        });
                                    });
                                }}
                                options={allUsers}
                                render={(option) => `${option.firstName} ${option.lastName}`}>
                                {userAssigned ? "Reassign" : "Assign"}
                            </DropdownCombobox>
                            <DropdownMenuItem>Remove</DropdownMenuItem>
                        </>
                    )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
