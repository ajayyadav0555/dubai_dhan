import React from 'react';
import { Youtube, Instagram, Music } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white px-6 py-12 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                {/* Column 1: Logo & Description */}
                <div>
                    <img src="/newlogo.jpeg" alt="Dubai Finanz" className="h-10 rounded mb-4 w-30" />
                    <p className="font-semibold mb-2">
                        Successfully invest in Dubai real estate – without off-plan
                    </p>
                    <h4 className="font-bold mt-4">ISO 9001:2015 certified</h4>
                    <div className="flex items-center gap-4 my-3">
                        <img src="/iso.png" alt="ISO Cert" className="h-10" />
                        {/* <img src="/uaf.png" alt="UAF" className="h-10" /> */}
                    </div>
                    <p className="text-gray-400">
                        Dubai Finance is an offering of Welldomo Mortgage Broker LLC and Welldomo Valuation
                        Real Estate LLC – both ISO 9001:2015 certified, audited and verified by the United Accreditation Foundation (UAF).
                        This certification stands for the highest quality standards, transparent processes and continuous improvement of our
                        services – particularly in consulting, real estate financing, and valuation.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#"><Youtube className="bg-red-600 text-white p-1 rounded-full w-8 h-8" /></a>
                        <a href="#"><Instagram className="bg-pink-500 text-white p-1 rounded-full w-8 h-8" /></a>
                        <a href="#"><Music className="bg-black text-white p-1 rounded-full w-8 h-8" /></a>
                    </div>
                </div>

                {/* Column 2: Pursue */}
                <div>
                    <h4 className="font-bold mb-4">Pursue</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Referral Program</a></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div>
                    <h4 className="font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#">Imprint</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="font-bold mb-4">Contact</h4>
                    <p className="text-sm font-bold mb-2">
                        Dubai Dhan is an offer of: Welldomo Mortgage Broker LLC<br />
                        Welldomo Valuation Real Estate LLC
                    </p>
                    <p className="mb-4 text-gray-300">
                       Aspin Commercial Tower, Sheikh Zayed Road, Dubai, UAE
                    </p>
                    {/* <div className="flex items-center mb-3">
                        <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60" alt="Eugen Zimbelmann" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-medium">Eugen Zimbelmann</p>
                            <p className="text-gray-400 text-xs">Founder & Senior Investment Advisor</p>
                        </div>
                    </div> */}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded mt-2 text-sm w-full">
                        Book your free initial consultation now<br />
                        <span className="text-xs font-normal">Free of charge and by phone – choose an appointment</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
