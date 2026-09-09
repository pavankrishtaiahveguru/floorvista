"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
  "Architectural Planning",
  "Structural Design",
  "Interior Design",
  "Elevation Design",
];

const values = [
  "Thoughtful and functional design",
  "Attention to detail",
  "Integrated architectural and engineering solutions",
  "Spaces designed to stand the test of time",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#173B38]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173B38] px-6 pb-16 pt-35 sm:px-8 lg:px-12 lg:pb-20 lg:pt-45">
        {/* Decorative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl"
          >
            Designing spaces
            <br />
            <span className="italic">with purpose.</span>
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
            className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg"
          >
            Architecture, interiors, and engineering brought together to create
            spaces that are meaningful, functional, and built to last.
          </motion.p>
        </div>
      </section>

      {/* About Introduction */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-2xl bg-[#E8ECE9]"
          >
            <Image
              src="/images/about/about-image.png"
              alt="FloorVista architectural design"
              width={1152}
              height={1440}
              className="h-auto w-full object-contain"
            />

            <div className="absolute inset-0 bg-[#173B38]/10" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs tracking-wide text-[#173B38] backdrop-blur-sm">
              Design · Function · Engineering
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#173B38]/45"
            >
              Who We Are
            </motion.p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Transforming ideas into{" "}
              <span className="italic">inspiring spaces.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#173B38]/65">
              <p>
                <strong className="font-medium text-[#173B38]">
                  FloorVista Design Consultants
                </strong>{" "}
                transforms ideas into inspiring spaces where{" "}
                <strong className="font-medium text-[#173B38]">
                  design, functionality, and engineering
                </strong>{" "}
                come together.
              </p>

              <p>
                From striking architecture and elevations to intelligent
                structures and elegant interiors, we craft every detail with
                purpose—creating spaces that feel unique, work beautifully, and
                stand the test of time.
              </p>
            </div>

            <p className="mt-8 text-lg font-medium italic text-[#173B38]">
              Your Vision. Our Design. A Better Space.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#173B38] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#214d49]"
            >
              Start a Conversation
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#173B38] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#173B38] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
            Let&apos;s Create Together
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a vision?
            <br />
            <span className="italic">Let&apos;s bring it to life.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">
            Tell us about your project and let&apos;s create a space designed
            around your vision.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#173B38] transition-all duration-300 hover:bg-white/90"
          >
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#173B38] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
