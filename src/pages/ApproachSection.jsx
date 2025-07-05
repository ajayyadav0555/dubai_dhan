import React from 'react';

const ApproachSection = () => {
    return (
        <section id='approach'>
            <div className='max-w-7xl mx-auto md:my-20'>
                <div className=' px-5 md:px-10 pt-10 pb-16 flex flex-col md:flex-row gap-10 bg-gradient-to-r from-[#0379C7]/90 to-[#6aacf7]/90 max-sm:m-2'>
                    <div className='md:basis-1/2'>
                        <p className='md:text-6xl font-serif text-4xl text-white'>
                            Our approach is completely different. There's <span className="underline decoration-green-500">no</span>
                            {" "}off-plan at all.
                        </p>
                    </div>
                    <div className='md:basis-1/2'>
                        <p className='text-lg [font-family:"Quicksand",sans-serif] text-white'>
                            We analyze the real estate market for existing properties and make investment decisions based on real data. We clean thousands of data sets of anomalies, evaluate them, and interpret the data, resulting in the best investment decisions for you. Data is truth, and clarity in the data leads to better decisions and better investments. This is a truly unfair advantage for our investors – and for you.
                        </p>
                        <div className='text-sm md:text-lg'>
                            <button className=" md:w-full mt-8 bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-[#0e1a2e] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                                Book your free initial consultation now
                                <p className="text-xs font-normal mt-1">
                                    free of charge and by phone – choose an appointment
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
