import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 pt-6">
      {/* Landing Page */}
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between">
          <Image
            src="/betulcatillustration.png"
            alt="Cat"
            width={200}
            height={200}
          />
          <div className="flex flex-col">
            <h1 className="text-6xl font-semibold text-center text-slate-900">
              betule <span className="text-[#f72585]">kedi</span> bagisla
            </h1>
            <p className="text-lg text-center mt-4 text-muted-foreground">
              Donate cats to your loved ones. Make them feel special.
            </p>
          </div>
          <Button className="mt-4">Donate Cats</Button>
        </div>
      </section>
      {/* See also who using this app */}
      <section className="flex flex-col items-center justify-center pt-24">
        <h2 className="text-4xl font-bold text-center">
          Loved by betul, used by cats
        </h2>
        <div className="flex items-center justify-center mt-4">
          <Image
            src="/images/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={100}
          />
        </div>
      </section>
    </main>
  );
}