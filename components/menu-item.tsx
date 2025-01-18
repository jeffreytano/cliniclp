"use client";

import { DetailButton } from "./ui/detail-button";
import { UrlObject } from "url";
import Image from "next/image";

type menuProps = {
  title: string;
  description: string;
  image: any;
  href: string | UrlObject;
};

function onClick() {
  console.log(`clicked`);
}

export function MenuItem({ title, description, image, href }: menuProps) {
  return (
    <div className="grid md:grid-cols-2 items-center justify-items-center">
      <div className="space-y-8 w-96">
        <h3 className="text-2xl font-bold river-green ml-4 text-3xl">
          {title}
        </h3>
        <p>{description}</p>
        <DetailButton onClick={onClick}>詳細はこちら</DetailButton>
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
