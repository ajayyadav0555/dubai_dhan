



const ScrollDSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm rounded-md font-semibold tracking-wide text-[#152e52] uppercase bg-blue-100 px-2 py-1 [font-family:'Quicksand',sans-serif]">
            The Dubai Financial System
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152e52] mt-2 font-serif">
            Our investment strategy for your <br /> success in Dubai
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={'/D1.png'}
              alt="Investment Strategy Steps"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#152e52] mb-4 [font-family:'Quicksand',sans-serif]">
              The Dubai Finance Investment Strategy
            </h3>
            <p className="text-gray-400 text-normal leading-relaxed mb-4 [font-family:'Quicksand',sans-serif]">
              Our proprietary 7-step process ensures that your investment in Dubai combines the most
              important building blocks of an investment strategy. We implement each step with our
              own staff, ensuring success. Together, we build on the foundation and your strategy,
              leverage debt capital in the form of real estate financing in Dubai, and, in a
              multi-step process, identify the ideal existing property that perfectly matches your
              requirements and wishes. We accompany and negotiate every step up to leasing and
              manage your real estate portfolio long-term.
            </p>
            <p className="text-gray-400 text-normal leading-relaxed">
              You can focus on your daily tasks as an entrepreneur, investor, or executive and
              relax. We manage your property in Dubai as if it were our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollDSection;
