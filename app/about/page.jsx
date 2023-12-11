"use client";
import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// components
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";

//frame motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// conters
import CountUp from "react-countup";

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="xl:flex absolute bottom-0 -left-[100px] w-2/12"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years age, I began freelancing as a developer. Since then, I've
            development remote work for agencies, counsulted for startup, and
            collaborated
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex gap-4  flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div
                  className=" text-xs uppercase tracking-[1px] leading-[1.4]
                 "
                >
                  Years of experience
                </div>
              </div>

              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div
                  className=" text-xs uppercase tracking-[1px] leading-[1.4]
                 "
                >
                  Satisfied clients
                </div>
              </div>
              {/* project */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div
                  className=" text-xs uppercase tracking-[1px] leading-[1.4]
                 "
                >
                  Finished <br /> projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div
                  className=" text-xs uppercase tracking-[1px] leading-[1.4]
                 "
                >
                  Winning <br /> awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex "></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl ">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
