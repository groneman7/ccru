"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn, parseAndFormatTime, convert24to12, combineDateAndTimeToUTC } from "~/lib/utils";
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
import type { Event, EventPosition, EventShift, Prisma } from "~/prisma/client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

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
    currentUserId: string;
    positionList: EventPosition[];
    onSubmitAction: (
        event: Omit<Prisma.EventCreateInput, "created_by">,
        positions: string[]
    ) => Promise<void>;
};

export default function NewEventForm({
    currentUserId,
    positionList,
    onSubmitAction,
}: EventFormProps) {
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
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

    // onSubmit: convert local times to UTC + post.
    function onSubmit(data: z.infer<typeof FormSchema>) {
        const { name, event_date, time_start, time_end, description, location } = data;

        // interpret event_date in local TZ => store as UTC date
        const dateUTC = dayjs(event_date).tz("America/New_York", true).utc().toDate();

        const startUTC = time_start
            ? combineDateAndTimeToUTC(event_date!, time_start)
            : undefined;
        const endUTC = time_end ? combineDateAndTimeToUTC(event_date!, time_end) : undefined;

        // Build the "shifts" array. If quantity > 1, we repeat that item.
        const positions = selectedPositions.flatMap((pos) => {
            const shiftArray = [];
            for (let i = 0; i < pos.quantity; i++) {
                shiftArray.push(pos.id);
            }
            return shiftArray;
        });

        const payload: Omit<Prisma.EventCreateInput, "created_by"> = {
            name,
            date: dateUTC,
            description: description || null,
            location: location || null,
            time_start: startUTC ?? null,
            time_end: endUTC ?? null,
        };

        onSubmitAction(payload, positions);
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
                // action={onSubmit}
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
                                                dayjs(field.value).format("dddd, MMMM D, YYYY")
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
