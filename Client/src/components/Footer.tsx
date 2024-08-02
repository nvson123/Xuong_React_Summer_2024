import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[440px] relative bg-black">
      {/* Footer Top Line and Copyright */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-4 opacity-40">
        <div className="w-full border-t border-white/50 opacity-50"></div>
        <div className="flex items-center gap-3 opacity-60">
          <div className="flex items-center gap-1.5">
            <div className="relative w-5 h-5">
              {/* Icon or Image can go here */}
            </div>
            <div className="text-white text-base font-normal font-poppins">
              Copyright Rimel 2022. All rights reserved
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex justify-center items-start gap-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-white text-2xl font-bold font-inter">Exclusive</div>
            <div className="text-white text-xl font-medium font-poppins">Subscribe</div>
            <div className="text-white text-base font-normal font-poppins">Get 10% off your first order</div>
          </div>
          <div className="flex items-center gap-8 border border-white rounded pl-4 py-3 w-[217px]">
            <div className="text-white opacity-40 text-base font-normal font-poppins">Enter your email</div>
            <div className="relative w-6 h-6">
              {/* Icon or Image can go here */}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-white text-xl font-medium font-poppins">Support</div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-base font-normal font-poppins">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="text-white text-base font-normal font-poppins">exclusive@gmail.com</div>
            <div className="text-white text-base font-normal font-poppins">+88015-88888-9999</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-white text-xl font-medium font-poppins">Account</div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-base font-normal font-poppins">My Account</div>
            <div className="text-white text-base font-normal font-poppins">Login / Register</div>
            <div className="text-white text-base font-normal font-poppins">Cart</div>
            <div className="text-white text-base font-normal font-poppins">Wishlist</div>
            <div className="text-white text-base font-normal font-poppins">Shop</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-white text-xl font-medium font-poppins">Quick Link</div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-base font-normal font-poppins">Privacy Policy</div>
            <div className="text-white text-base font-normal font-poppins">Terms Of Use</div>
            <div className="text-white text-base font-normal font-poppins">FAQ</div>
            <div className="text-white text-base font-normal font-poppins">Contact</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-white text-xl font-medium font-poppins">Download App</div>
          <div className="flex flex-col gap-2">
            <div className="text-white opacity-70 text-xs font-medium font-poppins">
              Save $3 with App New User Only
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-20 h-20 bg-black">
                <img
                  className="absolute w-[76px] h-[76px] top-[2px] left-[2px] border-2 border-white"
                  src="https://media.istockphoto.com/id/1095468748/vi/vec-to/m%C3%A3-qr-m%E1%BA%ABu-m%C3%A3-v%E1%BA%A1ch-hi%E1%BB%87n-%C4%91%E1%BA%A1i-vector-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng-%C4%91%E1%BB%83-qu%C3%A9t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn.jpg?s=612x612&w=0&k=20&c=nCjpoa8qW4lREJGqVCQZsWcrKGOcKKuy5RSsSVzqlL8="
                  alt="App QR Code"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative w-[110px] h-10 bg-[#030406]">
                  <img
                    className="absolute w-[104px] h-[30px] top-[5px] left-[3px] rounded border border-[#f9f9f9]"
                    src=""
                    alt="App Store"
                  />
                </div>
                <div className="relative w-[110px] h-10 bg-black">
                  <img
                    className="absolute w-[104px] h-[34px] top-[3px] left-[3px] rounded border border-white"
                    src="https://via.placeholder.com/104x34"
                    alt="Google Play"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="relative w-6 h-6">{}</div>
            <div className="relative w-6 h-6">{}</div>
            <div className="relative w-6 h-6">{}</div>
            <div className="relative w-6 h-6">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
