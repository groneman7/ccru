"use client";
import { UserButton } from "@clerk/nextjs";

export default function ClientUserButton() {
    return (
        <UserButton
            appearance={{ layout: { shimmer: false } }}
            showName>
            <UserButton.MenuItems>
                <UserButton.Link
                    label="Users"
                    labelIcon={"U"}
                    href="/users"
                />
            </UserButton.MenuItems>
        </UserButton>
    );
}
