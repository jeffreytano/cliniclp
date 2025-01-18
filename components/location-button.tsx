"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function LocationButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLocation = () => {
    const element = document.getElementById("location");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToLocation}
      className={cn(
        "fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-black text-white py-8 px-4 transition-all duration-300",
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <span
        className="writing-vertical text-sm"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        診療時間・アクセス
      </span>
    </button>
  );
}
