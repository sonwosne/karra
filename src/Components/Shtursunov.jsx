import React from 'react';
import tursunov from "../img/yulduzcha_files/sherzod-tursunov.png";

const Shtursunov = () => {
  return (
    <div className='bg-black p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center'>
      <div className='w-full lg:w-auto mb-4 sm:mb-6 md:mb-0 flex justify-center'>
        <img 
          src={tursunov} 
          alt="Sherzod Tursunov" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none md:p-4 lg:p-8 xl:p-12 rounded-lg" 
        />
      </div>

      <div className='w-full lg:w-[50%] xl:ml-12 2xl:ml-24 space-y-4 sm:space-y-6'>
        {/* First card */}
        <div className="bg-blue-500 text-white rounded-2xl p-4 sm:p-5 md:p-6">
          <h1 className="text-blue-200 text-sm sm:text-base md:text-lg">
            <span className="block text-lg sm:text-xl md:text-2xl text-white font-bold mb-2 sm:mb-3">
              "Eurodesign" asoschisi
            </span>
            <span className="block sm:inline">
              270 million AQSh dollaridan ortiq aylanmaga ega bo'lgan kompaniya.
            </span>
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">
              Rossiyada o'z sohasida yetakchi uchlikka kiradi.
            </span>
          </h1>
        </div>
        
        {/* Second card */}
        <div className="bg-neutral-900 text-white rounded-2xl p-4 sm:p-5 md:p-6">
          <h1 className="text-sm sm:text-base md:text-lg">
            <span className='block text-lg sm:text-xl md:text-2xl text-white font-bold mb-2 sm:mb-3'>
              "Wilgood" - aqlli avtoservislar tarmog'ini noldan boshlab yaratgan
            </span>
            <span className="block">
              Kompaniyaning yillik aylanmasi 1,8 milliard rublga yetgan.
            </span>
            <span className="block">
              2017-yilda Rossiya "Forbes" jurnalining "Yilning eng yaxshi
            </span>
            <span className="block">
              franshizasi" reytingida kuchli uchlikdan joy olgan.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Shtursunov;