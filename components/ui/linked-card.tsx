import Link from "next/link";
import type { UrlObject } from "url";

interface CardProps {
  children: React.ReactNode;
  href: string | string | UrlObject;
}

export function LinkedCard({ href, children }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors min-w-60"
    >
      {children}
    </Link>
  );
}
