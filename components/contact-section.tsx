import Image from "next/image";
import { OnlineBooking } from "./littlecards/online-booking";
import { TelContact } from "./littlecards/tel-contact";
import { BottomPortals } from "./bottom-portal";

export function ContactSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative">
        <Image
          src="/img/29915326_m.jpg"
          alt="Contact"
          width={1920}
          height={1080}
          className="object-cover w-full h-screen"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 text-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">初診ご予約・</h2>
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="max-w-2xl mx-auto text-center">
            テキスト入るテキスト入る
            <br />
            テキスト入るテキスト入るテキスト入る
          </p>
        </div>

        <div className="flex gap-8 mb-12">
          <OnlineBooking />
          <TelContact />
        </div>
      </div>
      <BottomPortals />
    </section>
  );
}
