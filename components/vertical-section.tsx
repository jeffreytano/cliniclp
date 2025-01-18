"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MenuItem } from "./menu-item";
import { Separator } from "./ui/separator";

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

  const items = [
    {
      title: "タイトル入る",
      description:
        "テキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る",
      image: "/img/30813603_m.jpg",
    },
    {
      title: "タイトル入る",
      description:
        "テキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る",
      image: "/img/31337359_m.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-gray-100"
    >
      {/* <div className="container mx-auto px-4"> */}
      <div className="relative w-full h-[600px]">
        <Image src="" alt="Medical header" fill className="object-cover" />
      </div>
      <div className="w-[80%] px-40 mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-1">
            <div
              className={cn(
                "writing-vertical text-5xl font-bold transition-all duration-300 py-16 px-8 shadow-lg -ml-20 -mt-20 bg-white relative",
                isSticky ? "sticky top-24" : ""
              )}
              style={{ writingMode: "vertical-rl" }}
            >
              診察メニュー
            </div>
          </div>
          <div className="col-span-11 my-20">
            <div className="space-y-24">
              {items.map((item, index) => (
                <>
                  <MenuItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  ></MenuItem>
                  {index != items.length - 1 ? (
                    <Separator className="my-4 bg-black" />
                  ) : null}
                </>
              ))}
              {/* <div className="grid md:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 text-teal-600">Icon</div>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Service {i + 1}</h4>
                    <p className="text-gray-600">
                      Detailed description of the medical service and its
                      benefits.
                    </p>
                  </Link>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
