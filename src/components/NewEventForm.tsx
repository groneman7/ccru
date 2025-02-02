"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Autocomplete } from "~/components/Autocomplete";
import { EventPosition } from "~/prisma/client";

// A helper function to parse user input for times like "330p" or "3:30 PM".
// Returns an object containing { iso, display } if successfully parsed, or null otherwise.
function parseAndFormatTime(value: string) {
    // Trim and lowercase to simplify matching
    const raw = value.trim().toLowerCase();

    // Regex to capture hour, optional minute, and optional am/pm.
    // Examples matched: 330p, 3:30p, 330pm, 3:30 pm, 14:00, etc.
    const match = raw.match(/^([0-1]?\d|2[0-3])(?::?(\d{2}))?\s*([ap]m?)?$/);
    if (!match) {
        // Could not parse; return null.
        return null;
    }

    let [, hourStr, minuteStr, ampm] = match;
    if (!hourStr) {
        return null;
    }

    let hour = parseInt(hourStr, 10);
    let minute = minuteStr ? parseInt(minuteStr, 10) : 0;

    // If user typed an am/pm indicator, convert to 24-hr.
    if (ampm) {
        if (ampm.startsWith("p") && hour < 12) {
            hour += 12;
        }
        if (ampm.startsWith("a") && hour === 12) {
            hour = 0;
        }
    }

    if (hour > 23 || minute > 59) {
        return null;
    }

    // Build ISO-like 24-hour time string, e.g. "15:30".
    const iso = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

    // Convert to 12-hour for display.
    let displayHour = hour % 12;
    if (displayHour === 0) {
        displayHour = 12;
    }
    const amPmLabel = hour >= 12 ? "PM" : "AM";
    const displayMinute = minute.toString().padStart(2, "0");
    const display = `${displayHour}:${displayMinute} ${amPmLabel}`;

    return { iso, display };
}

// Convert a 24-hour "HH:mm" string to a 12-hour time with AM/PM for display.
function convert24to12(isoTime: string) {
    if (!isoTime) return "";
    const [hourStr, minuteStr] = isoTime.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    let displayHour = hour % 12;
    if (displayHour === 0) {
        displayHour = 12;
    }
    const amPmLabel = hour >= 12 ? "PM" : "AM";
    const displayMinute = minute.toString().padStart(2, "0");
    return `${displayHour}:${displayMinute} ${amPmLabel}`;
}

const FormSchema = z.object({
    name: z.string().nonempty({ message: "Event name is required." }),
    event_date: z.date({
        required_error: "Event date is required.",
    }),
    time_start: z.string().optional(),
    time_end: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
});

type EventFormProps = {
    positionList: EventPosition[];
};

export default function NewEventForm({ positionList }: EventFormProps) {
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

    // We'll store selected positions + their quantity in local state.
    const [selectedPositions, setSelectedPositions] = useState<
        {
            id: string;
            name: string;
            label: string;
            quantity: number;
        }[]
    >([]);

    // React Hook Form setup
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            event_date: undefined,
            time_start: "",
            time_end: "",
            description: "",
            location: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // You may want to also pass selectedPositions.
        console.log("Form submitted:", data);
        console.log("Positions:", selectedPositions);
    }

    // Time input logic
    const handleTimeChange = (fieldName: keyof z.infer<typeof FormSchema>) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            form.setValue(fieldName, e.target.value);
        };
    };

    const handleTimeBlur = (fieldName: keyof z.infer<typeof FormSchema>) => {
        return (e: React.FocusEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            const result = parseAndFormatTime(inputValue);
            if (result) {
                form.setValue(fieldName, result.iso);
                e.target.value = result.display;
            } else {
                const isoValue = form.getValues(fieldName);
                if (isoValue && /^\d{2}:\d{2}$/.test(isoValue)) {
                    e.target.value = convert24to12(isoValue);
                } else {
                    e.target.value = "";
                    form.setValue(fieldName, "");
                }
            }
        };
    };

    // Filter out positions the user has already selected.
    const availablePositions = positionList
        .filter((p) => !selectedPositions.some((sel) => sel.id === p.id))
        .map((p) => ({ id: p.id, name: p.name, label: p.label ?? p.name }));

    // Handle user selecting a position from the Autocomplete.
    function handleSelectPosition(position: { id: string; label: string }) {
        // Find the position in positionList by label.
        const found = positionList.find((p) => p.id === position.id);
        if (!found) return;

        // Add it to selectedPositions with default quantity of 1.
        setSelectedPositions((prev) => [
            ...prev,
            {
                id: found.id,
                name: found.name,
                label: found.label ?? found.name,
                quantity: 1,
            },
        ]);
    }

    useEffect(() => {
        console.log(selectedPositions);
    }, [selectedPositions]);

    function handleRemovePosition(id: string) {
        setSelectedPositions((prev) => prev.filter((p) => p.id !== id));
    }

    function handleQuantityChange(id: string, newQty: number) {
        setSelectedPositions((prev) =>
            prev.map((p) => {
                if (p.id === id) {
                    return { ...p, quantity: newQty };
                }
                return p;
            })
        );
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4">
                {/* Event Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Enter event name"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Event Date */}
                <FormField
                    control={form.control}
                    name="event_date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Date</FormLabel>
                            <Popover
                                open={datePickerOpen}
                                onOpenChange={setDatePickerOpen}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            data-date-picker={
                                                datePickerOpen ? "open" : "closed"
                                            }
                                            variant="daypicker"
                                            className={cn(
                                                "text-left font-normal",
                                                !field.value && "text-slate-400"
                                            )}>
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(e) => {
                                            field.onChange(e);
                                            setDatePickerOpen(false);
                                        }}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Start / End Time */}
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="time_start"
                        render={() => {
                            const isoValue = form.getValues("time_start");
                            const displayValue =
                                isoValue && /^\d{2}:\d{2}$/.test(isoValue)
                                    ? convert24to12(isoValue)
                                    : isoValue;

                            return (
                                <FormItem>
                                    <FormLabel>
                                        Start Time{" "}
                                        <span className="text-placeholder">(optional)</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. 10:00 AM"
                                            value={displayValue}
                                            onChange={handleTimeChange("time_start")}
                                            onBlur={handleTimeBlur("time_start")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="time_end"
                        render={() => {
                            const isoValue = form.getValues("time_end");
                            const displayValue =
                                isoValue && /^\d{2}:\d{2}$/.test(isoValue)
                                    ? convert24to12(isoValue)
                                    : isoValue;

                            return (
                                <FormItem>
                                    <FormLabel>
                                        End Time{" "}
                                        <span className="text-placeholder">(optional)</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. 2:00 PM"
                                            value={displayValue}
                                            onChange={handleTimeChange("time_end")}
                                            onBlur={handleTimeBlur("time_end")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                </div>

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Description <span className="text-placeholder">(optional)</span>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Enter event description"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Location */}
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Enter event location"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Positions Section */}
                <div className="flex flex-col">
                    <FormLabel>Positions</FormLabel>
                    <div className="mt-2 space-y-2">
                        {/* Render selected positions, each with a quantity and remove button */}
                        {selectedPositions.map((pos) => (
                            <div
                                key={pos.id}
                                className="flex items-center gap-2">
                                <div className="flex flex-1 items-center justify-between gap-2">
                                    <span>{pos.label}</span>
                                    <span className="text-xs text-placeholder">{pos.name}</span>
                                </div>
                                <Input
                                    type="number"
                                    className="w-18"
                                    value={pos.quantity}
                                    min={1}
                                    onChange={(e) =>
                                        handleQuantityChange(
                                            pos.id,
                                            parseInt(e.target.value || "1", 10)
                                        )
                                    }
                                />
                                <Button
                                    variant="destructive"
                                    type="button"
                                    onClick={() => handleRemovePosition(pos.id)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                    </div>

                    <Autocomplete
                        className="mt-2"
                        clearOnSelect
                        items={availablePositions}
                        placeholder="Search for a position..."
                        renderItem={(item) => (
                            <div className="flex w-full items-center justify-between gap-2">
                                <span>{item.label}</span>
                                <span className="text-xs text-placeholder">{item.name}</span>
                            </div>
                        )}
                        onSelect={handleSelectPosition}
                    />
                </div>

                <Button
                    className="mt-6"
                    type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
