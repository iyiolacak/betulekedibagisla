import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CatCarousel from "./_components/CatCarousel";
import CTA from "./_components/CTA";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 pt-6">
      {/* Landing Page */}
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between">
        <Suspense fallback={<Loading/>}>
          <Image
            src="/betulcatillustration.png"
            alt="Cat"
            width={200}
            height={200}
          />
          </Suspense>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-semibold text-center text-slate-900">
              betule <span className="text-[#f72585]">kedi</span> bagisla
            </h1>
            <div className="mt-4">
              <p className="text-md md:text-lg text-center text-muted-foreground">
                Donate cats to your loved ones. Make them feel special.
              </p>
            </div>
          </div>
          <Button className="mt-4 w-full h-14 md:w-60 md:h-14 rounded-full text-md md:text-sm" variant={"blue"}>
            Start Donating Kitties
            </Button>
        </div>
      </section>
      <div className="flex mt-12 w-full items-center justify-center">
      <Image 
      
      alt="Get connected with cats"
      src={"/connected.svg"}
      width={500}
      height={500}
      />
      </div>
      {/* See also who using this app */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center pt-24">
        <div className="flex flex-col">
        <h2 className="text-4xl md:text-7xl font-bold text-center md:text-start">
          Loved by <span className="text-tertiary">betul</span>, used by cats
        </h2>
        <p className="text-center text-md md:text-start sm:text-lg mt-2 lg:mt-4 text-muted-foreground">
          Start donating kitties today. Make your loved ones come earlier :) <br />You can share all of these kitties today or just bring yours.
        </p>
        <Button className="mt-4 w-full h-14 md:w-60 md:h-14 rounded-full text-md md:text-sm " variant={"blue"}>
            Donate Kitties
            </Button>
        </div>
        <CatCarousel />
      </section>
      <section className="w-full py-5 pb-6">
        <CTA />
      </section>
    </main>
  );
}
