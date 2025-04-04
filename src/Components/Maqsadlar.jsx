import React from 'react';

const Maqsadlar = () => {
  return (
    <div className="bg-zinc-900 text-white flex justify-start items-center min-h-screen flex-col px-4 sm:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-8 p-3 mb-6 sm:mb-8">Maqsadlar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl items-end mb-8 sm:mb-10">
        {[ 
          { id: 1, text: "Tizimli ravishda raqobatchilardan ustunlikka erishish.", image: "./src/img/advantage.jpg" },
          { id: 2, text: "Biznesni tizimlashtirish: xodimlarni ishga olish, sotuv, marketing.", bg: "bg-blue-500" },
          { id: 3, text: "Qanday qilib jamoani samarali boshqarish va eng kuchli jamoani yig'ish.", image: "./src/img/meeting.webp" },
          { id: 4, text: "O'zingiz uchun shaxsiy vaqt ajratish va operatsion tizimdan chiqish.", bg: "bg-lime-100 text-black" },
          { id: 5, text: "O'sish nuqtasini topib, sof foydani oshirish.", image: "./src/img/growth.jpg" },
          { id: 6, text: "Mijozlar oqimini bir necha barobar oshirish.", bg: "bg-gray-800" }
        ].map(({ id, text, image, bg }) => (
          <div
            key={id}
            style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
            className={`${bg || ""} relative text-white p-6 rounded-2xl text-start flex flex-col justify-center h-56 sm:h-64 md:h-72 overflow-hidden shadow-lg transition-transform transform hover:scale-105`}
          >
            {image && <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>}
            <h3 className={`relative z-10 text-lg sm:text-xl font-semibold leading-tight ${id === 4 ? 'text-black' : ''}`}>{id}. {text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maqsadlar;
