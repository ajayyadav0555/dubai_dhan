import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './pages/HeroSection.jsx'
import Expertice from './pages/Expertice.jsx'
import NotFault from './pages/NotFault.jsx'
import Comparison from './pages/Comparison.jsx'
import ScrollDSection from './pages/ScrollDSection.jsx'
import Strategy from './pages/Strategy.jsx'
import Strategy2 from './pages/Strategy2.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Details from './pages/Details.jsx'
import Footer from './pages/Footer.jsx'
import ScrollAnimation from './pages/ScrollAnimation.jsx'
import FounderSection from './pages/FounderSection.jsx'
import AvailablitySection from './pages/AvailablitySection.jsx'
import ApproachSection from './pages/ApproachSection.jsx'
import FeatureSection from './pages/Fearures.jsx'


const stepsData = [
  {
    stepNumber: 1,
    title: 'Investment Strategy Consultation',
    description:
      'We start by understanding your financial goals, budget, and risk tolerance. In a personalized session, we map out a strategy that could include real estate, business investment, or diversified financial products.',
    image: 'image1.jpg',
  },
  {
    stepNumber: 2,
    title: 'Financial Planning & Capital Structuring',
    description:
      'Based on your profile, we create a tailored financial plan—balancing cash flow, return expectations, and tax efficiency. We structure capital intelligently, using both equity and financing options to grow your wealth.',
    image: 'image2.jpg',
  },
  {
    stepNumber: 3,
    title: 'Opportunity Sourcing & Market Research',
    description:
      'We analyze multiple sectors—real estate, business, and financial markets—using live data and trend analytics to identify high-return, low-risk investment opportunities tailored to your interests.',

    image: 'image3.jpg',
  },
  {
    stepNumber: 4,
    title: 'Negotiation & Execution',
    description:
      'Our team negotiates with sellers, developers, or business owners on your behalf. We ensure every agreement is in your favor and aligned with your strategic goals—right through to the final signature.',
    image: 'image4.jpg',
  },
  {
    stepNumber: 5,
    title: 'Asset Management & Growth Monitoring',
    description:
      'Post-investment, we actively manage your portfolio—whether real estate, business, or mixed assets. We track performance, reinvest profits, and advise on rebalancing to ensure continued growth.',
    image: 'image5.jpg',
  },
];


const App = () => {
  return (
    <div className=''><Navbar />
      <HeroSection />
      {/* <Expertice /> */}
      <NotFault />
      <Comparison />
      <ScrollDSection />
      {/* <Strategy step={stepsData[0]} />
      <Strategy2 step={stepsData[1]} />
      <Strategy step={stepsData[2]} />
      <Strategy2 step={stepsData[3]} />
      <Strategy step={stepsData[4]} /> */}
      <ScrollAnimation/>
      <FounderSection/>
      <AvailablitySection/>
      <ApproachSection/>
      <FeatureSection/>
      <CaseStudy />
      <Details/>
      <Footer/>


    </div>
  )
}

export default App