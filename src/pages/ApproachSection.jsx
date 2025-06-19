import React from 'react';

const ApproachSection = () => {
    return (
        <section id='approach'>
            <div className='max-w-7xl mx-auto md:my-20'>
                <div className=' px-5 md:px-10 pt-10 pb-16 flex flex-col md:flex-row gap-10 bg-gray-100 max-sm:m-2'>
                    <div className='md:basis-1/2'>
                        <p className='md:text-6xl font-sans text-4xl text-[#1A3154]'>
                            Our approach is completely different. There's <span className="underline decoration-green-500">no</span>
                            {" "}off-plan at all.
                        </p>
                    </div>
                    <div className='md:basis-1/2'>
                        <p className='text-lg'>
                            We analyze the real estate market for existing properties and make investment decisions based on real data. We clean thousands of data sets of anomalies, evaluate them, and interpret the data, resulting in the best investment decisions for you. Data is truth, and clarity in the data leads to better decisions and better investments. This is a truly unfair advantage for our investors – and for you.
                        </p>
                        <div className='text-sm md:text-lg'>
                            <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition border">
                                Book your free initial consultation now
                                <p className="text-xs md:text-sm font-normal">free of charge and by phone – choose an appointment</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
