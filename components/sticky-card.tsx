"use client";

import { Card } from "@/components/ui/card";
import { LinkedCard } from "./ui/linked-card";
import { PlainCard } from "./ui/plain-card";
import { OnlineBooking } from "./online-booking";
import { TelContact } from "./tel-contact";

export function StickyCard() {
  return (
    <Card className="fixed right-0 top-0 z-50 w-60 overflow-hidden">
      <OnlineBooking />
      <TelContact />
    </Card>
  );
}
