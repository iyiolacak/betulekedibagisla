"use client";

import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "./ui/button";
import Image from "next/image";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import MobileSidebar from "./mobile-navbar";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="sticky top-0 flex flex-row p-4 border-b-2 justify-between md:px-20 items-center">
      <ul className="w-full flex flex-row justify-between items-center">
        <li>
          <Link
            href="/"
            className="text-md md:text-2xl font-semibold text-slate-800 items-center"
          >
            <Image
              src="/betulekedibagislalogo.png"
              alt="logo"
              width={200}
              height={1}
              className="w-40 md:w-52"
            />
          </Link>
        </li>
        <ul className="hidden md:block">
          <li>
            <Link href={"/cats"}>
            <Button variant={"link"}>Sign In</Button>
            </Link>
            <Button variant={"blue"}>Donate Kitties</Button>
            <UserButton />
          </li>
        </ul>
      </ul>
      <div className="ml-4 md:ml-0 block md:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default NavBar;
