"use client";

import { DetailButton } from "./detail-button";
import { Button } from "./ui/button";
import Image from "next/image";

type menuProps = {
  title: string;
  description: string;
  image: any;
};

export function MenuItem({ title, description, image }: menuProps) {
  return (
    <div className="grid md:grid-cols-2 items-center justify-items-center">
      <div className="space-y-8 w-96">
        <h3 className="text-2xl font-bold title ml-4 text-3xl">{title}</h3>
        <p>{description}</p>
        <DetailButton>詳細はこちら</DetailButton>
      </div>
      <Image
        src={image}
        alt={title}
        width={640}
        height={480}
        className="rounded-lg"
      />
    </div>
  );
}
