"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
      onClick={() => setShow((show) => !show)}
    >
      <Image
        src={data.url}
        alt="project picture"
        width={400}
        height={400}
        priority={true}
        className="rounded-lg opacity-70"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center
      gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
      >
        <h2 className="text-lg underline font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
          {data.desc}
        </p>
        <Link
          href={data.liveUrl}
          passHref
          legacyBehavior
          className="underline text-xl text-center"
        >
          <a target="_blank">Live</a>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Project
