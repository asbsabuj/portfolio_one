"use client"
import Image from "next/image"
import { heroIcons } from "@/assets"
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"
import { useState } from "react"

const Hero = () => {
  //for tracking window size and dynamic update of the window size

  const [windowOffset, setWindowoffSet] = useState({
    innerWidth: 0,
    innerHeight: 0,
  })

  //for tracking if mouse is moving or recently moved, important for animation and updating component which only updates animation if mouse moves

  const [mouseMove, setMouseMove] = useState(false)

  //when mouse enters the 'talk to me' button, greetings('Hi!) pops up with animated effect
  const [buttonHover, setButtonHover] = useState(false)

  //mouse movement animation using framer motion

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  //handles mouse movement horizontally and vertically
  const handleMouseMovement = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)

    //console.log(clientX, clientY, x, y)
  }

  //handles when mouse enters the hero section
  const handleMouseEnter = () => {
    setWindowoffSet({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    })
    setMouseMove(true)
  }

  //mouse movement from top to innerHeight and left to innerWidth smoothly and adding another layer of animation
  const { innerWidth, innerHeight } = windowOffset

  //when mouse enters window frame, the hero picture moves with it

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -40])

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMovement}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt={"person image"}
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white sm:text-2xl"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0, //text becomes twice the size when mouse on it
                y: buttonHover ? -40 : 0, // text pops out  when mouse on it
              }}
              transition={{ opacity: { delay: 0.6 } }}
            >
              Hi!
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-green-500 dark:text-white transition-colors">
            My name is Abu Sayed Bhuiyan Sabuj
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            I like web development, networking and devOps engineering 😁
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-yellow-600 text-3xl sm:text-2xl"
        >
          {heroIcons.map((icon, i) => (
            <a
              href={icon.link}
              target={"_blank"}
              rel={"noreferrer"}
              key={i}
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
            >
              {icon.pic}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light 
          capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </motion.a>
      </div>
    </div>
  )
}

export default Hero
