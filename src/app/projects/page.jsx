"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceProjects = [
  {
    number: "01",
    title: "Architectural Planning",
    description:
      "Thoughtful architectural planning that balances functionality, aesthetics, and the way people experience a space.",
    folder: "/images/projects/architectural-planning",
    images: ["1.png", "2.png", "3.png", "4.png"],
  },
  {
    number: "02",
    title: "Elevation Design",
    description:
      "Distinctive building elevations that create a strong visual identity while respecting the architecture and surroundings.",
    folder: "/images/projects/elevation-design",
    images: [
      "1.jpg",
      "2.jpg",
      "12.png",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
    ],
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Elegant interiors designed around comfort, character, functionality, and everyday living.",
    folder: "/images/projects/interior-design",
    images: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#173B38]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#173B38] px-6 pb-14 pt-32 text-white sm:px-8 lg:px-12 lg:pb-20 lg:pt-44">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-7xl"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/55">
              Our Projects
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Spaces that
            <br />
            <span className="italic text-white/95">speak for themselves.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            A collection of spaces shaped by thoughtful planning, design,
            engineering, and attention to detail.
          </p>

          {/* Small category navigation */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
            {serviceProjects.map((service) => (
              <a
                key={service.number}
                href={`#${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-${service.number}`}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          SERVICE PROJECT SECTIONS
      ========================================================= */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {serviceProjects.map((service, serviceIndex) => {
          const featuredImage = service.images[0];
          const galleryImages = service.images.slice(1);

          return (
            <section
              key={`${service.title}-${service.number}`}
              id={`${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")}-${service.number}`}
              className="scroll-mt-32 border-t border-[#173B38]/10 py-16 sm:py-20 lg:py-24"
            >
              {/* Service Header */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium text-[#173B38]/45">
                      {service.number}
                    </span>

                    <span className="h-px w-7 bg-[#173B38]/25" />

                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#173B38]/45">
                      Selected Work
                    </p>
                  </div>

                  <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                    {service.title}
                  </h2>
                </div>

                <div className="flex items-end">
                  <p className="max-w-xl text-sm leading-7 text-[#173B38]/60">
                    {service.description}
                  </p>
                </div>
              </motion.div>

              {/* =====================================================
                  FEATURED PROJECT
              ===================================================== */}
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="grid gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:items-center"
              >
                {/* BIG IMAGE */}
                <Link
                  href="/contact"
                  className="group relative block overflow-hidden rounded-xl bg-[#EEF0ED]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`${service.folder}/${featuredImage}`}
                      alt={`${service.title} project`}
                      fill
                      loading={serviceIndex === 0 ? "eager" : "lazy"}
                      priority={serviceIndex === 0}
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-[#173B38]/0 transition-colors duration-500 group-hover:bg-[#173B38]/10" />

                    {/* Arrow */}
                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173B38] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>

                {/* FEATURED PROJECT INFO */}
                <div className="lg:px-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#173B38]/40">
                    Featured Project
                  </p>

                  <h3 className="mt-4 text-2xl font-light sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#173B38]/55">
                    A glimpse into our approach to {service.title.toLowerCase()}
                    , combining thoughtful design with practical functionality.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-7 inline-flex items-center gap-2 border-b border-[#173B38]/25 pb-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#173B38]/65 transition-colors duration-300 hover:text-[#173B38]"
                  >
                    Discuss a Project
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.div>

              {/* =====================================================
                  PROJECT GALLERY
              ===================================================== */}
              {galleryImages.length > 0 && (
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={image}
                      variants={imageReveal}
                      className="group"
                    >
                      <Link
                        href="/contact"
                        className="block overflow-hidden rounded-lg bg-[#EEF0ED]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={`${service.folder}/${image}`}
                            alt={`${service.title} project ${index + 2}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          <div className="absolute inset-0 bg-[#173B38]/0 transition-colors duration-500 group-hover:bg-[#173B38]/10" />

                          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#173B38] opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <ArrowUpRight size={14} strokeWidth={1.6} />
                          </span>
                        </div>
                      </Link>

                      <div className="mt-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[12px] font-medium text-[#173B38]">
                            {service.title}
                          </h3>

                          <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#173B38]/40">
                            Project {String(index + 2).padStart(2, "0")}
                          </p>
                        </div>

                        <span className="text-[9px] text-[#173B38]/30">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </section>
          );
        })}
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#173B38] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45">
              Have a project in mind?
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight text-white sm:text-5xl">
              Let&apos;s create something
              <br />
              <span className="italic">meaningful.</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-medium text-[#173B38]"
          >
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#173B38] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
