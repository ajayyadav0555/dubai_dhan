import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="bg-center bg-contain bg-no-repeat w-full" style={{
      backgroundImage: "url('https://thumbs.dreamstime.com/b/photo-manipulation-dubai-skyline-dubai-skyline-sunset-skyscrapers-reflecting-water-343729522.jpg')",
      backgroundSize: "100% 100%",
    }} id="home">
      <div
        className='bg-[#152e52] text-white py-12 px-6 md:px-12 opacity-90'
      >
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 in-checked:'>
          {/* left side */}
          <div>
            <p className="text-yellow-300 font-semibold text-sm uppercase">
              Invest successfully in Dubai with equity starting from 100,000 EUR
            </p>
            <h1 className="text-2xl md:text-3xl max-w-[500px] mt-6 mb-6 font-bold font-serif">
              Successfully invest in Dubai real estate
            </h1>


            <ul className="space-y-4 text-sm md:text-base [font-family:'Quicksand',sans-serif]">
              {[
                'Get clarity on Dubai real estate and why "off-plan investments", buying developer projects, is the wrong way to go.',
                'Take advantage of our investment concept and invest in existing properties with immediate rental returns in Dubai.',
                'Receive ongoing rental income from day one and leverage your investment with equity returns of 12% and more.',
                'We implement all steps and manage your investment long-term – you don’t have to worry about anything yourself.',
                'Real estate financing is possible with only 40% equity, 60% is financed with local banks.',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-2 font-bold">
                  <IoIosCheckmarkCircle className="text-green-300 w-8 h-8 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-yellow-500 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition">
              Book your free initial consultation now
              <p className="text-xs font-normal">free of charge and by phone – choose an appointment</p>

            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 overflow-hidden">
            <video className="w-[320px] md:w-[520px] rounded shadow"
              controls autoPlay >
              <source src="/video.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <div className="relative overflow-hidden w-[320px] md:w-[520px]">
              <div className="animate-scroll flex gap-6 items-center whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                  <React.Fragment key={i}>
                    <img
                      src="https://onecdn.io/media/8666d522-2e6d-4b07-8868-d5fce55815a3/sm"
                      alt="Journal Logo"
                      className="h-8 inline-block"
                    />
                    <img
                      src="https://onecdn.io/media/8666d522-2e6d-4b07-8868-d5fce55815a3/sm"
                      alt="Marketing Logo"
                      className="h-8 inline-block"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection