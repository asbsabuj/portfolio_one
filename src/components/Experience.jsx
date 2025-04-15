"use client"
import Image from "next/image"
import Heading from "./sub/Heading"
import { educationData, experienceData } from "@/assets"
import { arrowLeftIcon } from "@/assets"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const Experience = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  })

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })

  return (
    <div id="experience" className="relative py-20">
      <Heading text={"Education & Experience"} />
      <Image
        src={"/education.png"}
        alt="education image"
        width={400}
        height={400}
        className="absolute  -top-4 right-0 opacity-70 lg:hidden"
      />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center  gap-y-10 lg:gap-y-20
      py-10"
      >
        {educationData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
              i % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 border border-red-300 bg-white rounded-md p-4
              sm:text-sm tracking-wide dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white transition-colors ">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-100 transition-colors ">
                <span className="inline-block font-light">Institute:</span>
                <span className="inline-block pl-2 font-extralight">
                  {data.institute}
                </span>
              </p>
              <p className="text-gray-800 dark:text-gray-100 transition-colors ">
                <span className="font-light">
                  {data.uni ? "Subect" : "Group"}:
                </span>
                <span className="pl-2 font-extralight">{data.group}</span>
              </p>
              <p className="text-gray-800 dark:text-gray-100 transition-colors">
                <span className="inline-block font-light">
                  {data.uni ? "CGPA" : "GPA"}:
                </span>
                <span className="inline-block pl-2 font-extralight">
                  {data.gpa}
                </span>
              </p>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  i % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>

            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square
                grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                  i % 2 === 0
                    ? "left-full -translate-x-1/2 lg:left-1/2"
                    : "right-full translate-x-1/2 lg:right-1/2"
                } `}
            >
              {data.year}
            </div>
          </div>
        ))}

        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
              i % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 border border-red-300 bg-white rounded-md p-4
            sm:text-sm tracking-wide dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white transition-colors">
                {data.title}
              </h1>

              <p className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="inline-block font-light">Company:</span>
                <span className="inline-block pl-2 font-extralight">
                  {data.company}
                </span>
              </p>
              <p className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="inline-block font-light">Experience:</span>
                <span className="inline-block pl-2 font-extralight">
                  {data.experience}
                </span>
              </p>

              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  i % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square
          grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
            i % 2 === 0
              ? "left-full -translate-x-1/2 lg:left-1/2"
              : "right-full translate-x-1/2 lg:right-1/2"
          } `}
            >
              {data.year}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  )
}

export default Experience
