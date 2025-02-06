"use client";

import { useActionState, useState, startTransition, ReactNode } from "react";
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
import { useRouter } from "next/navigation";

type SignUpButtonProps = {
    children: ReactNode;
    eventName: string;
    shiftId: string;
    userId: string;
    onSignUpAction: (
        state: {
            status: number | null;
            message: string | null;
        },
        payload: { shiftId: string; userId: string | null }
    ) => any;
};

export default function SignUpButton({
    children,
    eventName,
    shiftId,
    userId,
    onSignUpAction,
}: SignUpButtonProps) {
    const router = useRouter();
    const [state, action, pending] = useActionState<
        {
            status: number | null;
            message: string | null;
        },
        { shiftId: string; userId: string | null }
    >(onSignUpAction, {
        status: null,
        message: null,
    });

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link">Sign up</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    {pending ? (
                        "Loading..."
                    ) : state.status === 200 ? (
                        <AlertDialogTitle>Thank you!</AlertDialogTitle>
                    ) : (
                        <AlertDialogTitle>
                            You're signing up for <span className="font-bold">{eventName}</span>
                        </AlertDialogTitle>
                    )}
                </AlertDialogHeader>
                {state.status === 200 ? <div>Checkmark</div> : children}
                <AlertDialogFooter>
                    {state.status === 200 ? (
                        <AlertDialogCancel onClick={() => router.refresh()}>
                            Close
                        </AlertDialogCancel>
                    ) : (
                        <>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                disabled={pending}
                                onClick={(e) => {
                                    e.preventDefault();
                                    startTransition(() => action({ shiftId, userId }));
                                }}>
                                Sign up
                            </AlertDialogAction>
                        </>
                    )}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
