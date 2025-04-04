import React from "react";
import sherzodboynirasmi from "../img/sherzodboynirasmi.png";
import barnapam from "../img/barnapam.png";
import bekzodaka from "../img/bekzodaka.png";
import shirinopa from "../img/shirinopa.png";

const ContactForm = () => {
  return (
    <div className="bg-zinc-900 text-white flex justify-start items-center min-h-screen flex-col p-4 md:p-8">
      <div className="mb-8 text-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold mt-4 md:mt-8 p-3">Asoschilar</h1>
        <h2 className="text-xl md:text-2xl mb-6">Karra o'sish asosiy asoschilari</h2>
      </div>

      {/* Asoschilar */}
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:hidden gap-6">
          <div>
            <img 
              src={sherzodboynirasmi} 
              alt="Sherzod Tursunov" 
              className="w-full h-auto rounded-3xl md:rounded-[50px] shadow-lg" 
            />
          </div>
          <div>
            <img 
              src={barnapam} 
              alt="Barno Tursunova" 
              className="w-full h-auto rounded-3xl shadow-lg" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={bekzodaka} 
              alt="Bekzod Komilov" 
              className="w-full h-auto rounded-2xl shadow-md" 
            />
            <img 
              src={shirinopa} 
              alt="Shirin Komilova" 
              className="w-full h-auto rounded-2xl shadow-md" 
            />
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Sherzod Tursunov */}
          <div className="h-full">
            <img 
              src={sherzodboynirasmi} 
              alt="Sherzod Tursunov" 
              className="w-full h-full object-cover rounded-[50px] shadow-xl" 
            />
          </div>

          {/* Barno Tursunova va boshqalar */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Barno */}
            <div className="flex-1">
              <img 
                src={barnapam} 
                alt="Barno Tursunova" 
                className="w-full h-full object-cover rounded-3xl shadow-lg" 
              />
            </div>

            {/* Bekzod va Shirin */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <img 
                src={bekzodaka} 
                alt="Bekzod Komilov" 
                className="w-full h-full object-cover rounded-2xl shadow-md" 
              />
              <img 
                src={shirinopa} 
                alt="Shirin Komilova" 
                className="w-full h-full object-cover rounded-2xl shadow-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;