"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#173B38] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#173B38]/75" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/60"
        >
          Let&apos;s Create Together
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Have a vision?
          <br />
          <span className="italic">Let&apos;s bring it to life.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
        >
          From thoughtful planning to exceptional design, we create spaces that
          are built around your ideas, needs, and aspirations.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="mt-9"
        >
          <Link
            href="/contact"
            className="group inline-flex cursor-pointer items-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#173B38] transition-all duration-300 hover:bg-white/90"
          >
            Start a Project
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173B38] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </Link>
        </motion.div>

        {/* Supporting Line */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45"
        >
          <span className="h-px w-8 bg-white/30" />
          Your Vision · Our Design
          <span className="h-px w-8 bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
