"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const controls = useAnimation();

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (inView) {
    controls.start("visible");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? -15 : 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
      <div className="relative">
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
            theme === "light" ? "bg-gray-300" : "bg-gray-700"
          }`}
        />
        <motion.div
          ref={inViewRef}
          className="space-y-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {experiencesData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col items-center ${
                  isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
                } sm:justify-between`}
                variants={itemVariants(isLeft)}
              >
             

                <div className="w-full sm:w-1/2 px-4 sm:px-8">
                  <div
                    className={`p-6 rounded-lg shadow-lg ${
                      theme === "light" ? "bg-gray-100" : "bg-gray-800"
                    }`}
                  >
                    <h3 className="text-xl font-semibold capitalize">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.location}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-400">
                      {item.description}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center ${
                  theme === "light" ? "bg-white" : "bg-gray-700"
                }`}
                style={{
                  left: 'calc(50% - 1.5rem)',
                  top: 0,
                }}
              >
                {item.icon}
              </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
