import React from 'react';
import { Mail, Phone, MapPin, Building2, Landmark } from 'lucide-react';

const images = [
  '/office1.jfif', '/office2.jfif', '/office3.jfif',
  '/office4.jfif', '/office5.jfif', '/office6.png'
];

const Details = () => {
  return (
    <div className="relative w-full text-white">
      {/* Background image and overlay */}
      <div 
        className="absolute inset-0 bg-center z-0"
        style={{ backgroundImage: "url('/office6.jpg')", backgroundSize: "100% 100%" }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white py-16 px-4">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Office ${idx + 1}`} className="rounded-md object-cover" />
          ))}
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 font-serif">Our Location in the Heart of Dubai</h2>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-lg [font-family:'Quicksand',sans-serif]">
            Our office is located in Sheikh Zayed Road, Aspin Commercial Tower, Dubai.
            Perfectly located in Downtown, right near Dubai Mall and the Burj Khalifa.
            Paid parking is available for visitors directly in front of the building.
          </p>

          <div className="space-y-6 text-lg font-bold">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>
                <strong>Address:</strong><br />
                Aspin Commercial Tower, Sheikh Zayed Road, Dubai, UAE
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>
                <strong>Email:</strong><br />
                service@dubai-finanz.de
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>
                <strong>Phone:</strong><br />
                +971 (0) 4269 1997
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Building2 className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>Bank branch in Dubai</p>
            </div>
            <div className="flex items-start space-x-4">
              <Landmark className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>5 minutes from Dubai Mall</p>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1" />
              <p className='[font-family:"Quicksand",sans-serif]'>Emaar Square</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
