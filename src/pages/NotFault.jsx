import React from 'react'

const NotFault = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
    style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1726533765829-67f0313ab064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWklMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center opacity-80">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">
            It's not your fault...
          </h2>
          <p className="mb-4 text-black">
            It's not your fault if you buy the wrong property in Dubai. You just don’t know any better—but that’s changing now.
          </p>
          <p className="mb-4 text-black">
            Most real estate investors who buy property in Dubai rely on the statements of real estate agents who, while feigning neutrality, are actually motivated by exorbitant commissions from developers to sell off-plan properties, i.e., properties still under construction. They focus on projects with 5% and sometimes even up to 10% real estate agent commission. Existing properties, which are significantly more attractive but only carry a buyer’s commission of 2%, are rarely recommended, even though they are often the better choice for you as an investor. They generate high rental income from day one.
          </p>
          <p className="mb-4 text-black">
            Many people believe that the agent acts in the best interest of investors and property buyers, but they do not realize the high commissions and incentives that really influence agents when recommending and selecting properties.
          </p>
          <p className="mb-6 font-semibold  text-black">
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