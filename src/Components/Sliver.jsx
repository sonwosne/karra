import React from "react";
import statsofkarra from "../img/statsofkarra.jpg";

const BusinessPromo = () => {
  return (
    <div className="bg-zinc-950 text-white flex justify-start items-center min-h-screen flex-col p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-10 p-4">
        Tadbirkorlar uchun biznesni kengaytirish <br />
        va <span className="text-blue-500">daromadni oshirish</span> dasturi
      </h1>
      <div className="mt-8 text-center max-w-3xl">
        <h2 className="text-xl sm:text-2xl mb-6">
          Biznesni yuksaltirish uchun kerakli dastur. Biz bilan biznesingizni rivojlantiring.
        </h2>
        <div className="flex justify-center items-center gap-4">
          <button className="text-lg font-semibold bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}>
          Qabulga yozilish
          </button>
          <button onClick={()=> document.getElementById("comments-section")?.scrollIntoView({behavior: "smooth"})} className="text-lg font-semibold bg-neutral-800 text-white py-2 px-4 rounded-full hover:bg-neutral-700 transition-colors">
            Video lavha
          </button>
        </div>
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center gap-1 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-white">4.9</span>
          </div>
        </div>
        <div>
          <button className="text-white mt-4 underline hover:text-blue-500 transition-colors" onClick={()=> document.getElementById("comments-section")?.scrollIntoView({behavior: "smooth"})}>mijozlar fikri</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full max-w-7xl items-end mb-16 mt-8">
        <div>
          <img className="rounded-3xl w-full h-full object-cover" src={statsofkarra} alt="stats" />
        </div>
        
        <div className="bg-neutral-800 py-6 sm:py-10 px-6 sm:px-8 rounded-3xl text-center flex flex-col justify-center h-64 sm:h-72">
          <h3 className="text-3xl sm:text-4xl font-semibold">50+</h3>
          <br />
          <p className="text-lg sm:text-xl">Hurmatli mijoz <br /> va hamkorlar <br /> bilan ishlaymiz</p>
        </div>

        <div className="bg-white text-black p-6 sm:p-10 rounded-3xl text-start flex flex-col justify-center h-48 sm:h-56">
          <p className="text-base">Jami loyihalar</p>
          <br />
          <h3 className="text-3xl sm:text-4xl font-semibold">235+</h3>
        </div>

        <div className="bg-lime-100 text-black p-6 sm:p-10 rounded-3xl text-center flex flex-col justify-center h-64 sm:h-72">
          <h3 className="text-3xl sm:text-4xl font-semibold">30+</h3>
          <br />
          <p className="text-lg">Yillik tajribaga <br /> ega bo'lgan mutaxasislar</p>
        </div>

        <div className="bg-blue-500 p-6 sm:p-10 rounded-3xl text-center flex flex-col justify-center h-80 sm:h-96">
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p className="text-xl sm:text-2xl flex text-start">Biznesingizni biz <br /> bilan rivojlantiring</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPromo;