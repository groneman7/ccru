"use client";

import React from "react";
import { Popover, PopoverContent, PopoverAnchor } from "~/components/ui/popover";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

/** The base props common to all forms of Autocomplete. */
interface AutocompleteBaseProps<T> {
    items: T[];
    onSelect?: (item: T) => void;
    /** Called to custom-render each item. Otherwise we use either `item.label` or `getItemLabel` */
    renderItem?: (item: T) => React.ReactNode;
    /** Clear the input after a selection? */
    clearOnSelect?: boolean;
    /** Classname, placeholder, etc. */
    className?: string;
    placeholder?: string;
}

/** CASE A: T has both `id` and `label` => no getters needed or allowed. */
interface AutocompleteHasIdAndLabel<T extends { id: string; label: string }>
    extends AutocompleteBaseProps<T> {
    getItemId?: never;
    getItemLabel?: never;
}

/** CASE B: T has only `label`, so we need at least `getItemId`. */
interface AutocompleteHasLabelOnly<T extends { label: string }>
    extends AutocompleteBaseProps<T> {
    /** Must supply how to get `id`. */
    getItemId: (item: T) => string;
    /** We already have `label`, so not allowed to supply getItemLabel. */
    getItemLabel?: never;
}

/** CASE C: T has only `id`, so we need at least `getItemLabel`. */
interface AutocompleteHasIdOnly<T extends { id: string }> extends AutocompleteBaseProps<T> {
    /** We already have `id`, so not allowed to supply getItemId. */
    getItemId?: never;
    /** Must supply how to get `label`. */
    getItemLabel: (item: T) => string;
}

/** CASE D: T has neither `id` nor `label`, so we need both getters. */
interface AutocompleteNoIdNoLabel<T> extends AutocompleteBaseProps<T> {
    getItemId: (item: T) => string;
    getItemLabel: (item: T) => string;
}

/**
 * The combined type: if `T` has both `id` and `label`, you can omit the getters.
 * If it only has `label`, you must provide `getItemId`. If it only has `id`, you must provide `getItemLabel`.
 * Otherwise (neither), you must provide both.
 */
export type AutocompleteProps<T> =
    // T extends both id & label
    T extends { id: string; label: string }
        ? AutocompleteHasIdAndLabel<T>
        : // T extends label only
          T extends { label: string }
          ? AutocompleteHasLabelOnly<T>
          : // T extends id only
            T extends { id: string }
            ? AutocompleteHasIdOnly<T>
            : // T has neither
              AutocompleteNoIdNoLabel<T>;

export function Autocomplete<T>({
    className,
    clearOnSelect = false,
    items,
    placeholder = "Type to search...",
    onSelect,
    renderItem,
}: AutocompleteProps<T>) {
    const [inputValue, setInputValue] = React.useState("");
    const [open, setOpen] = React.useState(false);

    // Track which item is highlighted.
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

    // Track how the user is interacting ("mouse" or "keyboard").
    // This helps avoid fighting between mouse hover and arrow-key highlights.
    const [interactionMode, setInteractionMode] = React.useState<"mouse" | "keyboard">("mouse");

    // We'll attach a ref to the input wrapper so we can match the popover width.
    const inputWrapperRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // We'll store refs to each list item (the buttons) so we can scroll them into view.
    const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

    // Show all items if input is empty, otherwise filter.
    const filteredItems = React.useMemo(() => {
        if (!inputValue) {
            return items;
        }
        const lower = inputValue.toLowerCase();

        return items.filter((item) => item.label.toLowerCase().includes(lower));
    }, [items, inputValue]);

    function handleSelect(item: T) {
        // If clearOnSelect is true, empty out the input, otherwise set inputValue to the item's label.
        if (clearOnSelect) {
            setInputValue("");
        }
        setOpen(false);
        onSelect?.(item);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        // Switch interaction to keyboard.
        setInteractionMode("keyboard");

        if (!filteredItems.length) return;

        switch (e.key) {
            case "ArrowDown": {
                e.preventDefault();
                setHighlightedIndex((prev) => {
                    const next = prev + 1;
                    return next >= filteredItems.length ? 0 : next;
                });
                break;
            }
            case "ArrowUp": {
                e.preventDefault();
                setHighlightedIndex((prev) => {
                    const next = prev - 1;
                    return next < 0 ? filteredItems.length - 1 : next;
                });
                break;
            }
            case "Enter": {
                e.preventDefault();
                if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
                    handleSelect(filteredItems[highlightedIndex]);
                }
                break;
            }
            case "Escape": {
                setOpen(false);
                break;
            }
        }
    }

    // If the user moves the mouse inside the list, switch interaction mode to mouse.
    function handleListMouseMove() {
        if (interactionMode !== "mouse") {
            setInteractionMode("mouse");
        }
    }

    // Whenever highlightedIndex changes, scroll that item into view if using keyboard.
    React.useEffect(() => {
        if (interactionMode === "keyboard" && highlightedIndex >= 0) {
            itemRefs.current[highlightedIndex]?.scrollIntoView({
                block: "nearest",
                inline: "nearest",
            });
        }
    }, [highlightedIndex, interactionMode]);

    return (
        <div className={cn("inline-block", className)}>
            <Popover
                open={open}
                onOpenChange={setOpen}
                modal={false}>
                <PopoverAnchor asChild>
                    <div
                        ref={inputWrapperRef}
                        className="w-full">
                        <Input
                            ref={inputRef}
                            placeholder={placeholder}
                            value={inputValue}
                            onFocus={() => {
                                setOpen(true);
                            }}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setOpen(true);
                                setHighlightedIndex(-1);
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </PopoverAnchor>
                <PopoverContent
                    className="p-0"
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    style={{
                        width: inputWrapperRef.current?.offsetWidth || undefined,
                    }}>
                    {filteredItems.length > 0 ? (
                        <ul
                            className="max-h-60 overflow-auto"
                            onMouseMove={handleListMouseMove}>
                            {filteredItems.map((item, i) => {
                                const isHighlighted = i === highlightedIndex;

                                return (
                                    <li key={item.id}>
                                        <Button
                                            variant="autoselect"
                                            className={cn(
                                                isHighlighted &&
                                                    "bg-secondary text-secondary-foreground"
                                            )}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => {
                                                // Only highlight on hover if user is in mouse mode.
                                                if (interactionMode === "mouse") {
                                                    setHighlightedIndex(i);
                                                }
                                            }}
                                            ref={(el) => {
                                                itemRefs.current[i] = el;
                                            }}>
                                            {renderItem ? renderItem(item) : item.label}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <div className="px-3 py-2 text-sm text-muted-foreground">
                            No results
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
}
