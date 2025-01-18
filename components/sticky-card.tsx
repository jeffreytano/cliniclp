"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { OnlineBooking } from "./littlecards/online-booking";
import { TelContact } from "./littlecards/tel-contact";

export function StickyCard() {
  return (
    <Card className="fixed right-0 top-0 z-50 w-60 overflow-hidden">
      <OnlineBooking />
      <TelContact />
    </Card>
  );
}
