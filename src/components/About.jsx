"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import Achievements from "./sub/Achievements"
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets"

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text="About Me" />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          alt={"about image"}
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] md:hidden"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute text-zinc-100 top-20 -left-5 scale-[2.5] md:hidden dark:text-zinc-700 transition-colors ">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white transition-colors">
            {aboutText}
          </p>
          <a
            href="/sabuj-cv2025-2.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 border border-gray-300 
          bg-red-400 font-light text-white px-3 py-2 rounded-full hover:bg-red-500 transition-colors "
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="w-full mt-20 flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  )
}

export default About
