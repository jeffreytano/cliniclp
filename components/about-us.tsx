import Image from "next/image";
import image from "../public/img/31005354_m.jpg";

export function AboutUs() {
  return (
    <section className="py-24">
      <div className="bg-blueish-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={image}
              alt="Doctor Portrait"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:px-24 md:pe-32">
            <h2 className="text-7xl font-semibold mb-6">about us</h2>
            <div className="space-y-4 flex-grow">
              <p className="text-xl">
                テキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
              </p>
            </div>
            {/* <div className="text-right mt-8">
              <p className="font-medium">〇〇クリニック</p>
              <p className="text-xl font-bold">〇〇</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
