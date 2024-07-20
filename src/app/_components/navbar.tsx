import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link'
import { Button } from "antd";

export default function Navbar() {
  return (
    <nav className="flex items-center p-4 gap-4">
      <div className="flex items-center justify-start basis-1/5">
        <h1 className="text-2xl">Compassionate Care Reaching yoU</h1>
      </div>
      <div className="flex items-center justify-center gap-4 flex-1">
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
      <div className="flex  items-center justify-end basis-1/5">
        <SignedOut>
          <SignInButton>
            <Button type="text">Volunteer Portal</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}