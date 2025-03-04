"use client";
import { FC } from "react";
import { TNavLinks } from "./sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TMenu = {
  navLinks: TNavLinks[];
};

const Menus: FC<TMenu> = ({ navLinks }) => {
  const currentpath = usePathname();

  return (
    <ul className="flex flex-row items-center md:flex-col gap-4 md:gap-6 md:mt-4">
      {navLinks.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`${
              currentpath === item.path ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menus;
