import React from 'react';
import { Mail, Phone, MapPin, Building2, Landmark } from 'lucide-react';

const images = [
  '/office1.png', '/office2.png', '/office3.png',
  '/office4.png', '/office5.png', '/office6.png'
];

const Details = () => {
  return (
    <div className="w-full bg-cover bg-center text-white py-16 px-4" style={{ backgroundImage: "url('/office6.png')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Office ${idx + 1}`} className="rounded-md object-cover" />
          ))}
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Location in the Heart of Dubai</h2>
          <p className="text-sm mb-8 leading-relaxed max-w-lg">
            Our office is located in the exclusive area of Emaar Square, Building 6, 7th floor,
            next to PwC and HSBC Bank. Perfectly located in Downtown, right near Dubai Mall and the Burj Khalifa.
            Paid parking is available for visitors directly in front of the building.
          </p>

          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1" />
              <p>
                <strong>Address:</strong><br />
                Level 702, Emaar Square, Building 6, Burj Khalifa Community, P.O. Box 122347, Dubai, UAE
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 mt-1" />
              <p>
                <strong>Email:</strong><br />
                service@dubai-finanz.de
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 mt-1" />
              <p>
                <strong>Phone:</strong><br />
                +971 (0) 4269 1997
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Building2 className="w-5 h-5 mt-1" />
              <p>Bank branch in Dubai</p>
            </div>

            <div className="flex items-start space-x-4">
              <Landmark className="w-5 h-5 mt-1" />
              <p>5 minutes from Dubai Mall</p>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1" />
              <p>Emaar Square</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
