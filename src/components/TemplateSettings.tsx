"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button,
} from "~/components/ui";
import NewEventTemplateForm from "./NewEventTemplateForm";
import { EventPosition, Prisma } from "~/prisma/client";
import { useState } from "react";

type TemplateSettingsProps = {
    positionList: EventPosition[];
    // onSubmitAction: (eventTemplate: Prisma.EventTemplateCreateInput) => Promise<void>;
};

export default function TemplateSettings({
    positionList,
    // onSubmitAction,
}: TemplateSettingsProps) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <AlertDialog
                open={open}
                onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button>New Template</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogTitle>New Event Template</AlertDialogTitle>
                    <div>
                        <NewEventTemplateForm
                            positionList={positionList}
                            onSuccess={() => setOpen(false)}
                        />
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
