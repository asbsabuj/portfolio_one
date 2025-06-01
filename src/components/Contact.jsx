"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import NotFoundPage from "./sub/NotFound"

const Contact = () => {
  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text={"Contact Info"} />
      <div
        className="w-full h-full my-auto flex lg:flex-col items-center justify-between
      lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="contact gif"
            width={400}
            height={400}
            className="w-auto rounded-md opacity-80 "
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3 "
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3 ">
            <input
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm text-gray-500 tracking-wider outline-none"
              placeholder="Your Name"
              type="text"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm text-gray-500 tracking-wider outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm text-gray-500 tracking-wider outline-none"
            placeholder="Subject"
          />
          <textarea
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm text-gray-500 tracking-wider outline-none"
            placeholder="Write me.... "
          ></textarea>
          <div>
            <input
              type="submit"
              className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2
            text-sm font-light text-white tracking-wider outline-none hover:bg-yellow-500 transition-colors cursor-pointer "
              value="Send Message"
            />
            <Link href={<NotFoundPage />}> </Link>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
