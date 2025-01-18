"use client";
import { DetailButton } from "./detail-button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="location" className="py-24 bg-white border-black border-2">
      <div className="grid md:grid-cols-2 justify-items-center bg-gray-200">
        <div className="flex gap-12 pl-20">
          <div
            className={cn(
              "writing-vertical font-bold text-5xl py-12 px-6 -ml-20 -mt-20 relative"
            )}
            style={{ writingMode: "vertical-rl" }}
          >
            アクセス
          </div>
          <div className="space-y-8 w-64 self-center">
            <p>
              テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキストA＆テキスト
            </p>
            <div className="space-y-2">
              <p className="text-3xl">Tel.000-0000-0000</p>
              <DetailButton>大きな地図を見る</DetailButton>
            </div>
          </div>
        </div>
        <Card className="h-[640px] w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1051599647!2d136.7550943!3d35.423456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzI0LjQiTiAxMzbCsDQ1JzE4LjMiRQ!5e0!3m2!1sen!2sjp!4v1637304562576!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Card>
      </div>
    </section>
  );
}
