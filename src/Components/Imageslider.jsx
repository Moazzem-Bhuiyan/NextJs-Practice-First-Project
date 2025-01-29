"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";


const images = [
  "/image/img1.jpeg",
  "/image/img2.jpg",
  "/image/img3.jpg",
  "/image/img4.png",
  "/image/img5.JPG",
];

export const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => prevIndexes.map((prevIndex) => (prevIndex + 1) % 5));
  };

 
  useEffect(() => {
    const interval = setInterval(handleNext, 2000); 
    return () => clearInterval(interval); 
  }, []);

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute border border-white bg-red-200  flex justify-center"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%" }}
        >
          <Image
            src={image}
            alt={`img-${index}`}
            width={500} 
            height={500} 
            className="rounded-[12px]"
          />
        </motion.div>
      ))}

      {/* Manual Next Button (Optional) */}
      <button
        onClick={handleNext}
        className="absolute bottom-10 bg-white px-6 py-2 rounded-lg text-black font-semibold"
      >
        Next
      </button>
    </div>
  );
};
