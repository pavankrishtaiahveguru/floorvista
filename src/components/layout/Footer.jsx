"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Architectural Planning",
  "Structural Design",
  "Interior Design",
  "Elevation Design",
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

const fadeUpDelayed = (delay) => ({
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const linkAnimation = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#173B38] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-image.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#173B38]/70" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr_1.1fr] lg:gap-12">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <Link href="/" className="inline-block cursor-pointer">
              <Image
                src="/logo/floorvista-logo.png"
                alt="Floorvista Design Consultants"
                width={260}
                height={150}
                className="h-auto w-[220px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
              Creating thoughtful spaces through innovative architecture,
              interior design, and structural solutions.
            </p>

            <p className="mt-5 text-sm italic text-white/90">
              Designing Dreams!
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUpDelayed(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center sm:text-left"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60">
              Explore
            </p>

            <motion.nav
              variants={staggerContainer}
              className="flex flex-col items-center gap-4 sm:items-start"
            >
              {footerLinks.map((link) => (
                <motion.div key={link.href} variants={linkAnimation}>
                  <Link
                    href={link.href}
                    className="group flex cursor-pointer items-center justify-center gap-1 text-sm text-white/80 transition-colors duration-300 hover:text-white sm:justify-start"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUpDelayed(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center sm:text-left"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60">
              Services
            </p>

            <motion.nav
              variants={staggerContainer}
              className="flex flex-col items-center gap-4 sm:items-start"
            >
              {services.map((service) => (
                <motion.div key={service} variants={linkAnimation}>
                  <Link
                    href="/services"
                    className="group flex cursor-pointer items-center justify-center gap-1 text-sm text-white/80 transition-colors duration-300 hover:text-white sm:justify-start"
                  >
                    {service}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUpDelayed(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center sm:text-left"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60">
              Get in Touch
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="space-y-5"
            >
              {/* Phone */}
              <motion.a
                variants={linkAnimation}
                href="tel:+918341208733"
                className="group flex cursor-pointer items-start justify-center gap-3 text-sm text-white/80 transition-colors duration-300 hover:text-white sm:justify-start"
              >
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span>+91 83412 08733</span>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={linkAnimation}
                href="mailto:floorvista.aec@gmail.com"
                className="group flex cursor-pointer items-start justify-center gap-3 text-sm text-white/80 transition-colors duration-300 hover:text-white sm:justify-start"
              >
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span>floorvista.aec@gmail.com</span>
              </motion.a>

              {/* Location */}
              <motion.div
                variants={linkAnimation}
                className="flex items-start justify-center gap-3 text-sm text-white/80 sm:justify-start"
              >
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  Ammagardens Road, Gadderagadi,
                  <br />
                  Mancherial, Telangana - 504209
                </span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3 sm:justify-start"
            >
              {/* Instagram */}
              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://www.instagram.com/floor.vista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-red-500 transition-all duration-300 hover:border-white hover:bg-white hover:text-red-500"
              >
                <FaInstagram size={28} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://www.linkedin.com/company/floorvista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-blue-500"
              >
                <FaLinkedin size={28} />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://wa.me/919494897562"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-green-500 transition-all duration-300 hover:border-white hover:bg-white hover:text-green-500"
              >
                <FaWhatsapp size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="relative z-10 border-t border-white/15"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-center text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <p>
            © {new Date().getFullYear()} Floorvista Design Consultants. All
            rights reserved.
          </p>

          <DevelopedByStaffArc />

          <p>Designing Dreams!</p>
        </div>
      </motion.div>
    </footer>
  );
}
