import React from 'react'

const AvailablitySection = () => {
    return (
        <section id='available'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
                    <div className=''>
                        <div>
                            <img src="https://onecdn.io/media/cd570187-23a1-4f19-b588-04b2e927607b/preview" alt="24X7" />
                        </div>
                    </div>
                    <div className=' px-2'>
                        <h1 className='text-4xl font-sans max-md:mt-14 text-[#1A3154] font-semibold'>Personal advice and 24-hour question flat rate for your success!
                        </h1>
                        <p className='opacity-60 my-6'>We'll always be in touch with you. We'll create an <span className='font-bold underline'>exclusive , private</span> WhatsApp group with you, the Dubai Finance team, and Eugen Zimbelmann himself.</p>
                        <p className='opacity-60 my-6'>This allows you to communicate with us 24 hours a day, 7 days a week, and receive quick and easy answers. We'll send you documents and the best real estate deals in Dubai via WhatsApp.</p>
                        <p className='opacity-60 my-6'>Our team, including Eugen personally, are available exclusively for you. You can ask any questions and discuss things one-on-one. For more complex topics, we are also available to you personally via Zoom conference.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvailablitySection