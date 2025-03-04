import { ReactElement } from "react";
import Logo from "../common/logo";
import Link from "next/link";
import { Film, HomeIcon, Tv } from "lucide-react";
import Menus from "./Menus";

export type TNavLinks = {
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
    <nav className="w-full  md:min-h-[calc(100dvh-5rem)] md:w-36  md:sticky md:top-10  md:rounded-2xl bg-gray-900 flex flex-row md:flex-col items-center gap-4 p-4 md:px-0 py-4">
      <Link href="/">
        <Logo />
      </Link>

      <Menus navLinks={navlinks} />
    </nav>
  );
};

export default Sidebar;
