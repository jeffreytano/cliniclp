"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src=""
        alt="Medical Equipment"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-teal-600/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Eye Care Technology
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Providing the highest quality medical care with state-of-the-art
              technology
            </p>
          </div>
        </div>
      </div>
      <Card className="absolute bottom-24 right-8 w-[576px] bg-white/95 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Weekly Schedule</h3>
          <div className="grid grid-cols-8 gap-2 text-sm">
            <div className="font-medium">Time</div>
            <div className="font-medium">Mon</div>
            <div className="font-medium">Tue</div>
            <div className="font-medium">Wed</div>
            <div className="font-medium">Thu</div>
            <div className="font-medium">Fri</div>
            <div className="font-medium">Sat</div>
            <div className="font-medium">Sun</div>
            {/* Morning Schedule */}
            <div>9:00-12:00</div>
            {[...Array(7)].map((_, i) => (
              <div key={`morning-${i}`} className="text-center">
                {i < 6 ? "●" : "×"}
              </div>
            ))}
            {/* Afternoon Schedule */}
            <div>15:00-19:00</div>
            {[...Array(7)].map((_, i) => (
              <div key={`afternoon-${i}`} className="text-center">
                {i < 5 ? "●" : "×"}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
