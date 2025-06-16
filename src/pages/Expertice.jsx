import React from 'react'

const Expertice = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto mb-16'>
                <h1 className='text-center md:text-4xl text-3xl md:mt-20 mt-10 text-[#152e52]  font-semibold'>Real expertise and independent advice</h1>
                <p className='md:mx-20 mx-10 mt-5 flex flex-wrap text-gray-600 font-extralight text-center'>As a sworn appraiser and real estate expert, accredited by the Dubai Land Department, Eugen Zimbelmann is the expert for real estate in Dubai. He is also an investor and financing specialist. As a strategic partner and independent advisor, he represents your interests exclusively, handling purchase agreement negotiations and contract review – without commissions or conflicts of interest. Thanks to our expertise and established networks, we always have the best deals and analyze the Dubai real estate market in greater depth than anyone else on the market. Whether long-term or short-term rentals, we know the figures even before the purchase.</p>

                <div className='bg-gray-100 max-w-full  mt-14 rounded-md pb-10'>
                    <p className='text-3xl max-w-[300px] text-[#152e52] pt-10 pl-10 '>Accredited appraiser
                        and consultants of:</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 items-center md:gap-6 shrink gap-3 mt-10'>
                        <img
                            src="/tree.png"
                            alt="Land Department"
                            className="w-80 h-40 object-contain"
                        />
                        <img
                            src="/rera.png"
                            alt="Land Department"
                            className="w-80 h-40 object-contain"
                        />
                        <img
                            src="/cardnew.jpg"
                            alt="Land Department"
                            className="w-80 h-40 object-contain relative max-md:left-[50%] hover:scale-[0.8] transition-all duration-500 "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertice