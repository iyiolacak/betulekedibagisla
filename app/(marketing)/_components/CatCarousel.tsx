import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const url = ["/sleepycat.png", "/cat2.png", "/cat7.jpg", "/cat4.png", "/cat1.png", "/cat5.png", "/cat3.png"];

const CatCarousel = () => {
    return (
    <>
      <div className="flex w-full justify-center my-5">
        <Carousel className="w-full max-w-xs lg:max-w-xl relative">
          <CarouselContent className="">
            {url.map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                        <AspectRatio ratio={1/1}>
                            <Image src={url[index]} alt="cat"
                            fill className="w-full object-cover rounded-md" />
                        </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2"/>
          <CarouselNext className="absolute right-2"/>
        </Carousel>
      </div>
    </>
  );
};

export default CatCarousel;
