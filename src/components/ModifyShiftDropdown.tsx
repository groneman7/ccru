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
    onAssignAction: (
        state: { status: number | null; message: string | null },
        payload: { shiftId: string; userId: string | null }
    ) => any;
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
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [state, action, pending] = useActionState<
        { status: number | null; message: string | null },
        { shiftId: string; userId: string | null }
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
                        <DropdownMenuItem disabled>Request swap...</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() =>
                                startTransition(() => action({ shiftId, userId: null }))
                            }>
                            Remove me
                        </DropdownMenuItem>
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
                            {userAssigned && (
                                <DropdownMenuItem
                                    onClick={() =>
                                        startTransition(() => action({ shiftId, userId: null }))
                                    }>
                                    Remove
                                </DropdownMenuItem>
                            )}
                        </>
                    )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
