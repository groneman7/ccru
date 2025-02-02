"use client";

import React from "react";
import { Popover, PopoverContent, PopoverAnchor } from "~/components/ui/popover";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface AutocompleteItem {
    id: string;
    label: string;
}

interface AutocompleteProps {
    /** The list of items to filter and display. */
    items: AutocompleteItem[];
    /** Called when a user selects an item's label. */
    onSelect?: (itemLabel: string) => void;
    /** Placeholder for the input. */
    placeholder?: string;
    /** ClassName for the outer container. */
    className?: string;
}

export function Autocomplete({
    items,
    onSelect,
    placeholder = "Type to search...",
    className,
}: AutocompleteProps) {
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

    function handleSelect(item: AutocompleteItem) {
        setInputValue(item.label);
        setOpen(false);
        onSelect?.(item.label);
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
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start",
                                                isHighlighted
                                                    ? "bg-accent text-accent-foreground"
                                                    : "hover:bg-accent/10"
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
                                            {item.label}
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
