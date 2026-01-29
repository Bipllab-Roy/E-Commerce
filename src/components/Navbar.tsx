import type React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Header */}

      <div className="py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-black max-w-full text-text relative px-2 xs:px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-0">
          <div className="flex flex-col xs:flex-col sm:flex-row items-center justify-between gap-1.5 xs:gap-2 md:gap-4">
              <div className="w-12 hidden"></div>
              <p className="font-poppins text-center text-amber-50 text-[11px] flex-1 ">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span> <Link className="underline underline-offset-1 font-poppins text-[11px] font-semibold" to="/shop">Shop Now</Link></span>
              </p>
              <select className="font-space-Grotesk text-amber-50 text-[10px] bg-black border border-amber-50 px-1.5 py-0.5 rounded">
                <option className="bg-black text-amber-50" value="english">English</option>
                <option className="bg-black text-amber-50" value="bengali">Bangla</option>
              </select>
          </div>
        </div>
      </div>
     
{/* 
      <div className="py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-black max-w-full text-text relative px-2 xs:px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-0">
          <div className="flex flex-col xs:flex-col sm:flex-row items-center justify-between gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
            <div className="w-12 xs:w-14 sm:w-16 md:w-20 hidden sm:block"></div>
            <p className="font-poppins text-center text-amber-50 text-[11px] xs:text-xs sm:text-sm md:text-base flex-1">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><Link className="underline underline-offset-1 font-poppins text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold" to="/shop">Shop Now</Link></span></p>
            <select className="font-space-Grotesk text-amber-50 text-[10px] xs:text-xs sm:text-sm bg-black border border-amber-50 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded">
              <option className=' bg-black text-amber-50 ' value="english">English</option>
              <option className=' bg-black text-amber-50 ' value="bengali">Bengali</option>
            </select>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
