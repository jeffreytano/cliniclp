import { Card } from "@/components/ui/card";

export function BottomPortals() {
  const leftPortal = {
    title: "タイトル入る",
    items: [
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
      {
        text: "テキスト入る",
        link: "#",
      },
    ],
  };

  const rightPortal = {
    columns: [
      [
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
      ],
      [
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
      ],
      [
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
        {
          text: "テキスト入る",
          link: "#",
        },
      ],
    ],
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex bg-white rounded-br-[40px] rounded-tr-[40px] px-8 py-16 w-[90%] h-[400px] overflow-hidden">
      <Card className="w-2/5 bg-gray-200 p-8 rounded-[40px] border-0">
        <h3 className="text-xl font-bold mb-6 text-center">
          {leftPortal.title}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {leftPortal.items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-sm river-green text-center"
            >
              {item.text}
            </a>
          ))}
        </div>
      </Card>
      <Card className="w-3/5 p-8 border-0 ">
        <div className="grid grid-cols-3 gap-8">
          {rightPortal.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((item, index) => (
                <div key={index} className="text-sm text-center">
                  <a href={item.link}>{item.text}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
