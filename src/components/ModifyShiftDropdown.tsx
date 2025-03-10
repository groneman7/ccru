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
    AlertDialogDescription,
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
import { AssignUserToShiftPayload } from "~/prisma/events";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";
import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

type ModifyDropdownProps = {
    allUsers: { id: string; firstName: string; lastName: string }[];
    canModifySignups?: boolean;
    isMe?: boolean;
    shiftId: string;
    userAssigned?: { id: string; firstName: string; lastName: string };
    onAssignAction: (
        state: { status: number | null; message: string | null; userId: string | null },
        payload: AssignUserToShiftPayload
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
    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [state, action, pending] = useActionState<
        { status: number | null; message: string | null; userId: string | null },
        AssignUserToShiftPayload
    >(onAssignAction, {
        status: null,
        message: null,
        userId: null,
    });

    // Maybe want to consider useOptimistic instead.
    useEffect(() => {
        if (state.status === 200) {
            toast.success("Shift modified.");
            router.refresh();
        }
        if (state.status === 403) {
            setAlertMessage(state.message || "Nonspecific error modifying shift.");
            setAlertOpen(true);
        }
    }, [state]);

    function OverrideAlert() {
        const FormSchema = z.object({
            reason: z.string().nonempty({ message: "Override reason is required." }),
            comments: z.string().optional(),
        });

        const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
            defaultValues: {
                reason: "",
                comments: "",
            },
        });

        const reason = useWatch({ control: form.control, name: "reason" });

        return (
            <AlertDialog
                open={alertOpen}
                onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Error</AlertDialogTitle>
                        <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <div>
                        <Form {...form}>
                            <form className="flex flex-col gap-4">
                                <FormField
                                    name="reason"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Override reason</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select override reason..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="ADMIN_OVERRIDE">
                                                        Administrative override
                                                    </SelectItem>
                                                    <SelectItem value="BUG">
                                                        Application bug
                                                    </SelectItem>
                                                    <SelectItem value="TEMPORARY">
                                                        Temporary override
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="comments"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Override comments (optional)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter override comments"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            disabled={!reason || reason === ""}
                            onClick={() => {
                                startTransition(() =>
                                    action({
                                        shiftId,
                                        userId: state.userId,
                                        override: {
                                            reason: form.getValues("reason"),
                                            comments: form.getValues("comments"),
                                        },
                                    })
                                );
                                setAlertOpen(false);
                            }}>
                            Override
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    }

    return (
        <>
            <OverrideAlert />
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
                                    render={(option) =>
                                        `${option.firstName} ${option.lastName}`
                                    }>
                                    {userAssigned ? "Reassign" : "Assign"}
                                </DropdownCombobox>
                                {userAssigned && (
                                    <DropdownMenuItem
                                        onClick={() =>
                                            startTransition(() =>
                                                action({ shiftId, userId: null })
                                            )
                                        }>
                                        Remove
                                    </DropdownMenuItem>
                                )}
                            </>
                        )
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
