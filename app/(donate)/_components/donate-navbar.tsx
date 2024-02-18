import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { UserButton } from "@clerk/nextjs";
const DonateNavbar = () => {
  return (
    <>
      <div className="flex justify-between p-4 border-b-2">
        <div>
            <CiMenuBurger className="text-2xl md:text-4xl text-slate-800" />
        </div>
        <div>
            <UserButton />
        </div>
      </div>
    </>
  );
};

export default DonateNavbar;
