import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    { number: 1, title: "Strategy meeting", description: "The foundation of every investment strategy and its implementation is a strategy discussion. Here, you will define your strategy in a Zoom call or a personal meeting with Eugen Zimbelmann, our senior investment advisor. Eugen is the only German-speaking real estate advisor accredited by the Dubai Land Department to advise on real estate in Dubai. As an experienced investor, financing specialist, and real estate appraiser in Dubai, you can benefit from his experience and market assessment.  ", image: "image1.jpg" },
    { number: 2, title: "Real estate financing", description: "Real estate financing is often an important lever when purchasing existing properties. As the largest German real estate financier in Dubai, we offer you access to attractive financing terms from local banks in Dubai and handle the entire loan process up to loan disbursement. Whether you want to finance your property purchase or pay entirely in cash, we will review your options and calculate customized investment analyses for you.", image: "image2.jpg" },
    { number: 3, title: "Bank account in Dubai", description: "A bank account in Dubai is an important part of the investment strategy for many private investors. It gives you the opportunity to collect rent yourself and maintain control over your assets at all times. With your own private bank account in Dubai, you can avoid expensive powers of attorney and trustees. With our excellent banking contacts, we open your bank account in Dubai and take care of the entire process.", image: "image3.jpg" },
    { number: 4, title: "Find investment property", description: "The Dubai real estate market is one of the most transparent in the world. All transactions are published daily by the Dubai Land Department. We aggregate this data and combine it with other data sources, such as rental contracts or Airbnb booking data. From this, we calculate real rental returns and can evaluate your investment based on real data even before you buy. This depth of data and analytical approach is what gives you a real advantage.", image: "image4.jpg" },
    { number: 5, title: "Due diligence", description: "Due diligence and pre-purchase due diligence are important components of the real estate purchase process. We review all property documents, leases, and the building structure. Based on our data, we analyze the property's potential and compare short- and long-term rental scenarios. As part of an appraisal, we determine the property's true value and use this knowledge in negotiations.", image: "image5.jpg" },
    { number: 6, title: "Contract negotiation", description: "The best purchase price and the best purchase conditions are our benchmark for success. To achieve this, we leverage our access to the entire real estate market, engage with sellers, and negotiate the best purchase price. We enforce tough contract terms that exclusively represent your interests. We support and create solutions for down payments, getting the best deal for you in every respect.", image: "image1.jpg" },
    { number: 7, title: "Business setup", description: "Congratulations! You've successfully purchased your property. Now comes the most important part – the management phase. We manage your property long-term, taking care of leasing, negotiating rent increases, and monitoring partners such as short-term letting agencies. This ensures that your long-term interests are served exclusively. You will receive regular reports and evaluations.", image: "image2.jpg" },
];

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 py-40">
            {/* Line inside relative container */}
            <div className="relative">
                {/* Animated Vertical Line (starts at step 1 dot) */}
                <motion.div
                    style={{ scaleY, transformOrigin: "top center" }}
                    className="absolute left-2 md:left-1/2 top-10 w-[1px] h-[calc(100%-2.5rem)] bg-[#14213D] -translate-x-1/2 z-0"
                />

                {/* Steps */}
                {steps.map((step, index) => (
                    <StepCard key={index} step={step} isLeft={index % 2 === 0} />
                ))}
            </div>
            <div className="">
                <h1 className="text-center md:text-4xl text-[20px] ">It's time we talked to each other <span className="underline cursor-pointer">now</span>.</h1>
               <h1 className="text-center"> <button className="mt-8 bg-yellow-500 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition border">
                    Book your free initial consultation now
                    <p className="text-xs font-normal">free of charge and by phone – choose an appointment</p>

                </button></h1>
            </div>
        </div>
    );
};

const StepCard = ({ step, isLeft }) => {
    return (
        <div className={`relative z-10 flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""} mb-32`}>
            {/* Step Number Dot (exact position aligns with line) */}
            <div className="absolute top-0 left-2 md:left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-md bg-[#1A3154] text-white flex items-center justify-center font-bold shadow-md [font-family:'Quicksand',sans-serif]">
                    {step.number}
                </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 px-6 flex justify-center">
                <div className="ml-10">
                    <img src={step.image} alt={`Step ${step.number}`} className="w-72 md:w-96 object-contain rounded-2xl" />
                    <div className="mt-7">
                        <h3 className="md:text-3xl text-xl font-semibold mb-2 text-[#2F4A64] [font-family:'Quicksand',sans-serif]">{step.title}</h3>
                        <p className="text-gray-500 text-normal opacity-60 leading-relaxed mt-4 [font-family:'Quicksand',sans-serif]">{step.description}</p>
                    </div>
                </div>
            </div>


            {/* Description (opposite side of image) */}
            {/* <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 text-left md:text-right">
                <h3 className="text-xl font-semibold mb-2 text-[#2F4A64]">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div> */}
        </div>
    );
};

export default Timeline;
