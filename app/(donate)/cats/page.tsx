"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCat } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Cats = () => {
  const cat = useQuery(api.cats.get);

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
        {cat?.map(({ _id, name, price, imageUrl }) => (
          <Card className=" bg-slate-50 border-2" key={_id}>
            <CardContent className="relative w-full h-2/3 p-0 pb-2">
              <Image
                src={imageUrl}
                alt="cat"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute top-1 opacity-60 ml-2 flex flex-row items-center justify-center bg-pink-100 rounded-full w-24 my-1.5 text-pink-800 font-bold">
                {price} <FaCat className="ml-1" />
              </div>
            </CardContent>
            <CardHeader className="p-0">
              <div className="">
                <CardTitle className="flex justify-center">{name}</CardTitle>

                <CardDescription className="flex justify-center w-full">
                  <div className="flex flex-row items-center justify-center bg-pink-100 rounded-full w-24 my-1.5 text-pink-800 font-bold">
                    {price} <FaCat className="ml-1" />
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Button variant={"tertiary"} className="w-full">
                Buy it to Donate({price} <FaCat className="" />)
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cats;
