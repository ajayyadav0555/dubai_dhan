import React from 'react'
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaBuilding, FaHandHoldingHeart, FaHome, FaQuoteLeft } from 'react-icons/fa';

const FounderSection = () => {
    return (
        <section className=' bg-cover bg-center bg-no-repeat  border-transparent' id='founder' style={{
            backgroundImage: "url('https://images.pexels.com/photos/28029006/pexels-photo-28029006.jpeg')",
            backgroundSize:"100% 100%"
        }}>
            <div className='max-w-7xl mx-auto  border border-transparent'>
                <div className=' my-20'>
                    <div className=' w-full md:max-w-1/2 text-white bg-[#191918] opacity-80 px-4 pt-5 pb-10 rounded'>
                        <h1 className='m-4 px-2 py-1 bg-[#E2ECFE] border w-fit rounded-md text-sm font-bold text-[#1A3154]'>Founder and Senior Advisor</h1>
                        <h1 className='text-3xl ml-4 font-mono'>Eugen Zimbelmann</h1>
                        <p className='ml-4 font-bold text-base'>I have been a professional real estate investor for over 10 years. The Dubai Land Department has accredited and sworn me in as a real estate consultant, appraiser, and expert. I am the founder of Dubai Finance and Financing Specialist. I help German-speaking investors like you invest sustainably and securely in existing properties in Dubai.</p>

                        <div className='grid md:grid-cols-1 grid-cols-2 max-sm:grid-cols-1'>
                            <div className='flex gap-5 ml-4 mt-5 mb-5 items-start'>
                                <div className='text-4xl'><BiSolidHomeHeart /></div>
                                <p className='text-[15px] font-bold'>Real estate consultants and appraisers, accredited by the Dubai Land Department</p>
                            </div>
                            <div className='flex gap-5 ml-4 mt-6 mb-5 items-start'>
                                <div className='text-4xl'><FaBuilding /></div>
                                <p className='text-[15px] font-bold'>Founder of Dubai Finanz – the largest German-speaking real estate financier in Dubai</p>
                            </div>
                            <div className='flex gap-5 ml-4 mt-6 mb-5 items-start'>
                                <div className='text-4xl'><FaHome /></div>
                                <p className='text-[15px] font-bold'>Investor with over 50 residential units in Germany and Dubai</p>
                            </div>
                            <div className='flex gap-5 ml-4 mt-6 mb-5 items-start'>
                                <div className='text-4xl'><FaHandHoldingHeart /></div>
                                <p className='text-[15px] font-bold'>
                                    "I treat your real estate purchase like my own."</p>
                            </div>
                        </div>
                        <div className='ml-3'>
                            <p className='text-[16px] font-bold py-3'>
                                You can expect in-depth market knowledge, honest feedback, and a sustainable investment strategy.</p>
                            <p className='text-[16px] font-bold py-3'>
                                In addition, I have a team of experts at my side who will support you in all matters and work to ensure your investment success. They are competent and reliable.
                            </p>
                            <p className='text-xl font-bold pt-3'>
                                Talk to me - before you buy in Dubai.</p>
                        </div>
                        <div className='md:text-lg'>
                            <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition border">
                                Book your free initial consultation now
                                <p className="text-xs font-normal">free of charge and by phone – choose an appointment</p>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderSection