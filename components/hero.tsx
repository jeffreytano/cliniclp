"use client";

import Image from "next/image";
import { Schedule } from "./schedule";
import { Separator } from "./ui/separator";

export function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/img/25952460_m.jpg"
        alt="Medical Equipment"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 ">
          <div className="max-w-3xl">
            <div className="text-3xl md:text-4xl hero-text">
              キャッチコピー入る
            </div>
            <div className="my-12"></div>
            <Separator className="my-4 bg-white w-10"></Separator>
            <div className="text-2xl md:text-2xl hero-text">テキスト入る</div>
            <div className="my-12"></div>
            <div className="text-4xl md:text-6xl hero-text">
              キャッチコピー入る
            </div>
            <div className="text-4xl md:text-6xl hero-text">
              キャッチコピー入る
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[576px]">
        <Schedule />
      </div>
    </section>
  );
}
