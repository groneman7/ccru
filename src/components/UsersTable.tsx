"use client";
import { startTransition, useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { UserRole, UserType } from "~/prisma/client";
import {
    ColumnDef,
    getCoreRowModel,
    RowSelectionState,
    useReactTable,
} from "@tanstack/react-table";
import DataTable from "~/components/ui/data-table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { X } from "lucide-react";

type UsersTableProps = {
    data: UserToRender[];
    userRoles: UserRole[];
    userTypes: UserType[];
    onSetRoleAction: (
        state: { status: number | null; message: string | null },
        payload: { userId: string | string[]; roleId: string }
    ) => any;
    onSetTypeAction: (
        state: { status: number | null; message: string | null },
        payload: { userId: string | string[]; typeId: string }
    ) => any;
};

export default function UsersTable({
    data,
    userRoles,
    userTypes,
    onSetRoleAction,
    onSetTypeAction,
}: UsersTableProps) {
    // const router = useRouter();
    const [roleState, roleAction, rolePending] = useActionState<
        { status: number | null; message: string | null },
        { userId: string | string[]; roleId: string }
    >(onSetRoleAction, {
        status: null,
        message: null,
    });
    const [typeState, typeAction, typePending] = useActionState<
        { status: number | null; message: string | null },
        { userId: string | string[]; typeId: string }
    >(onSetTypeAction, {
        status: null,
        message: null,
    });
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [columns] = useState<ColumnDef<UserToRender>[]>([
        {
            id: "select",
            header: ({ table }) => (
                <div className="pl-2">
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    />
                </div>
            ),
            cell: ({ row }) => (
                <div className="pl-2">
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                    />
                </div>
            ),
        },
        {
            accessorKey: "firstName",
            header: () => <div className="font-bold">First Name</div>,
            enableSorting: true,
        },
        {
            accessorKey: "lastName",
            header: "Last Name",
        },
        {
            accessorKey: "role",
            header: "User Role",
            cell: ({ row }) => row.original.role?.label,
        },
        {
            accessorKey: "type",
            header: "User Type",
            cell: ({ row }) => row.original.type?.label,
        },
    ]);

    const table = useReactTable({
        columns,
        data,
        enableMultiRowSelection: true,
        state: {
            rowSelection,
        },
        getCoreRowModel: getCoreRowModel(),
        getRowId: (row) => row.id,
        onRowSelectionChange: setRowSelection,
    });

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
                <div className="flex gap-2">
                    <Button>New User</Button>
                    <Button variant="secondary">Filter</Button>
                    <Button variant="secondary">Sort</Button>
                    <Button variant="secondary">Columns</Button>
                </div>
                <Input placeholder="Search users" />
            </div>
            <DataTable
                // data={data}
                // columns={columns}
                table={table}
                snackbar={
                    <>
                        <span className="mr-2 ml-1">
                            <span className="font-semibold">
                                {table.getSelectedRowModel().rows.length}
                            </span>{" "}
                            selected
                        </span>
                        <div className="flex gap-2">
                            <Select
                                onValueChange={(value) =>
                                    startTransition(() =>
                                        roleAction({
                                            userId: table
                                                .getSelectedRowModel()
                                                .rows.map((row) => row.original.id),
                                            roleId: value,
                                        })
                                    )
                                }>
                                <SelectTrigger className="w-auto">
                                    <SelectValue placeholder="Change Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    {userRoles.map((role) => (
                                        <SelectItem
                                            key={role.id}
                                            value={role.id}>
                                            {role.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select
                                onValueChange={(value) =>
                                    startTransition(() =>
                                        typeAction({
                                            userId: table
                                                .getSelectedRowModel()
                                                .rows.map((row) => row.original.id),
                                            typeId: value,
                                        })
                                    )
                                }>
                                <SelectTrigger className="w-auto">
                                    <SelectValue placeholder="Change Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {userTypes.map((type) => (
                                        <SelectItem
                                            key={type.id}
                                            value={type.id}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button variant="secondary">Suspend</Button>
                        </div>
                        <Button
                            onClick={() => table.setRowSelection({})}
                            size="icon"
                            variant="ghost">
                            <X className="ml-0.25 h-4 w-4" />
                        </Button>
                    </>
                }
                snackbarClassName="select-none flex items-center justify-center gap-2 p-2 drop-shadow-2xl w-auto min-w-96"
            />
        </div>
    );
}
