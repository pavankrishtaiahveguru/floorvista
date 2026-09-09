"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5 text-xs uppercase tracking-[0.2em] text-[#173B38]/50"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-[#173B38] sm:text-5xl lg:text-6xl"
          >
            Transforming ideas into{" "}
            <span className="italic">inspiring spaces.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mt-7 max-w-xl text-base leading-8 text-[#173B38]/65"
          >
            FloorVista Design Consultants transforms ideas into inspiring spaces
            where{" "}
            <strong className="font-medium text-[#173B38]">
              design, functionality, and engineering
            </strong>{" "}
            come together. From striking architecture and elevations to
            intelligent structures and elegant interiors, we craft every detail
            with purpose—creating spaces that feel unique, work beautifully, and
            stand the test of time.
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="mt-8"
          >
            <p className="text-lg font-medium italic text-[#173B38]">
              Your Vision. Our Design. A Better Space.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="mt-9"
          >
            <Link
              href="/about"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#173B38] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#22534e]"
            >
              About FloorVista
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[2rem]"
        >
          <Image
            src="/images/home/about.png"
            alt="FloorVista architectural design"
            width={1000}
            height={750}
            className="h-[450px] w-full object-cover sm:h-[550px]"
          />

          {/* Image Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="absolute bottom-5 left-5 rounded-full bg-white/90 px-5 py-2.5 text-xs tracking-wide text-[#173B38] backdrop-blur-md"
          >
            Design · Function · Engineering
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
