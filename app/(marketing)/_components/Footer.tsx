import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-slate-100 md:p-4 px-8 md:px-24 *:text-slate-800 justify-between pb-24 md:pb-36">
      <div className="w-60 md:w-1/2">
        <h3 className="text-lg font-bold mt-5">betulekedibagisla</h3>
        <p className="text-xs md:text-sm mb-5">
          A silly (but adorable) cat project made with love.
          <br /> © 2024 kedybogan.
        </p>
      </div>
      <div className="flex justify-between gap-x-4">
        <div>
          <ul className="*:text-sm md:text-md">
            <li className="flex flex-col gap-y-2">
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/about"}>Help</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="*:text-sm md:text-md">
              <Link href={"/legal/privacy-policy"}>Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="*:text-sm md:text-md">
            <li className="flex flex-col gap-y-2">
              <Link href={"/about"}>Sign in</Link>
            </li>
            <li className="">
              <Link href={"/about"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
