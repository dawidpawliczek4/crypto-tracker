import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = ({}) => {
  return (
    <nav className="flex w-full items-center justify-between border-b-[1px] border-b-white/50 p-4">
      <Link href="/">
        <h1>Crypto Tracker</h1>
      </Link>
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row gap-4 items-center">
          <Link href="/portfolio">Portfolio</Link>
          <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
