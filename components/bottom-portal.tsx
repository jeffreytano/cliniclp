import { Card } from "@/components/ui/card";

export function BottomPortals() {
  const leftPortal = {
    title: "タイトル入る",
    links: [
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
      "テキスト入る",
    ],
  };

  const rightPortal = {
    columns: [
      ["テキスト入る", "テキスト入る", "テキスト入る", "テキスト入る"],
      ["テキスト入る", "テキスト入る", "テキスト入る", "テキスト入る"],
      ["テキスト入る", "テキスト入る", "テキスト入る", "テキスト入る"],
    ],
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex bg-white rounded-br-[40px] rounded-tr-[40px] px-8 py-16 w-[90%] h-[400px] overflow-hidden">
      <Card className="w-2/5 bg-gray-200 p-8 rounded-[40px] border-0">
        <h3 className="text-xl font-bold mb-6 text-center">
          {leftPortal.title}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {leftPortal.links.map((link, index) => (
            <a key={index} href="#" className="text-sm river-green text-center">
              {link}
            </a>
          ))}
        </div>
      </Card>
      <Card className="w-3/5 bg-white p-8 border-0 ">
        <div className="grid grid-cols-3 gap-8">
          {rightPortal.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((text, textIndex) => (
                <p key={textIndex} className="text-sm text-center">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
