"use client"
import Heading from "./sub/Heading"
import Image from "next/image"
import { webdevData, devOpsData } from "@/assets"
import { motion } from "framer-motion"

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  }
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <Heading text={"Skills"} />
      <div className="left-0 grid grid-cols-2 gap-24 xs:gap-16">
        <span>
          <h1 className=" h-24 text-2xl sm:text-xl font-light text-gray-700 dark:text-white transition-colors ">
            Web Development
          </h1>
          <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:flex sm:flex-wrap justify-between  gap-x-8 gap-y-10 lg:gap-y-20">
            {/* // flex flex-wrap */}
            {webdevData.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                viewport={{ margin: "50px", once: true }}
                className="flex flex-wrap items-center justify-center gap-x-3 rounded-xl border
        border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2 dark:bg-zinc-700 transition-colors "
              >
                <Image
                  src={item.icon}
                  alt="skills image"
                  width={100}
                  height={100}
                  className="h-auto w-[40px]"
                />
                <p className="text-sm overflow-hidden text-ellipsis hover:overflow-visible text-gray-600 dark:text-white transition-colors">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </span>
        <span>
          <h1 className="h-24 text-2xl sm:text-xl font-light text-gray-700 dark:text-white transition-colors">
            DevOps Engineering
          </h1>
          <div className=" w-full grid grid-cols-3 md:grid-cols-2 sm:flex sm:flex-wrap justify-between  gap-x-8 gap-y-10 lg:gap-y-20">
            {/*  flex flex-wrap */}
            {devOpsData.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                viewport={{ margin: "50px", once: true }}
                className="flex flex-wrap items-center justify-center gap-x-3 rounded-xl border
        border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2 dark:bg-zinc-700 transition-colors"
              >
                <Image
                  src={item.icon}
                  alt="skills image"
                  width={100}
                  height={100}
                  className="h-auto w-[40px]"
                />
                <p className=" text-sm overflow-hidden text-ellipsis hover:overflow-visible  text-gray-600 dark:text-white transition-colors">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </span>
      </div>
    </div>
  )
}

export default Skills
