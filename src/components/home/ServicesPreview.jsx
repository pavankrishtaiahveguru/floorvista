"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Architectural Planning",
    shortTitle: "Architecture",
    description:
      "Thoughtful planning that balances functionality, aesthetics, and the way people experience a space.",
    image: "/images/services/architectural-planning.png",
    sectionId: "architectural-planning",
  },
  {
    number: "02",
    title: "Interior Design",
    shortTitle: "Interior",
    description:
      "Elegant interiors designed around comfort, character, functionality, and everyday living.",
    image: "/images/services/interior-design.png",
    sectionId: "interior-design",
  },
  {
    number: "03",
    title: "Elevation Design",
    shortTitle: "Elevation",
    description:
      "Distinctive building elevations that create a strong visual identity while respecting the architecture.",
    image: "/images/services/elevation-design.png",
    sectionId: "elevation-design",
  },
  {
    number: "04",
    title: "Structural Design",
    shortTitle: "Structural",
    description:
      "Reliable structural solutions engineered for safety, efficiency, durability, and long-term performance.",
    image: "/images/services/structural-design.png",
    sectionId: "structural-design",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
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

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#173B38]/[0.06]" />

      <div className="pointer-events-none absolute -right-28 top-32 h-[350px] w-[350px] rounded-full border border-[#173B38]/[0.06]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#173B38]/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#173B38]/25" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#173B38]/50">
              What We Do
            </p>

            <span className="h-px w-12 bg-[#173B38]/25" />
          </div>

          <h2 className="text-5xl font-light tracking-[-0.04em] text-[#173B38] sm:text-6xl lg:text-7xl">
            Our <span className="italic">Services</span>
          </h2>

          <p className="mt-4 text-sm tracking-[0.18em] text-[#173B38]/55 sm:text-base">
            Design · Function · Engineering
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {services.map((service) => {
            return (
              <motion.div key={service.number} variants={itemVariants}>
                <Link
                  href={`/services#${service.sectionId}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative mx-auto aspect-square w-full max-w-[300px]">
                    {/* Gold rings */}
                    <div className="absolute inset-0 rounded-full border border-[#C79A3B]/70 p-1">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 280px"
                        />

                        <div className="absolute inset-0 bg-[#173B38]/5 transition-colors duration-500 group-hover:bg-[#173B38]/15" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C79A3B]/70 bg-[#F8F7F3] text-xs font-medium text-[#173B38]">
                      {service.number}
                    </div>
                  </div>

                  {/* Service Card */}
                  <div className="relative z-10 -mt-5 flex min-h-[78px] items-center rounded-full border border-[#C79A3B]/60 bg-white px-3 py-3 shadow-[0_10px_30px_rgba(23,59,56,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(23,59,56,0.13)]">
                    {/* Service Image Thumbnail */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#173B38] ring-1 ring-[#C79A3B]/30">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="48px"
                      />

                      {/* Subtle green overlay */}
                      <div className="absolute inset-0 bg-[#173B38]/10 transition-colors duration-300 group-hover:bg-[#173B38]/0" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 px-3">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-[#173B38]/45">
                        {service.shortTitle}
                      </p>

                      <h3 className="mt-0.5 text-sm font-medium leading-5 text-[#173B38]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C79A3B]/50 text-[#173B38] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#173B38] group-hover:text-white">
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mx-auto mt-5 max-w-[280px] text-center text-sm leading-6 text-[#173B38]/55">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center sm:hidden"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-[#173B38] px-6 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:bg-[#214d49]"
          >
            View All Services
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#173B38]">
              <ArrowUpRight
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
