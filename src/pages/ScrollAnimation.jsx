import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { number: 1, title: "Strategy meeting", description: "Description 1", image: "image1.jpg" },
  { number: 2, title: "Real estate financing", description: "Description 2", image: "image2.jpg" },
  { number: 3, title: "Bank account in Dubai", description: "Description 3", image: "image3.jpg" },
  { number: 4, title: "Find investment property", description: "Description 4", image: "image4.jpg" },
  { number: 5, title: "Due diligence", description: "Description 5", image: "image5.jpg" },
  { number: 6, title: "Contract negotiation", description: "Description 6", image: "image1.jpg" },
  { number: 7, title: "Business setup", description: "Description 7", image: "image2.jpg" },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 mb-10">
      {/* Wrapping line with controlled height div */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-56 w-[2px] -translate-x-1/2 z-0">
        <motion.div
          style={{ scaleY, transformOrigin: "top center" }}
          className="w-full h-full bg-[#14213D]"
        />
      </div>

      {/* Timeline steps */}
      <div className="relative z-10">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} isLeft={index % 2 === 0} />
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-20 text-center md:mx-24">
        <h1 className="md:text-4xl text-[20px] mb-6">
          It's time we talked to each other <span className="underline cursor-pointer">now</span>.
        </h1>
        <button className="bg-[#B9F0F9] text-[#152e52] py-3 px-4 rounded-md text-base font-semibold shadow-2xl transition hover:shadow-[0_0_20px_#B9F0F9] hover:scale-105 duration-300 mt-2 md:w-1/2">
          <span className="block font-bold">Book your free initial consultation now</span>
          <span className="block md:text-sm text-xs">Free of charge and by phone – choose an appointment</span>
        </button>
      </div>

    </div>
  );
};

const StepCard = ({ step, isLeft }) => {
  return (
    <div
      className={`relative z-10 flex flex-col-reverse md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""
        } mb-32`}
    >
      <div className="absolute top-0 left-2 md:left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-10 h-10 rounded-md bg-[#1A3154] text-white flex items-center justify-center font-bold shadow-md [font-family:'Quicksand',sans-serif]">
          {step.number}
        </div>
      </div>

      <div className="w-full md:w-1/2 px-6 flex justify-center">
        <div className="ml-10">
          <img
            src={step.image}
            alt={`Step ${step.number}`}
            className="w-72 md:w-96 object-contain rounded-2xl"
          />
          <div className="mt-7">
            <h3 className="md:text-3xl text-xl font-semibold mb-2 text-[#2F4A64] [font-family:'Quicksand',sans-serif]">
              {step.title}
            </h3>
            <p className="text-gray-500 text-normal opacity-60 leading-relaxed mt-4 [font-family:'Quicksand',sans-serif]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
