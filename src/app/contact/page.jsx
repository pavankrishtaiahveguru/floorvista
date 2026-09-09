"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919494897562";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const contactItem = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello FloorVista Design Consultants,

I would like to discuss a project with you.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service || "Not specified"}

Project Details:
${formData.message}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#173B38]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#173B38] px-6 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-14 lg:pt-32">
        {/* Decorative Circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/30"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/20"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/10"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Eyebrow */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
          >
            Contact Us
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUpSlow}
            className="max-w-3xl text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Let&apos;s create{" "}
            <span className="italic">something remarkable.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base"
          >
            Have a project in mind? Tell us about your vision and let&apos;s
            create a space that is designed around you.
          </motion.p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#173B38]/45"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              variants={fadeUpSlow}
              className="text-3xl font-light leading-tight tracking-tight sm:text-4xl"
            >
              We&apos;d love to hear
              <br />
              <span className="italic">from you.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-sm leading-7 text-[#173B38]/60"
            >
              Whether you are planning a new home, commercial space, interior,
              or structural project, our team is here to help.
            </motion.p>

            {/* Contact Details */}
            <motion.div variants={staggerContainer} className="mt-10 space-y-7">
              {/* Phone */}
              <motion.a
                variants={contactItem}
                href="tel:+918341208733"
                className="group flex cursor-pointer items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#173B38]/10 transition-all duration-300 group-hover:border-[#173B38] group-hover:bg-[#173B38] group-hover:text-white">
                  <Phone size={17} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/40">
                    Phone
                  </p>

                  <p className="text-sm text-[#173B38]">+91 83412 08733</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                variants={contactItem}
                href="https://wa.me/919494897562"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#173B38]/10 transition-all duration-300 group-hover:border-[#173B38] group-hover:bg-[#173B38] group-hover:text-white">
                  <FaWhatsapp size={17} />
                </span>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/40">
                    WhatsApp
                  </p>

                  <p className="text-sm text-[#173B38]">+91 94948 97562</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={contactItem}
                href="mailto:floorvista.aec@gmail.com"
                className="group flex cursor-pointer items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#173B38]/10 transition-all duration-300 group-hover:border-[#173B38] group-hover:bg-[#173B38] group-hover:text-white">
                  <Mail size={17} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/40">
                    Email
                  </p>

                  <p className="text-sm text-[#173B38]">
                    floorvista.aec@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                variants={contactItem}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#173B38]/10">
                  <MapPin size={17} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/40">
                    Address
                  </p>

                  <p className="max-w-xs text-sm leading-6 text-[#173B38]">
                    Ammagardens Road, Gadderagadi,
                    <br />
                    Mancherial, Telangana - 504209
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-3"
            >
              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://www.instagram.com/floor.vista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#173B38]/15 text-[#173B38] transition-all duration-300 hover:border-[#173B38] hover:bg-[#173B38] hover:text-white"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://www.linkedin.com/company/floorvista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#173B38]/15 text-[#173B38] transition-all duration-300 hover:border-[#173B38] hover:bg-[#173B38] hover:text-white"
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href="https://wa.me/919494897562"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#173B38]/15 text-[#173B38] transition-all duration-300 hover:border-[#173B38] hover:bg-[#173B38] hover:text-white"
              >
                <FaWhatsapp size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-2xl border border-[#173B38]/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,59,56,0.08)] sm:p-8 lg:p-9"
          >
            {/* Decorative circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#173B38]/5"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#173B38]/5"
            />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#173B38]" />

                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#173B38]/45">
                  Project Enquiry
                </p>
              </div>

              <h2 className="mt-3 max-w-xl text-2xl font-light leading-tight tracking-[-0.02em] text-[#173B38] sm:text-3xl">
                Tell us about
                <br />
                <span className="italic">your project.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#173B38]/50">
                Share a few details about your project and our team will get in
                touch with you.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative space-y-4"
            >
              {/* Name + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <motion.div variants={fadeUp} className="group">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/45"
                  >
                    Your Name
                  </label>

                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full border-b border-[#173B38]/15 bg-transparent px-0 py-2 text-sm text-[#173B38] outline-none transition-all duration-300 placeholder:text-[#173B38]/25 focus:outline-none focus:ring-0 focus:border-[#173B38]"
                    />

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#173B38] transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeUp} className="group">
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/45"
                  >
                    Phone
                  </label>

                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 91xxxxxxxx"
                      className="w-full border-b border-[#173B38]/15 bg-transparent px-0 py-2 text-sm text-[#173B38] outline-none transition-all duration-300 placeholder:text-[#173B38]/25 focus:border-[#173B38]"
                    />

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#173B38] transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </motion.div>
              </div>

              {/* Email */}
              <motion.div variants={fadeUp} className="group">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/45"
                >
                  Email Address
                </label>

                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border-b border-[#173B38]/15 bg-transparent px-0 py-2 text-sm text-[#173B38] outline-none transition-all duration-300 placeholder:text-[#173B38]/25 focus:border-[#173B38]"
                  />

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#173B38] transition-all duration-300 group-focus-within:w-full" />
                </div>
              </motion.div>

              {/* Service */}
              <motion.div variants={fadeUp} className="group">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/45"
                >
                  Service Required
                </label>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full cursor-pointer appearance-none border-b border-[#173B38]/15 bg-transparent px-0 py-2 pr-8 text-sm text-[#173B38] outline-none transition-colors duration-300 focus:border-[#173B38]"
                  >
                    <option value="">Select a service</option>
                    <option value="Architectural Planning">
                      Architectural Planning
                    </option>
                    <option value="Structural Design">Structural Design</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Elevation Design">Elevation Design</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[#173B38]/50"
                  />

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#173B38] transition-all duration-300 group-focus-within:w-full" />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={fadeUp} className="group">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B38]/45"
                >
                  Project Details
                </label>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your project..."
                    className="w-full resize-none border-b border-[#173B38]/15 bg-transparent px-0 py-2 text-sm leading-6 text-[#173B38] outline-none transition-colors duration-300 placeholder:text-[#173B38]/25 focus:border-[#173B38]"
                  />

                  {/* <span className="absolute bottom-0 left-0 h-px w-0 bg-[#173B38] transition-all duration-300 group-focus-within:w-full" /> */}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeUp} className="pt-1">
                <button
                  type="submit"
                  disabled={submitted}
                  className="group flex w-full cursor-pointer items-center justify-between rounded-full bg-[#173B38] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#214d49] hover:shadow-[0_10px_30px_rgba(23,59,56,0.18)] disabled:cursor-default disabled:opacity-90"
                >
                  <span>
                    {submitted
                      ? "Opening WhatsApp..."
                      : "Send Enquiry on WhatsApp"}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#173B38] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} strokeWidth={1.8} />
                  </span>
                </button>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#173B38]/35">
                  Your enquiry will open directly in WhatsApp with the details
                  you provide.
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
