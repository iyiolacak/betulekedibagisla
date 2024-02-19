"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { UserButton } from "@clerk/nextjs";
import Balance from "@/components/balance";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import DonateMobileSidebar from "./donate-mobile-navbar";

const DonateNavbar = () => {
  return (
    <>
      <div className="w-full p-4 md:px-12 items-center bg-slate-100">
        <div className="flex flex-row justify-between items-center">
          <div className="hidden md:block">
            <ul className="flex flex-row gap-x-9  text-sm font-regular md:*:text-md md:*:font-semibold *:text-slate-800">
              <li>
                <Link href="/cats/donate">Donate Your Kitties</Link>
              </li>
              <li>
                <Link href="/cats">Buy Kitties</Link>
              </li>
              <li>
                <Link href="/cats/your-cats">Your Kitties</Link>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <DonateMobileSidebar />
          </div>
          <div className="flex flex-row gap-x-5">
            <Balance balance="1902,6" />
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateNavbar;
