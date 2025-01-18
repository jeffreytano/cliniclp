import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "./button";

interface DetailButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function DetailButton({
  className,
  children,
  ...props
}: DetailButtonProps) {
  return (
    <Button
      className={cn(
        "group h-16 min-w-[240px] bg-white border-2 border-black hover:bg-black/5 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-6">
        <span className="text-base font-medium">{children}</span>
        <div className="flex items-center">
          <div className="w-px h-4 bg-black/20 mx-4" />
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </Button>
  );
}
