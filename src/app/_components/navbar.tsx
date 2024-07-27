import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server'
import { Button } from "antd";

function AdminButton() {
  return (
    <Link href="/admin">
      <Button>Administrator Settings</Button>
    </Link>
  )
}

export default async function Navbar() {
  const user = await currentUser()

  return (
    <nav className="flex items-center gap-4 p-4 border-b">
      <div className="flex basis-1/4 items-center justify-start">
        <h1 className="font-bold text-xl">Compassionate Care Reaching yoU</h1>
      </div>
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
            <Button type="text">Volunteer Portal</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            {user?.privateMetadata?.role === "admin" ? <AdminButton /> : null}
            <UserButton/>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}