"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architectural Planning",
    shortTitle: "Architecture",
    description:
      "Thoughtful architectural planning that balances functionality, aesthetics, and the way people experience a space.",
    features: [
      "Residential Planning",
      "Commercial Planning",
      "Floor Plans",
      "Municipal Permission Plans",
      "Approval Assistance",
    ],
    image: "/images/services/architectural-planning.png",
  },
  {
    number: "02",
    title: "Structural Design",
    shortTitle: "Structure",
    description:
      "Intelligent structural solutions focused on safety, strength, efficiency, and long-term performance.",
    features: [
      "Structural Planning",
      "Structural Drawings",
      "Foundation Design",
      "RCC Design",
      "Structural Consultancy",
    ],
    image: "/images/services/structural-design.png",
  },
  {
    number: "03",
    title: "Interior Design",
    shortTitle: "Interiors",
    description:
      "Elegant interiors where materials, proportions, lighting, and details come together to create meaningful spaces.",
    features: [
      "Residential Interiors",
      "Commercial Interiors",
      "Space Planning",
      "Material Selection",
      "Interior Consultancy",
    ],
    image: "/images/services/interior-design.png",
  },
  {
    number: "04",
    title: "Elevation Design",
    shortTitle: "Elevation",
    description:
      "Distinctive elevations and facades that give every building a strong visual identity and timeless character.",
    features: [
      "Front Elevation Design",
      "3D Elevation",
      "Modern Facades",
      "Exterior Design",
      "Facade Consultancy",
    ],
    image: "/images/services/elevation-design.png",
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

const fadeUpSlow = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureAnimation = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#173B38]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#173B38] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
        {/* Decorative lines */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute right-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full border border-white/20" />
          <div className="absolute right-[-40px] top-[-40px] h-[380px] w-[380px] rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/45"
              >
                Our Services
              </motion.p>

              <motion.h1
                variants={fadeUpSlow}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[7rem]"
              >
                Ideas into
                <br />
                <span className="italic">spaces.</span>
              </motion.h1>
            </div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="max-w-sm lg:pb-2"
            >
              <p className="text-base leading-7 text-white/60">
                Architecture, structure, interiors and elevations — brought
                together through one thoughtful design approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#173B38]/40">
                What We Do
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-8"
            >
              <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Multidisciplinary design for{" "}
                <span className="italic">better spaces.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#173B38]/60">
                We offer multidisciplinary design and consultancy services for
                residential and commercial buildings, including municipal
                permission plans and approval assistance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-[#173B38]/15">
            {services.map((service, index) => {
              const imageAnimation = index % 2 === 0 ? fadeLeft : fadeRight;

              const contentAnimation = index % 2 === 0 ? fadeRight : fadeLeft;

              return (
                <article
                  id={service.title.toLowerCase().replace(/\s+/g, "-")}
                  key={service.number}
                  className="scroll-mt-32 group border-b border-[#173B38]/15 py-14 sm:py-20 lg:py-24"
                >
                  <div
                    className={`grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16 ${
                      index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* IMAGE */}

                    <motion.div
                      variants={imageAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      className="lg:col-span-6"
                    >
                      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-[#E5E8E4]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-[#173B38]/10 transition-opacity duration-500 group-hover:bg-[#173B38]/0" />

                        {/* Image number */}
                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm text-[#173B38] shadow-sm">
                          {service.number}
                        </div>
                      </div>
                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                      variants={contentAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      className="lg:col-span-6"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#173B38]/40">
                          Service {service.number}
                        </span>

                        <div className="h-px w-12 bg-[#173B38]/15" />

                        <span className="text-xs text-[#173B38]/40">
                          {service.shortTitle}
                        </span>
                      </div>

                      <h3 className="mt-7 max-w-xl text-4xl font-light tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        {service.title}
                      </h3>

                      <p className="mt-7 max-w-lg text-base leading-7 text-[#173B38]/60">
                        {service.description}
                      </p>

                      {/* Features */}

                      <div className="mt-9 border-t border-[#173B38]/10 pt-7">
                        <motion.div
                          variants={stagger}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{
                            once: true,
                            amount: 0.3,
                          }}
                          className="grid gap-x-8 gap-y-3 sm:grid-cols-2"
                        >
                          {service.features.map((feature) => (
                            <motion.div
                              key={feature}
                              variants={featureAnimation}
                              className="flex items-center gap-2.5 text-sm text-[#173B38]/70"
                            >
                              <Check size={14} strokeWidth={1.5} />

                              {feature}
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Learn more */}

                      <Link
                        href="/contact"
                        className="group/link mt-9 inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-[#173B38]"
                      >
                        Discuss your project
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#173B38]/20 transition-all duration-300 group-hover/link:bg-[#173B38] group-hover/link:text-white">
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover/link:rotate-45"
                          />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden bg-[#E7ECE8] px-7 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
          >
            {/* Decorative circle */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#173B38]/10" />

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative z-10 max-w-3xl"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#173B38]/40">
                Start Something New
              </p>

              <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Have a project
                <br />
                <span className="italic">in mind?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#173B38]/60">
                Tell us about your project and let&apos;s explore what we can
                create together.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex cursor-pointer items-center gap-4 rounded-full bg-[#173B38] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#173B38]/90"
              >
                Start a Conversation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#173B38] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
