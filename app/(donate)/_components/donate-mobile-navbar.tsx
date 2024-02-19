import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Balance from "@/components/balance";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoLogoOctocat } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";


const DonateMobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
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
        <SheetContent side={"left"} className="p-2 pt-10">
          <SheetHeader>
            <SheetTitle>
              <Balance
                balance="1703.2"
                className="flex items-center pb-2 justify-center"
              />
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <ul className="*:p-1">
          <li>
              <Link href="/cats/buy-cats">
                <Button
                  variant={"secondary"}
                  className="flex w-full justify-start text-md "
                >
                <FaShoppingCart className="mr-2"/>
                  Buy Cats
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/cats/your-kitties">
                <Button
                  variant={"secondary"}
                  className="flex w-full justify-start text-md "
                >
                    <IoLogoOctocat className="mr-2"/>
                  Your Kitties
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/cats/donate-kitties">
                <Button
                  variant={"secondary"}
                  className="flex w-full justify-start text-md "
                >
                    <FaHeart className="mr-2"/>
                  Donate Your Kitties
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/cats/focus-time">
                <Button
                  variant={"secondary"}
                  className="flex w-full justify-start text-md "
                >
                <MdAccessTimeFilled className="mr-2"/>
                  Add Focus Time
                </Button>
              </Link>
            </li>
            <Separator />
            <h3 className="text-xs text-muted-foreground">People</h3>
            <ul className="*:mt-1.5">
            <li>
                <Skeleton className="w-full h-12">
                </Skeleton>
            </li>
            <li>
                <Skeleton className="w-full h-12">
                </Skeleton>
            </li>
            <li>
                <Skeleton className="w-full h-12">
                </Skeleton>
            </li>
            </ul>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default DonateMobileSidebar;
