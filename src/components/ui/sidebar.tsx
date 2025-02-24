import React, { ReactElement } from "react";
import Logo from "../common/logo";
import Link from "next/link";
import { Film, HomeIcon, Tv } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type TNavLinks = {
  path: string;
  icon: ReactElement;
  isActive?: boolean;
};
const Sidebar = async () => {
  const navlinks: TNavLinks[] = [
    { path: "/", icon: <HomeIcon /> },
    { path: "/movies", icon: <Film /> },
    { path: "/tv-series", icon: <Tv /> },
  ];
  return (
    <nav className="w-full sticky top-5 left-0 md:w-32  my-auto md:rounded-2xl bg-gray-900 flex flex-row md:flex-col items-center justify-between gap-4 p-4 md:px-0 py-4">
      <Link href="/">
        <Logo />
      </Link>

      <ul className="flex flex-row items-center md:flex-col gap-4">
        {navlinks.map((item) => (
          <li key={item.path}>
            <Link href={item.path} className={``}>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Sidebar;
