import CTA from "@/components/home/CTA";
import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import React from "react";
import SelectedProjects from "@/components/home/SelectedProjects";

const page = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <SelectedProjects />
      <CTA />
    </>
  );
};

export default page;
