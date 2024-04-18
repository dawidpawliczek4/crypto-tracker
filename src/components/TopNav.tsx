import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = ({}) => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <Link href="/">
        <h1>Crypto Tracker</h1>
      </Link>
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
