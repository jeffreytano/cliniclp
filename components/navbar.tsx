"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#page1", text: "ペイジー1" },
  { href: "#page2", text: "ペイジー2" },
  { href: "#page3", text: "ペイジー3" },
  { href: "#page4", text: "ペイジー4" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="pl-8 pr-80">
        <div className="flex h-full items-center">
          <Link href="/" className="text-2xl font-bold river-green">
            〇〇クリニック
          </Link>

          {/* right side of the nav bar */}
          <div className="hidden h-16 md:flex space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-all duration-300 hover:text-teal-600",
                  scrolled ? "text-gray-900" : "text-white"
                )}
              >
                <span
                  className={cn(
                    "transition-all duration-300 pt-6",
                    scrolled ? "block" : "hidden"
                  )}
                >
                  {item.text}
                </span>
                <span
                  className={cn(
                    "transition-all duration-300 h-28 pt-4",
                    scrolled ? "hidden" : "block writing-vertical"
                  )}
                  style={{ writingMode: "vertical-rl" }}
                >
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
