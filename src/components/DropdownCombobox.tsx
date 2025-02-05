"use client";

import { ReactNode, useMemo, useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command";
import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";

type HasId = {
    id: string | number;
};

type SortKey<T> = {
    key: keyof T;
    descending?: boolean;
};

type DropdownComboboxProps<T> = T extends HasId
    ? {
          children: ReactNode;
          options: T[];
          filterKeys?: (keyof T)[];
          sortKeys?: SortKey<T>[];
          getId?: (option: T) => string | number;
          onSelect?: (option: T) => void;
          render?: (option: T) => ReactNode;
      }
    : {
          children: ReactNode;
          options: T[];
          filterKeys?: (keyof T)[];
          sortKeys?: SortKey<T>[];
          getId: (option: T) => string | number;
          onSelect?: (option: T) => void;
          render?: (option: T) => ReactNode;
      };

export default function DropdownCombobox<T>({
    children,
    filterKeys,
    options,
    sortKeys,
    onSelect,
    render,
    ...props
}: DropdownComboboxProps<T>) {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    const getId =
        props.getId ||
        ((option: T) => {
            // Type assertion is safe here if T extends HasId.
            return (option as unknown as HasId).id;
        });

    const filtered = useMemo(
        () =>
            options.filter((option) => {
                const lowerQuery = query.toLowerCase();
                if (filterKeys && filterKeys.length > 0) {
                    return filterKeys.some((key) => {
                        const value = option[key];
                        return String(value).toLowerCase().includes(lowerQuery);
                    });
                } else {
                    const idValue = getId(option);
                    return String(idValue).toLowerCase().includes(lowerQuery);
                }
            }),
        [options, filterKeys, query]
    );

    const sorted = useMemo(
        () =>
            filtered.sort((a, b) => {
                if (sortKeys && sortKeys.length > 0) {
                    for (const { key, descending } of sortKeys) {
                        const aValue = a[key];
                        const bValue = b[key];
                        if (aValue < bValue) return descending ? 1 : -1;
                        if (aValue > bValue) return descending ? -1 : 1;
                    }
                    return 0;
                } else {
                    const aId = getId(a);
                    const bId = getId(b);
                    if (aId < bId) return -1;
                    if (aId > bId) return 1;
                    return 0;
                }
            }),
        [filtered, sortKeys, query]
    );

    return (
        <DropdownMenuSub
            open={open}
            onOpenChange={setOpen}>
            <DropdownMenuSubTrigger>{children}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-0">
                <Command>
                    <CommandInput
                        value={query}
                        onValueChange={(value) => setQuery(value)}
                    />
                    <CommandList>
                        <CommandEmpty>EMPTY</CommandEmpty>
                        <CommandGroup>
                            {sorted.map((option) => (
                                <CommandItem
                                    key={option.id}
                                    onSelect={onSelect ? () => onSelect(option) : undefined}>
                                    {render ? render(option) : option.id}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    );
}
