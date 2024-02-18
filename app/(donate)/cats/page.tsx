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

const Cats = () => {
  const cat = useQuery(api.cats.get);

  return (
    <div className="p-12">
      <div className="grid grid-cols-6 gap-3">
        {cat?.map(({ _id, name, price, imageUrl }) => (
          <Card key={_id}>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription className="flex flex-row items-center">{price} <FaCat className="ml-1"/> </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={imageUrl}
                alt="cat"
                width={100}
                height={100}
              />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cats;
