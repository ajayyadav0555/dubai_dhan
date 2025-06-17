import React from 'react';
import { motion } from 'framer-motion';

const Strategy = ({ step }) => {
    return (
        <motion.div
            className="relative flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-10 items-start md:items-stretch overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Timeline for mobile (left aligned) */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 z-0 flex items-center">
                <div className="w-[3px] h-full bg-[#89c9ed] relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-[#89c9ed] w-8 h-8 rounded-full flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-[#89c9ed] rounded-full" />
                    </div>
                </div>
            </div>


            {/* Left Section */}
            <div className="md:w-1/2 px-6 md:px-20 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#f5a623] mb-2">Step - {step.stepNumber}</h3>
                <h2 className="text-3xl font-bold text-[#1e2a67] mb-4">{step.title}</h2>
                <p className="text-[#4a4a4a] text-base leading-relaxed">{step.description}</p>
            </div>

            {/* Timeline Divider for desktop */}
            <div className="hidden md:flex items-center px-4 relative order-2">
                <div className="w-[3px] bg-[#89c9ed] h-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-[#89c9ed] w-10 h-10 rounded-full flex items-center justify-center z-10">
                        <div className="w-2.5 h-2.5 bg-[#89c9ed] rounded-full" />
                    </div>
                </div>
            </div>

            {/* Right Section (image animation from left) */}
            <motion.div
                className="md:w-1/2 px-6 flex justify-center order-1 md:order-3 mb-6 md:mb-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    src={step.image}
                    alt={`Step ${step.stepNumber}`}
                    className="max-w-xs sm:max-w-sm md:max-w-full object-cover rounded-md shadow-md"
                />
            </motion.div>
        </motion.div>
    );
};

export default Strategy;
