"use client";

import { useState } from "react";
import { cn } from "~/lib/utils";
import { EventPosition } from "~/prisma/client";

type PositionsSettingsProps = {
    positions: EventPosition[];
};

export default function PositionsSettings({ positions }: PositionsSettingsProps) {
    const [selectedPosition, setSelectedPosition] = useState<EventPosition | null>(null);

    return (
        <div className="flex gap-4 px-4">
            <div className="border-border rounded-md border">
                {positions.map((position) => {
                    return (
                        <div
                            key={position.id}
                            className={cn(
                                "hover:bg-accent/40 cursor-pointer select-none px-4 py-2 transition-colors duration-0 hover:duration-75",
                                selectedPosition?.id === position.id && "bg-accent/60"
                            )}
                            onClick={() => setSelectedPosition(position)}>
                            {position.label ?? position.name}
                        </div>
                    );
                })}
            </div>
            {selectedPosition && (
                <div className="flex flex-1 flex-col gap-1">
                    <span>{selectedPosition.name}</span>
                    {selectedPosition.label && (
                        <span className="text-lg font-semibold">{selectedPosition.label}</span>
                    )}
                </div>
            )}
        </div>
    );
}
