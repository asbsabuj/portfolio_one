"use client"

import Image from "next/image"

const NotFoundPage = () => {
  return (
    <div
      id="notfound"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <Image
        src="/not-found.jpg"
        alt="logo icon"
        height={48}
        width={48}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">
          The Page you are looking for does not exist now !!
        </p>
        <button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to home
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
