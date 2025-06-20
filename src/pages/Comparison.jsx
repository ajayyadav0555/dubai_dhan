import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const itemsWithout = [
  {
    label: 'Investing in off-plan property developer projects',
    description: 'Off-plan projects carry risks related to delays, lack of transparency, and quality control.'
  },
  {
    label: 'No access to external capital for leverage',
    description: 'Without financing options, you rely solely on your own funds, limiting your investment potential.'
  },
  {
    label: 'Excessive property purchase price',
    description: 'Overpaying for property reduces ROI and increases risk in resale or rental yield.'
  },
  {
    label: 'No own bank account',
    description: 'Without a local bank account, managing income and payments becomes inefficient and risky.'
  },
  {
    label: 'Buying bad developers and projects',
    description: 'Investing in unproven developers can lead to incomplete or poorly managed properties.'
  },
  {
    label: 'Promised return not achievable',
    description: 'Unrealistic return projections often mislead investors and create financial shortfalls.'
  },
  {
    label: 'Unfavourable purchase agreement (Form-F)',
    description: 'A poorly structured agreement leaves you vulnerable with limited rights or exit options.'
  },
  {
    label: 'Purchase without calculation',
    description: 'Buying without a solid financial plan increases chances of loss and mismanagement.'
  },
  {
    label: 'Buying commission–driven brokers',
    description: 'Brokers focused only on commissions may not prioritize your long-term investment goals.'
  },
  {
    label: 'Vacancy due to incorrect rental concept',
    description: 'Lack of proper rental planning leads to longer vacancy periods and lost income.'
  }
];


const itemsWith = [
  {
    label: 'Investing in existing properties',
    description: 'Existing properties provide immediate income, clearer market value, and less risk.'
  },
  {
    label: 'Real estate financing with local banks',
    description: 'Access to local financing gives leverage, increasing returns on your investment.'
  },
  {
    label: 'Independent alternative offers',
    description: 'Comparing offers from various sources ensures better deals and lower risk.'
  },
  {
    label: 'Opening your own bank account in Dubai',
    description: 'A local bank account improves transparency and ease of handling financial matters.'
  },
  {
    label: 'Only sustainable real estate investments',
    description: 'Focus on long-term value ensures your investment remains profitable and resilient.'
  },
  {
    label: 'Realistic investment approach',
    description: 'Our strategies are grounded in data and experience, not empty promises.'
  },
  {
    label: 'Draft purchase contracts with withdrawal rights',
    description: 'Legal flexibility provides you with an exit strategy if the terms change unexpectedly.'
  },
  {
    label: 'In-depth analysis of the investment',
    description: 'Comprehensive due diligence helps avoid bad deals and ensures stable returns.'
  },
  {
    label: 'Independent and honest investment advice',
    description: 'We prioritize your financial goals over commissions or sales pressure.'
  },
  {
    label: 'Sustainable rental concept',
    description: 'A well-planned rental strategy minimizes vacancy and maximizes long-term income.'
  }
];


const AccordionItem = ({ icon, label, description, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-3 transition-all duration-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="flex items-center gap-3 text-normal font-bold text-[#152e52] [font-family:'Quicksand',sans-serif]">
          {icon}
          <span>{label}</span>
        </span>
        <span className="text-gray-400 text-lg [font-family:'Quicksand',sans-serif] font-bold">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {isOpen && (
        <div className="pl-8 pr-2 pt-2 text-sm text-gray-500 animate-fade-in">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};



const Comparison = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index)); 
  };

  return (
    <section className="bg-[#1e3254] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase text-xs tracking-widest mb-2 [font-family:'Quicksand',sans-serif]">A Comparison</p>
        <h2 className="text-3xl font-semibold mb-4 font-serif">
          That's why we are the right partner for you
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-300 text-sm md:text-base [font-family:'Quicksand',sans-serif]">
          Our many years of experience and in-depth market knowledge in Dubai make us your ideal partner for real estate investments. We not only offer you sound advice, but also accompany you through every step of the process with a clear focus on your success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without Card */}
          <div className="bg-white rounded-lg p-6 text-[#152e52] shadow-md">
            <h3 className="text-lg font-semibold mb-6">
              Buying property <span className="text-red-600 font-bold">without</span> Dubai Finance
            </h3>
            {itemsWithout.map((item, index) => (
              <AccordionItem
                key={index}
                label={item.label}
                description={item.description}
                icon={<FaTimesCircle className="text-red-600 w-7 h-7" />}
                  isOpen={openIndex === `without-${index}`}
                onToggle={() => handleToggle(`without-${index}`)}
              />
            ))}
          </div>


          <div className="bg-blue-100 rounded-lg p-6 text-[#152e52] shadow-md">
            <h3 className="text-lg font-semibold mb-6">
              Buying property <span className="text-green-600 font-bold">with</span> Dubai Finance
            </h3>
            {itemsWith.map((item, index) => (
              <AccordionItem
                key={index}
                label={item.label}
                description={item.description}
                icon={<FaCheckCircle className="text-green-600 w-7 h-7" />}
                 isOpen={openIndex === `with-${index}`}
                onToggle={() => handleToggle(`with-${index}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
