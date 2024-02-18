"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const CTA = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="p-6 md:w-2/3 rounded-xl bg-blue-100">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-lg text-center md:text-3xl font-bold text-blue-800 mb-4">
            Do you like the idea of donating cats?
          </h2>
          <Button
            className="w-full h-14 md:w-40 md:h-10 rounded-full text-md md:text-sm text-white"
            variant={"blue"}
            onClick={() => {
              router.push("/cats");
            }}
          >
            Donate Cats
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
