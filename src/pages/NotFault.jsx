import React from 'react'

const NotFault = () => {
  return (
    <section className="relative text-white py-16 px-6 bg-gradient-to-r from-[#030B20] to-[#041330]"
    //  bg-cover bg-center bg-no-repeat
    // style={{
    //     backgroundImage: "url('https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg')",
    //   }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Text Content */}
        <div className='relative'>
          <h2 className="text-2xl md:text-3xl  mb-6 text-white font-extrabold font-serif">
            It's not your fault...
          </h2>
          <p className="mb-4 text-white  font-extrabold [font-family:'Quicksand',sans-serif]">
            It's not your fault if you buy the wrong property in Dubai. You just don’t know any better—but that’s changing now.
          </p>
          <p className="mb-4 text-white  font-bold [font-family:'Quicksand',sans-serif]">
            Most real estate investors who buy property in Dubai rely on the statements of real estate agents who, while feigning neutrality, are actually motivated by exorbitant commissions from developers to sell off-plan properties, i.e., properties still under construction. They focus on projects with 5% and sometimes even up to 10% real estate agent commission. Existing properties, which are significantly more attractive but only carry a buyer’s commission of 2%, are rarely recommended, even though they are often the better choice for you as an investor. They generate high rental income from day one.
          </p>
          <p className="mb-4 text-white  font-bold [font-family:'Quicksand',sans-serif]">
            Many people believe that the agent acts in the best interest of investors and property buyers, but they do not realize the high commissions and incentives that really influence agents when recommending and selecting properties.
          </p>
          <p className="mb-6   text-white  font-bold [font-family:'Quicksand',sans-serif]">
            If you are looking for a solution, a partner who represents only your interests and supports you in buying the right property in Dubai, then you have come to the right place!
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition">
            Book your free initial consultation now
            <p className="text-xs font-normal text-[#152e52]">
              free of charge and by phone – choose an appointment
            </p>
          </button>
        </div>
        <div className=' bg-cover bg-center bg-no-repeat max-sm:absolute' style={{
          backgroundImage: "url('man3.png')",
          backgroundSize: "100% 100%",
         

        }}>

        </div>

      </div>
    </section>

  )
}

export default NotFault