"use client";

import { CalendarFold, Clock, MapPin, Text, UserRound } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

type SignUpButtonProps = {
    eventDate: string;
    eventDescription?: string;
    eventLocation?: string;
    eventName: string;
    eventTimeEnd?: string;
    eventTimeStart?: string;
    positionLabel: string;
};

export default function SignUpButton({
    eventDate,
    eventDescription,
    eventLocation,
    eventName,
    eventTimeEnd,
    eventTimeStart,
    positionLabel,
}: SignUpButtonProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link">Sign up</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        You're signing up for <span className="font-bold">{eventName}</span>
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-1 items-center gap-2">
                        <div>
                            <UserRound className="h-5 w-5" />
                        </div>
                        <div className="text-lg font-bold">{positionLabel}</div>
                    </div>
                    {eventDescription && (
                        <div className="flex flex-1 items-center gap-3">
                            <div>
                                <Text className="h-4 w-4" />
                            </div>
                            <div>{eventDescription}</div>
                        </div>
                    )}
                    <div className="flex flex-1 items-center gap-3">
                        <div>
                            <CalendarFold className="h-4 w-4" />
                        </div>
                        <div>{eventDate}</div>
                    </div>
                    <div className="flex flex-1 items-center gap-3">
                        <div>
                            <Clock className="h-4 w-4" />
                        </div>
                        <div>
                            {eventTimeStart} – {eventTimeEnd}
                        </div>
                    </div>
                    <div className="flex flex-1 items-center gap-3">
                        <div>
                            <MapPin className="h-4 w-4" />
                        </div>
                        <div>{eventLocation}</div>
                    </div>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                    // onClick={handleSignUp}
                    >
                        Sign up
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
