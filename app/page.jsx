"use client";
// next image
import Image from "next/image";

// type writer
import Typewriter from "typewriter-effect";

// link components
import Link from "next/link";

// components
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/variants";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 "
          >
            <Typewriter
              options={{
                strings: ["Web Developer"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
            <Typewriter
              options={{
                strings: ["& design"],
                autoStart: true,
                loop: true,
              }}
            />
            <Typewriter
              options={{
                strings: ["with a"],
                autoStart: true,
                loop: true,
              }}
            />

            <Link href={"/"}>
              <Image
                className="mx-auto xl:mx-0 bg-white rounded-full px-4 py-2 mt-4  "
                src={"/Patrrot-Final-01.png"}
                width={180}
                height={100}
                alt="logo-parrot-web"
              />
            </Link>
          </motion.h1>

          <h1></h1>
          {/* subtitie */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Design and development of smart sites and platforms
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="mt-20 w-[1200px] h-full absolute right-0 top-0">
        {/* particles */}
        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" max-w[737px] max-h-[678px] absolute lg:right-[25%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
