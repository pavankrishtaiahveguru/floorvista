"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-999 px-5 py-3 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-1">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex cursor-pointer items-center px-3"
          aria-label="Floorvista Design Consultants - Home"
        >
          <Image
            src="/logo/floorvista-logo.png"
            alt="Floorvista Design Consultants"
            width={180}
            height={80}
            priority
            className="h-auto w-[145px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden items-center rounded-full p-1.5 backdrop-blur-xl transition-all duration-500 md:flex ${
            scrolled
              ? "border border-[#173B38]/10 bg-white/85 shadow-[0_8px_30px_rgba(23,59,56,0.08)]"
              : "border border-white/25 bg-white/10 shadow-sm"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-light transition-all duration-300 ${
                scrolled
                  ? isActive(item.href)
                    ? "bg-[#173B38] text-white shadow-sm"
                    : "text-[#173B38]/70 hover:bg-[#173B38]/5 hover:text-[#173B38]"
                  : isActive(item.href)
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 md:flex ${
            scrolled
              ? "bg-[#173B38] text-white hover:bg-[#173B38]/90"
              : "bg-white text-[#173B38] hover:bg-white/90"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-500 md:hidden ${
            scrolled
              ? "border border-[#173B38]/10 bg-white/85 text-[#173B38] shadow-sm backdrop-blur-xl"
              : "border border-white/20 bg-white/10 text-white backdrop-blur-md"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border p-3 shadow-2xl backdrop-blur-xl md:hidden ${
            scrolled
              ? "border-[#173B38]/10 bg-white/95"
              : "border-white/20 bg-[#173B38]/95"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`cursor-pointer rounded-2xl px-5 py-3.5 text-sm transition-all duration-300 ${
                  scrolled
                    ? isActive(item.href)
                      ? "bg-[#173B38] text-white"
                      : "text-[#173B38]/70 hover:bg-[#173B38]/5 hover:text-[#173B38]"
                    : isActive(item.href)
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#173B38] text-white hover:bg-[#173B38]/90"
                  : "bg-white text-[#173B38] hover:bg-white/90"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
