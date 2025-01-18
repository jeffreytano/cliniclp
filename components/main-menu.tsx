"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuItem } from "./menu-item";
import { Separator } from "./ui/separator";

export function MainMenu() {
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
      href: "#",
    },
    {
      title: "タイトル入る",
      description:
        "テキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る",
      image: "/img/31337359_m.jpg",
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pb-24 bg-blueish-white"
    >
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/img/30811655_m.jpg"
          alt="Medical header"
          // fill
          width="1920"
          height="1080"
          className="object-cover"
          style={{
            objectFit: "cover",
            marginTop: "-800px",
          }}
        />
      </div>
      <div className="w-[80%] px-40 mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
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
                    href={item.href}
                    description={item.description}
                  ></MenuItem>
                  {index != items.length - 1 ? (
                    <Separator className="my-4 bg-black" />
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
