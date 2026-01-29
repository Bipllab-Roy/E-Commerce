import React from 'react'
import { icon_send,icon_Facebook,icon_Linkedin,icon_Twitwr,icon_instagram,qr_code,appstore,googlePlay } from '../constant/constant.ts';


const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-text pt-8 xs:pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[140px]">

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 pb-6 xs:pb-7 sm:pb-8 md:pb-10 lg:pb-12">

           {/* Subscribe */}
        <div>
          {/* <div className='w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 overflow-hidden mb-2 xs:mb-2.5 sm:mb-3 md:mb-4'>
            <img
              className="w-full h-full object-contain"
              src={exclusive}
              alt="Logo"
            />
          </div> */}

          <h2 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6'>Exclusive</h2>
          <h4 className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl font-poppins font-medium mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">Subscribe</h4>
          <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">Get 10% off your first order</p>
          <div className="relative border border-white rounded-sm w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[220px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white text-[10px] xs:text-xs sm:text-xs md:text-sm py-1.5 xs:py-2 sm:py-2 pl-2 xs:pl-2.5 sm:pl-3 pr-6 xs:pr-7 sm:pr-8 focus:outline-none w-full placeholder-gray-400"
            />
            <button className="absolute right-0 top-0 h-full px-1 xs:px-1.5 sm:px-2">
              <img className='w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5' src={icon_send} alt="icon" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Support</h3>
          <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 leading-relaxed">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          
          <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">exclusive@gmail.com</p>
          <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Account</h3>
          <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>My Account</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Login / Register</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Cart</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Wishlist</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className='hidden md:block'>
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Quick Link</h3>
          <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Privacy Policy</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Terms Of Use</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>FAQ</li>
            <li className='text-[11px] xs:text-xs sm:text-xs md:text-sm'>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
            <h3 className="text-base sm:text-lg md:text-2xl font-inter font-bold mb-4 sm:mb-5 md:mb-6">Download App</h3>
            <p className="text-[10px] sm:text-xs mb-2 sm:mb-3 md:mb-2 text-gray-400">Save $3 with App New User Only</p> 

            {/* QR Code and App Links */}
             <div className="flex gap-1 sm:gap-2 md:gap-2 mb-4">
              <div className="shrink-0">
                <img src={qr_code} alt="qr code" className="w-16 h-16 sm:w-20 sm:h-20 pt-1.5" />
              </div> 
              <div className="flex flex-col gap-0.5 sm:gap-0.5">
                <a href="#" > <img src={googlePlay} alt="playstore" className="h-8 sm:h-10" /></a>
                <a href="#" > <img src={appstore} alt="appstore" className="h-8 sm:h-10" /></a>
              </div>
            </div> 

          <div className="flex gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 mt-2 xs:mt-2.5 sm:mt-3 md:mt-4">
           <a href="#" className='hover:opacity-75 transition'> <img className='w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6' src={icon_Facebook} alt="icon" /></a>
           <a href="#" className='hover:opacity-75 transition'> <img className='w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6' src={icon_Linkedin} alt="icon" /></a>
           <a href="#" className='hover:opacity-75 transition'> <img className='w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6' src={icon_Twitwr} alt="icon" /></a>
           <a href="#" className='hover:opacity-75 transition'> <img className='w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6' src={icon_instagram} alt="icon" /></a>
          </div>
        </div>
        </div>
       
      </div>

      {/* coppyright */}

      <div className="text-center pt-2 xs:pt-2.5 sm:pt-3 md:pt-4 text-gray-500 border-t border-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm px-2 xs:px-3 sm:px-4">
      <p> &copy;  Copyright Rimel {year}. All right reserved</p>
      </div>

    </footer>
  )
}

export default Footer




