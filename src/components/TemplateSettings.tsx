"use client";

import { useState } from "react";
import { EventPosition, Prisma } from "~/prisma/client";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
    Button,
    DialogDescription,
} from "~/components/ui";
import NewEventTemplateForm from "./NewEventTemplateForm";
import VisuallyHidden from "~/components/ui/visually-hidden";

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
            <Dialog
                open={open}
                onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>New Template</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="">
                    <DialogTitle>New Event Template</DialogTitle>
                    <VisuallyHidden>
                        <DialogDescription>
                            Create a new event template to use for your events.
                        </DialogDescription>
                    </VisuallyHidden>
                    <div>
                        <NewEventTemplateForm
                            positionList={positionList}
                            onSuccess={() => setOpen(false)}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
