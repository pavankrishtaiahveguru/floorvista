"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Architectural Planning",
    category: "ARCHITECTURAL PLANNING",
    image: "/images/projects/architectural-planning/3.png",
    folder: "architectural-planning",
    sectionId: "architectural-planning-01",
  },
  {
    number: "02",
    title: "Elevation Design",
    category: "ELEVATION DESIGN",
    image: "/images/projects/elevation-design/12.jpg",
    folder: "elevation-design",
    sectionId: "elevation-design-02",
  },
  {
    number: "03",
    title: "Interior Design",
    category: "INTERIOR DESIGN",
    image: "/images/projects/interior-design/3.png",
    folder: "interior-design",
    sectionId: "interior-design-03",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

export default function SelectedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#173B38]/[0.04]" />

      <div className="pointer-events-none absolute -right-24 top-36 h-[360px] w-[360px] rounded-full border border-[#173B38]/[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#173B38]/30" />

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#173B38]/50">
                Selected Projects
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.035em] text-[#173B38] sm:text-5xl lg:text-6xl">
              Our Work <span className="italic">Speaks.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#173B38]/55 sm:text-base">
              A glimpse of the spaces we&apos;ve designed and delivered.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/projects"
            className="group hidden items-center gap-3 border-b border-[#173B38]/25 pb-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#173B38] transition-colors duration-300 hover:border-[#173B38] hover:text-[#173B38] sm:flex"
          >
            View All Projects
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.folder}
              variants={fadeUp}
              className="group"
            >
              {/* Project Image */}
              <a
                href={`/projects#${project.sectionId}`}
                className="block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#E8ECE9]">
                  {/* Number */}
                  <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[9px] font-medium tracking-wide text-[#173B38] backdrop-blur-sm">
                    {project.number}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[1.28/1] overflow-hidden sm:aspect-[1.15/1] lg:aspect-[1.15/1]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.333vw"
                    />

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-[#173B38]/0 transition-all duration-500 group-hover:bg-[#173B38]/10" />

                    {/* Hover Arrow */}
                    <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#173B38] opacity-0 shadow-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </span>
                  </div>
                </div>
              </a>

              {/* Project Details */}
              <div className="mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[15px] font-medium leading-5 text-[#173B38]">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#173B38]/40">
                      {project.category}
                    </p>
                  </div>

                  <span className="pt-0.5 text-[9px] tracking-widest text-[#173B38]/25">
                    {project.number}
                  </span>
                </div>

                {/* Bottom line */}
                <div className="mt-4 h-px w-full overflow-hidden bg-[#173B38]/10">
                  <div className="h-full w-0 bg-[#173B38]/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.article>
          ))}
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
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-[#173B38] px-6 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:bg-[#214d49]"
          >
            View All Projects
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
