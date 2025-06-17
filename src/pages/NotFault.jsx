import React from 'react'

const NotFault = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
    style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560811229-5c3266d7a363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGR1YmFpJTIwNGslMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center opacity-80">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl  mb-6 text-white font-extrabold">
            It's not your fault...
          </h2>
          <p className="mb-4 text-white  font-extrabold">
            It's not your fault if you buy the wrong property in Dubai. You just don’t know any better—but that’s changing now.
          </p>
          <p className="mb-4 text-white  font-extrabold">
            Most real estate investors who buy property in Dubai rely on the statements of real estate agents who, while feigning neutrality, are actually motivated by exorbitant commissions from developers to sell off-plan properties, i.e., properties still under construction. They focus on projects with 5% and sometimes even up to 10% real estate agent commission. Existing properties, which are significantly more attractive but only carry a buyer’s commission of 2%, are rarely recommended, even though they are often the better choice for you as an investor. They generate high rental income from day one.
          </p>
          <p className="mb-4 text-white  font-extrabold">
            Many people believe that the agent acts in the best interest of investors and property buyers, but they do not realize the high commissions and incentives that really influence agents when recommending and selecting properties.
          </p>
          <p className="mb-6   text-white  font-extrabold">
            If you are looking for a solution, a partner who represents only your interests and supports you in buying the right property in Dubai, then you have come to the right place!
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-[#152e52] px-6 py-3 rounded font-semibold shadow transition">
            Book your free initial consultation now
            <p className="text-xs font-normal text-[#152e52]">
              free of charge and by phone – choose an appointment
            </p>
          </button>
        </div>


      </div>
    </section>

  )
}

export default NotFault