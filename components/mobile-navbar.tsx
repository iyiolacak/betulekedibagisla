import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);
  if (!isMounted) return null;

  return (
    <>
      <Button onClick={onOpen} className="block md:hidden" variant={"ghost"}>
        <CiMenuBurger className="text-2xl md:text-4xl text-slate-800" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side={"right"} className="p-2 pt-10">
          <SheetHeader className="flex items-center justify-between">
            <SheetTitle>
              <Image
                src={"/betulekedibagislalogo.png"}
                alt="betulekedibagislalogo"
                width={100}
                height={100}
              />
            </SheetTitle>
            <SheetDescription className="mt-1 text-xs">
              Enjoy your kitties.
            </SheetDescription>
            <Separator />
            <ul className="*:mt-2">
              <li>
                <Link href="/">
                  <Button variant={"link"}>Sign In</Button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Button variant={"blue"}>Donate Kitties</Button>
                </Link>
              </li>
            </ul>
            <Separator />
            <ul>
              <li>
                <Link href="/about">
                  <Button variant={"link"}>About</Button>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <Button variant={"link"}>Privacy Policy</Button>
                </Link>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
