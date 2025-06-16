import React from 'react';
import { ImCross } from "react-icons/im";
import { GoGoal } from "react-icons/go";
import { TbBulb } from "react-icons/tb";

const CaseStudy = () => {
    return (
        <section className="bg-[#e6f0ff] py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-[#01142e] text-white text-xs font-semibold px-4 py-2 rounded tracking-wide">
                        REVIEWS
                    </span>
                    <h2 className="text-3xl font-bold mt-8 text-[#01142e]">Case studies from our investors</h2>
                    <p className="text-gray-600 text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                        Find out what results our investors achieved after choosing to work with us.
                    </p>
                </div>

                {/* Case Card */}
                <div className="grid md:grid-cols-2 bg-[#2560b3] rounded-xl shadow-md overflow-hidden">
                    {/* Video + Profile */}
                    <div className="p-6 flex flex-col justify-between">
                        <video
                            className="w-full max-w-md mx-auto rounded-md shadow-md"
                            controls
                        >
                            <source src="/video.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Profile */}
                        <div className="flex items-center text-white mt-6">
                            <img
                                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60"
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                                alt="Martin Krygier"
                            />
                            <div>
                                <div className="flex text-yellow-400 text-lg mb-1">
                                    {'★★★★★'.split('').map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p className="font-semibold">Martin Krygier</p>
                                <p className="text-sm text-gray-300">Entrepreneur</p>
                            </div>
                        </div>
                    </div>

                    {/* Problem, Goal, Solution */}
                    <div className="p-6 md:p-8 flex flex-col justify-center gap-6 text-white">
                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><ImCross /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Problem</p>
                                <p className="text-sm leading-relaxed">
                                    As an experienced real estate investor in Germany, Martin Krygier wanted to purchase his first property in Dubai. He was unclear about the local market details and financing options, so he was looking for a partner who could provide him with a complete solution.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><GoGoal /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Goal</p>
                                <p className="text-sm leading-relaxed">
                                    With the help of local financing from banks in Dubai and the right choice of property, you can master your first property purchase in Dubai. You'll also have a long-term partner who will take care of cashing rent checks and managing the property.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><TbBulb /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Solution</p>
                                <p className="text-sm leading-relaxed">
                                    We financed 60% of the purchase price of his property with a local bank in Dubai within three weeks. We handled all correspondence with the financing bank, from the loan application to the notary and check issuance. We advised on the property search and are providing long-term property management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                {/* Header */}
              

                {/* Case Card */}
                <div className="grid md:grid-cols-2 bg-[#2560b3] rounded-xl shadow-md overflow-hidden">
                    {/* Video + Profile */}
                  

                    {/* Problem, Goal, Solution */}
                    <div className="p-6 md:p-8 flex flex-col justify-center gap-6 text-white">
                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><ImCross /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Problem</p>
                                <p className="text-sm leading-relaxed">
                                    As an experienced real estate investor in Germany, Martin Krygier wanted to purchase his first property in Dubai. He was unclear about the local market details and financing options, so he was looking for a partner who could provide him with a complete solution.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><GoGoal /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Goal</p>
                                <p className="text-sm leading-relaxed">
                                    With the help of local financing from banks in Dubai and the right choice of property, you can master your first property purchase in Dubai. You'll also have a long-term partner who will take care of cashing rent checks and managing the property.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-xl mt-1 shrink-0"><TbBulb /></div>
                            <div>
                                <p className="text-xl font-bold mb-1">Solution</p>
                                <p className="text-sm leading-relaxed">
                                    We financed 60% of the purchase price of his property with a local bank in Dubai within three weeks. We handled all correspondence with the financing bank, from the loan application to the notary and check issuance. We advised on the property search and are providing long-term property management.
                                </p>
                            </div>
                        </div>
                    </div>


                      <div className="p-6 flex flex-col justify-between">
                        <video
                            className="w-full max-w-md mx-auto rounded-md shadow-md"
                            controls
                        >
                            <source src="/video.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Profile */}
                        <div className="flex items-center text-white mt-6 md:ml-20">
                            <img
                                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60"
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                                alt="Martin Krygier"
                            />
                            <div>
                                <div className="flex text-yellow-400 text-lg mb-1">
                                    {'★★★★★'.split('').map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p className="font-semibold">Eric Promm</p>
                                <p className="text-sm text-gray-300">Real estate investor & coach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
