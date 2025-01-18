import Image from "next/image";
import Link from "next/link";
import type { UrlObject } from "url";

export function OnlineBooking(href: string | UrlObject) {
  return (
    <Link
      href={href}
      className="block p-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors min-w-60"
    >
      <div className="flex items-center space-x-4">
        <i className="bi bi-laptop icon bg-white"></i>
        <div>
          <h3 className="text-sm text-center">【初診専用】</h3>
          <h3 className="text-base text-center">オンライン予約受付</h3>
        </div>
      </div>
    </Link>
  );
}
