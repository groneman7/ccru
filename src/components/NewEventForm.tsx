"use client";

import { useState } from "react";
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
    FormDescription,
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
        // Could not parse; return null to skip formatting.
        return null;
    }

    let [, hourStr, minuteStr, ampm] = match;
    if (!hourStr)
        return console.error(
            "`hourStr` is undefined. See `parseAndFormatTime()` in New Event page."
        );

    let hour = parseInt(hourStr, 10);
    let minute = minuteStr ? parseInt(minuteStr, 10) : 0;

    // If user typed an am/pm indicator, convert to 24-hr.
    if (ampm) {
        // If pm and hour < 12, add 12.
        if (ampm.startsWith("p") && hour < 12) {
            hour += 12;
        }
        // If am and hour == 12, convert to 0.
        if (ampm.startsWith("a") && hour === 12) {
            hour = 0;
        }
    }

    if (hour > 23 || minute > 59) {
        // Invalid hour or minute.
        return null;
    }

    // Build ISO-like 24-hour time string, e.g. "15:30"
    const iso = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

    // For display, convert to 12-hour format with AM/PM.
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

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        // Provide defaultValues so fields remain controlled from the start.
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
        // start_time and end_time will be the stored 24-hour strings in the form.
        console.log(data);
    }

    // A reusable approach to keep the input displaying 12-hour time while storing 24-hour.
    const handleTimeChange = (fieldName) => {
        return (e) => {
            // We allow the user to type freely, so store their raw input for now.
            // We'll parse it on blur.
            form.setValue(fieldName, e.target.value);
        };
    };

    const handleTimeBlur = (fieldName) => {
        return (e) => {
            const inputValue = e.target.value;
            const result = parseAndFormatTime(inputValue);
            if (result) {
                // If successfully parsed, store the ISO in the form.
                form.setValue(fieldName, result.iso);
                // Then update the visual input to the display.
                e.target.value = result.display;
            } else {
                // If it didn't parse, revert to any existing ISO value in the field if present.
                const isoValue = form.getValues(fieldName);
                // If isoValue is a valid HH:mm, re-display it as 12-hour.
                if (isoValue && /^\d{2}:\d{2}$/.test(isoValue)) {
                    e.target.value = convert24to12(isoValue);
                } else {
                    // otherwise clear
                    e.target.value = "";
                    form.setValue(fieldName, "");
                }
            }
        };
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4">
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

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="time_start"
                        render={() => {
                            // We'll handle the rendering manually to keep the displayed 12-hour format.
                            const isoValue = form.getValues("time_start");
                            // If isoValue matches HH:mm, convert to 12-hour for display. Otherwise, show isoValue.
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

                <FormField
                    control={form.control}
                    name="test"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Shifts</FormLabel>
                            <FormControl>
                                <Autocomplete
                                    items={positionList.map((position) => ({
                                        id: position.id,
                                        label: position.label ?? position.name,
                                    }))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    className="mt-6"
                    type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
