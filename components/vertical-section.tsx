"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export function VerticalSection() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-gray-50"
    >
      <div
        ref={titleRef}
        className={cn(
          "writing-vertical-rl text-3xl font-bold absolute right-8 transition-all duration-300",
          isSticky ? "top-24" : "top-8"
        )}
      >
        専門医療の取り組み
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-4">Advanced Medical Care</h3>
            <p className="text-gray-600 mb-6">
              Our clinic provides comprehensive eye care services using the
              latest medical technology. We focus on preventive care and early
              detection of eye conditions.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Medical Care"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-6">
              <div className="mb-4">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-teal-100 rounded-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Service {i + 1}</h4>
              <p className="text-gray-600">
                Detailed description of the medical service provided.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
