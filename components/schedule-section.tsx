import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import dummyimage from "../img/960x640.jpg";
import { Schedule } from "./schedule";

const services = [
  {
    items: ["テキスト入る", "テキスト入る", "テキスト入る", "テキスト入る"],
  },
  {
    items: ["テキスト入る", "テキスト入る", "テキスト入る", "テキスト入る"],
  },
];

const schedule = {
  days: ["月", "火", "水", "木", "金", "土", "日・祝"],
  times: [
    {
      time: "9:00-12:00",
      availability: ["●", "●", "●", "●", "●", "●", "/"],
    },
    {
      time: "15:00-19:00",
      availability: ["●", "●", "手術", "●", "●", "/", "/"],
    },
  ],
};

export function ScheduleSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">〇〇クリニック</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8 w-3/4">
            <div>
              <h2 className="text-2xl mb-6">診療科目のご案内</h2>
              <div className="space-y-2">
                {services.map((list, index) => (
                  <div key={index} className="space-y-1">
                    {list.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-block bg-teal-600 text-white rounded-full px-3 py-1 text-sm mr-2 mb-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <p>
                テキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">診療時間のご案内</h2>
            <Schedule />
          </div>
        </div>
      </div>
    </section>
  );
}
