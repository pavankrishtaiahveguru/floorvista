import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F7F3] px-6 py-20 text-[#173B38]">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#173B38]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#173B38]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full border border-[#173B38]/10" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Small Label */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#173B38]/45">
          FloorVista Design Consultants
        </p>

        {/* 404 */}
        <div className="overflow-hidden">
          <h1 className="text-[9rem] font-light leading-none tracking-[-0.08em] sm:text-[13rem] lg:text-[18rem]">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            This space doesn&apos;t exist.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#173B38]/60 sm:text-lg">
            The page you&apos;re looking for may have been moved, removed, or
            never existed. Let&apos;s get you back to a familiar space.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#173B38] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#214d49]"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#173B38]/20 px-6 py-3.5 text-sm font-medium text-[#173B38] transition-all duration-300 hover:border-[#173B38]/40 hover:bg-[#173B38]/5"
            >
              Start a Project
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#173B38]/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Statement */}
        <p className="mt-20 text-xs uppercase tracking-[0.25em] text-[#173B38]/35">
          Design · Function · Engineering
        </p>
      </div>
    </main>
  );
}
