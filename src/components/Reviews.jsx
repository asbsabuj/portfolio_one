"use client"
import Heading from "./sub/Heading"
import Image from "next/image"
import { reviewsData, starIcons, arrowIcons } from "@/assets"
import { useState, useRef, useEffect } from "react"
import { animate, motion } from "framer-motion"

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(false)
  const prevIndex = useRef(0)
  const slides = useRef([])

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 })
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    })
  }

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 })
    animate(slides.current[prevIndex.current], { x: "100%" })
  }

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler()
    prevIndex.current = index
  }, [index])

  return (
    <div id="reviews" className="py-20">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px]
        sm:h-[600px] flex items-center justify-center overflow-hidden  "
        >
          {reviewsData.map((review, i) => (
            <motion.div
              initial={{ x: "100%" }}
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4
          border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
              ref={(el) => slides.current.push(el)}
            >
              <Image
                src={review.image}
                alt="Client Image"
                width={130}
                height={130}
                className="w-[130px] aspect-square border border-yellow-500 rounded-full p-4
              object-contain "
              />
              <h1 className="text-2xl md:text-xl text-yellow-600 text-center tracking-wider ">
                {review.name}
              </h1>
              <p
                className="text-lg md:text-sm font-extralight text-justify text-gray-600 tracking-wide
            first-letter:pl-2 dark:text-white transition-colors"
              >
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg text-yellow-600 font-light mr-3">
                  {review.stars
                    .reduce((sum, item) => {
                      return (sum = sum + item)
                    }, 0)
                    .toFixed(1)}
                </span>
                <div className="flex items-center text-yellow-500 text-2xl gap-x-2">
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-4xl flex gap-x-4 text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all `}
            onClick={() => {
              setDirection(true)
              setIndex(index - 1)
            }}
          >
            {arrowIcons[0]}
          </button>
          <button
            className={`${
              index === reviewsData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all `}
            onClick={() => {
              setDirection(false)
              setIndex(index + 1)
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
