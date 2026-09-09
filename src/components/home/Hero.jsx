"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.png"
          alt="Modern architectural building"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/75"
            >
              Floorvista Design Consultants
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-8xl text-5xl font-light leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[6rem]"
            >
              Architecture Planning
              <br />
              Interior Design
              <br />
              Elevation design
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
            >
              Thoughtful architecture and design solutions that transform ideas
              into remarkable spaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* Explore Projects */}
              <Link
                href="/projects"
                className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#173B38] transition-all duration-300 hover:bg-white/90"
              >
                Explore Projects
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#173B38] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} strokeWidth={1.8} />
                </span>
              </Link>

              {/* Start Project */}
              <Link
                href="/contact"
                className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#173B38]"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-16 flex items-center gap-3 text-white/60"
            >
              <motion.span
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30"
              >
                <MoveDown size={15} strokeWidth={1.5} />
              </motion.span>

              <span className="text-xs uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
