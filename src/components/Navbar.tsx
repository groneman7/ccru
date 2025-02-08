import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import ClientUserButton from "~/components/ClientUserButton";

export default async function Navbar() {
    return (
        <nav className="flex items-center gap-4 border-b p-4">
            <Link
                href="/"
                className="flex basis-1/4 items-center justify-start">
                <img
                    src="/ccru-prev.svg"
                    className="h-10"
                    alt="CCRU logo"
                />
            </Link>
            <div className="flex flex-1 items-center justify-center gap-4">
                <Link href="/events">
                    <Button>Events</Button>
                </Link>
                <Link href="">
                    <Button>About us</Button>
                </Link>
                <Link href="">
                    <Button>Contact</Button>
                </Link>
            </div>
            <div className="flex basis-1/4 items-center justify-end">
                <SignedOut>
                    <SignInButton>
                        <Button>Volunteer Portal</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-4">
                        <ClientUserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
}
