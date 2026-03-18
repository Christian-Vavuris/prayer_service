"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/api-docs", label: "API" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="border-b"
      style={{ borderColor: "rgba(201, 184, 154, 0.12)" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <span
          className="text-sm tracking-widest uppercase"
          style={{ color: "rgba(201, 184, 154, 0.45)", letterSpacing: "0.18em" }}
        >
          Prayer Service
        </span>
        <nav className="flex gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? "nav-link-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
