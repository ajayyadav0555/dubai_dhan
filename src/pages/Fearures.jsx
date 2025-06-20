import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaCoins, FaHome } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';

const RealEstateFeatures = () => {
  const data = [
    {
      icon: <AiOutlineInfoCircle className="text-[#1A3154] text-2xl shrink-0 mt-1" />,
      title: 'The dangers of Dubai real estate',
      content:
        'Many real estate agents only have their own interests in mind. They want to force restrictive contracts on you and sell you junk properties or so-called off-plan properties – projects that won’t be completed for another three or four years.',
      highlight: 'The result: total confusion and a feeling of insecurity.',
    },
   
    {
      icon: <FaHome className="text-[#1A3154] text-2xl shrink-0 mt-1" />,
      title: 'Use debt to achieve more',
      content:
        'You know that debt is an important component of real estate investments. It leverages your equity and can double your return on equity. You want to benefit from the attractive terms of real estate financing in Dubai.\n\nWe are the largest German-speaking real estate financier and verifiably approve millions of loans every week. As an RERA-approved financing broker, we work with all local banks in Dubai.',
      highlight:
        'Your advantage: Local financing in Dubai at the best conditions.',
    },
     {
      icon: <FaCoins className="text-[#1A3154] text-2xl shrink-0 mt-1" />,
      title: 'What you really want: security and returns',
      content:
        'You want to invest your assets safely in Dubai and at the same time achieve the highest possible return.\n\nYou want to... generate immediate rental income ... benefit from the city’s growth and rising property prices ... generate high ongoing rental returns ... diversify your assets in Dubai for the long term ... rent out your property stress-free – at the best conditions.',
      highlight:
        'Your goal: Invest safely, with rental income covering the debt service and, depending on the investment, generating positive cash flow.',
    },
    {
      icon: <BsEmojiSmile className="text-[#1A3154] text-2xl shrink-0 mt-1" />,
      title: 'Stress-free real estate investments',
      content:
        'You’re an entrepreneur, investor, or executive and want to focus on your core business. That’s why you’re looking for a reliable partner who can take care of everything – from selecting the right property to managing operational tasks.',
      highlight:
        'Your advantage: We are your local partner and take care of your investment from start to finish. From purchase through leasing and management, to sale. Everything from a single source.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6 border-b border-gray-200 pb-6">
            <div className="flex gap-4 items-start">
              {item.icon}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#1A3154] font-semibold text-xl font-serif">{item.title}</h3>
                <p className=" text-base text-gray-600 whitespace-pre-line leading-relaxed font-semibold [font-family:'Quicksand',sans-serif]">
                  {item.content}
                </p>
                <p className="text-base font-bold text-gray-600 ">{item.highlight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateFeatures;
