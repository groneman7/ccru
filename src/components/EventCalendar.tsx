"use client";

import { useState } from "react";
import type { Event } from "@prisma/client";
import dayjs, { type Dayjs } from "dayjs";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { BellRing, ChevronLeft, ChevronRight } from "lucide-react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "./ui/context-menu";

interface CalendarProps {
    canEdit?: boolean;
    events?: Event[];
    initialDate?: Dayjs;
    initialMonth?: Dayjs;
    onDateClick?: (date: Dayjs) => void;
    onEventClick?: (eventId: string) => void;
}

export function EventCalendar({
    canEdit,
    events,
    initialDate,
    initialMonth,
    onDateClick,
    onEventClick,
}: CalendarProps) {
    // const test = dayjs("2024-12-01T00:00:00.000-05:00");
    // console.log(test.format("YYYY-MM-DD"));
    // console.log(events);

    const [selectedDate, setSelectedDate] = useState<Dayjs>(initialDate ?? dayjs());
    const [selectedMonth, setSelectedMonth] = useState<Dayjs>(initialMonth ?? dayjs());

    const startOfMonth = selectedMonth.startOf("month");
    const endOfMonth = selectedMonth.endOf("month");
    const startOfCalendar = startOfMonth.startOf("week");
    const endOfCalendar = endOfMonth.endOf("week");

    const DATES: Dayjs[] = [];
    let currentDate = startOfCalendar;

    // Loop for adding calendar dates to DATES array for each calendar week, starting with startOfCalendar.
    while (currentDate.isBefore(endOfCalendar) || currentDate.isSame(endOfCalendar, "day")) {
        DATES.push(currentDate);
        currentDate = currentDate.add(1, "day");
    }

    function getEventsForDate(date: Dayjs): Event[] {
        return events?.filter((event) => dayjs(event.date).isSame(date, "day")) ?? [];
    }

    function handleDateClick(date: Dayjs) {
        setSelectedDate(date);
        if (!date.isSame(selectedMonth, "month")) {
            setSelectedMonth(date);
        }
    }

    function CalendarHeader() {
        return (
            <div className="flex items-center gap-2 p-4">
                <div className="flex items-center gap-1">
                    <Button
                        onClick={() => setSelectedMonth(selectedMonth.subtract(1, "month"))}
                        size="icon"
                        variant="ghost">
                        <ChevronLeft
                            className="mr-0.5"
                            size={20}
                        />
                    </Button>
                    <Button
                        onClick={() => setSelectedMonth(selectedMonth.add(1, "month"))}
                        size="icon"
                        variant="ghost">
                        <ChevronRight
                            className="ml-0.5"
                            size={20}
                        />
                    </Button>
                </div>
                <h2 className="text-2xl font-bold">{selectedMonth.format("MMMM YYYY")}</h2>
            </div>
        );
    }

    function CalendarGrid() {
        return (
            <div className="flex flex-1 flex-col gap-0 text-center">
                <WeekdayHeaders />
                <div className="grid flex-1 grid-cols-7">
                    {/* Dates */}
                    {DATES.map((date, index) => (
                        <CalendarCell
                            key={index}
                            date={date}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        );
    }

    function WeekdayHeaders() {
        return (
            <div className="grid grid-cols-7">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div
                        key={day}
                        className="text-md py-2 font-semibold">
                        {day}
                    </div>
                ))}
            </div>
        );
    }

    function EventLine({ event }: { event: Event }) {
        return (
            <ContextMenu>
                <ContextMenuTrigger>
                    <div
                        className="bg-accent hover:bg-accent-hover active:bg-accent-active/75 flex cursor-pointer select-none rounded-sm px-1 text-sm transition-colors duration-75"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEventClick?.(e.currentTarget.id);
                        }}>
                        {event.eventName}
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Sign up</ContextMenuItem>
                    <ContextMenuItem>Share</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>{/* <BellRing /> */}Request volunteers...</ContextMenuItem>
                    <ContextMenuItem>Send reminder...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Edit</ContextMenuItem>
                    <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        );
    }

    interface CalendarCellProps {
        index: number;
        date: Dayjs;
    }

    function CalendarCell({ date, index }: CalendarCellProps) {
        return (
            <div
                className={cn(
                    "flex flex-col items-stretch justify-start transition-colors duration-75",
                    canEdit && "hover:bg-accent/25 cursor-pointer",
                    date.isSame(selectedMonth, "month") ? "bg-white" : "bg-secondary/20",
                    index % 7 < 6 && "border-r",
                    date.isBefore(endOfCalendar.subtract(1, "week")) && "border-b-1"
                )}
                /* onClick={() => handleDateClick(date)} */
            >
                <div
                    className={cn(
                        "mt-2 select-none self-center rounded-full p-1 text-sm font-semibold",
                        date.isSame(dayjs(), "date") && "bg-primary text-white",
                        !date.isSame(selectedMonth, "month") && "text-secondary-foreground/60"
                    )}>
                    {date.isSame(selectedMonth, "month") ? date.date() : date.format("MMM D")}
                </div>
                <div className="flex flex-col gap-1 p-2">
                    {getEventsForDate(date).length > 0 &&
                        getEventsForDate(date).map((event) => (
                            <EventLine
                                key={event.id}
                                event={event}
                            />
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1 flex-col items-stretch justify-stretch">
            <CalendarHeader />
            <CalendarGrid />
        </div>
    );
}
