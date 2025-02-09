"use client";

import { flexRender, Table as ITable } from "@tanstack/react-table";
import { ReactNode } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { Dialog, DialogContent, DialogTitle } from "~/components/ui/dialog";
import VisuallyHidden from "~/components/ui/visually-hidden";
import { cn } from "~/lib/utils";

interface TableSnackbarProps {
    children: ReactNode;
    className?: string;
    open: boolean;
}

function TableSnackbar({ children, className, open }: TableSnackbarProps) {
    return (
        <Dialog
            open={open}
            modal={false}>
            <DialogContent
                className={cn("bottom-32 top-[unset]", className)}
                hideClose
                onEscapeKeyDown={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()}>
                <VisuallyHidden asChild>
                    <DialogTitle>Snackbar</DialogTitle>
                </VisuallyHidden>
                {children}
            </DialogContent>
        </Dialog>
    );
}

interface DataTableProps<TData extends { id: string }, TValue> {
    snackbar?: ReactNode;
    snackbarClassName?: string;
    table: ITable<TData>;
}

export default function DataTable<TData extends { id: string }, TValue>({
    snackbar,
    snackbarClassName,
    table,
}: DataTableProps<TData, TValue>) {
    return (
        <>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    className="p-2">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className="p-2">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                // colSpan={columns.length}
                                className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {snackbar && (
                <TableSnackbar
                    className={snackbarClassName}
                    open={table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()}>
                    {snackbar}
                </TableSnackbar>
            )}
        </>
    );
}
