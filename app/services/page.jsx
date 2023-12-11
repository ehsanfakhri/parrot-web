"use client";
// components
import ServiceSlider from "../components/ServiceSlider";
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";

// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/variants";

export default function ServicePage() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:flex-row xl:flex gap-x-8">
          {/* text */}
          <div
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 
          xl:mb-0"
          >
            <motion.h2
              variants={fadeIn("up", "0.2")}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "0.4")}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", "0.6")}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
