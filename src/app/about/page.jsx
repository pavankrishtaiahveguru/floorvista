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

const approach = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to your needs, lifestyle, and vision.",
  },
  {
    number: "02",
    title: "Conceptualize",
    description: "We turn ideas into meaningful design concepts.",
  },
  {
    number: "03",
    title: "Design",
    description: "We balance aesthetics, functionality, and innovation.",
  },
  {
    number: "04",
    title: "Detail",
    description: "We focus on materials, finishes, and every small element.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "We bring the vision to life with precision and quality.",
  },
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

      {/* The Visionary */}
      <section className="relative overflow-hidden bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Decorative circle */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#173B38]/[0.04]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#173B38]/30" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#173B38]/50">
                The Visionary
              </p>
            </div>

            <h2 className="text-4xl font-light leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              The mind behind <span className="italic">FloorVista.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20"
          >
            {/* Name */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#173B38]/40">
                Founder
              </p>

              <h3 className="mt-4 text-3xl font-light tracking-tight text-[#173B38] sm:text-4xl">
                Talla Vivek
              </h3>

              <div className="mt-6 h-px w-16 bg-[#C79A3B]" />
            </div>

            {/* Story */}
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#173B38]/70 sm:text-xl sm:leading-9">
                <strong className="font-medium text-[#173B38]">
                  Talla Vivek
                </strong>{" "}
                is driven by a deep passion for architecture, creativity, and
                visualization. He believes architecture is more than designing
                spaces—it is about creating experiences, expressing ideas, and
                bringing imagination to life.
              </p>

              <p className="mt-6 text-base leading-8 text-[#173B38]/60 sm:text-lg">
                With a strong appreciation for thoughtful design and visual
                storytelling, his vision is to transform concepts into spaces
                that feel purposeful, inspiring, and timeless. Through
                FloorVista, he strives to explore new possibilities and create
                designs that connect creativity with everyday living.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden bg-[#F8F7F3] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full border border-[#173B38]/[0.05]" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[450px] w-[450px] rounded-full border border-[#173B38]/[0.05]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-14 max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#173B38]/30" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#173B38]/50">
                Our Approach
              </p>
            </div>

            <h2 className="text-4xl font-light leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              From an idea to a space{" "}
              <span className="italic">with purpose.</span>
            </h2>
          </motion.div>

          {/* Approach Steps */}
          <div className="grid grid-cols-1 gap-0 border-t border-[#173B38]/10 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group border-b border-[#173B38]/10 px-1 py-8 sm:px-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-9 lg:first:border-l"
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#C79A3B]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#173B38]/25 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#173B38]"
                  />
                </div>

                <h3 className="mt-7 text-lg font-medium text-[#173B38]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#173B38]/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl bg-[#173B38] p-8 text-white sm:p-10 lg:p-12"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/45">
              Vision
            </p>

            <div className="mt-8 h-px w-12 bg-[#C79A3B]" />

            <blockquote className="mt-8 max-w-xl text-2xl font-light leading-relaxed sm:text-3xl lg:text-4xl">
              “To shape inspiring spaces that elevate the way people live, work,
              and connect.”
            </blockquote>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-[#173B38]/10 bg-[#F8F7F3] p-8 sm:p-10 lg:p-12"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#173B38]/45">
              Mission
            </p>

            <div className="mt-8 h-px w-12 bg-[#C79A3B]" />

            <blockquote className="mt-8 max-w-xl text-2xl font-light leading-relaxed text-[#173B38] sm:text-3xl lg:text-4xl">
              “To create thoughtful, timeless, and functional spaces through
              innovative design, quality craftsmanship, and a deep understanding
              of every client’s vision.”
            </blockquote>
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
