import React, { useState } from 'react';
import mail from "../img/mail.svg"
import telephonem from "../img/yulduzcha_files/telephonem.svg"
import location from "../img/yulduzcha_files/location.svg"
import date from "../img/yulduzcha_files/date.svg"

const Re = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className='bg-black text-white min-h-screen flex-col p-4 sm:p-6 md:p-8'>
      {/* form */}
      <div id="registration-form" className='bg-neutral-900 border-2 border-neutral-700 rounded-3xl px-4 sm:px-6 md:px-8 py-6 mb-8 sm:mb-10 md:mb-12 mt-12 sm:mt-16 md:mt-20 mx-auto max-w-7xl flex flex-col lg:flex-row'>
        <div className='my-8 sm:my-12 md:my-16 lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl text-left mt-4 sm:mt-6 md:mt-8 p-3 mb-6 sm:mb-8'>Qabulga yozilish uchun <br /> anketani to'ldiring</h1>

            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 ml-4 sm:ml-6 md:ml-8'>
                <li className='text-base sm:text-lg md:text-xl flex gap-2 pb-4'>
                    <img src={mail} alt="mail-icon" className='w-6 h-6 sm:w-8 sm:h-8 pr-2 sm:pr-3' />
                    <h3>E-pochta <br />
                        <span className='text-sm sm:text-base text-zinc-400'>info@karraosish.com</span>
                    </h3>
                </li>

                <li className='text-base sm:text-lg md:text-xl flex gap-2 pb-4'>
                    <img src={telephonem} alt="tel-icon" className='w-6 h-6 sm:w-8 sm:h-8 pr-2 sm:pr-3' />
                    <h3>Telefon raqam <br />
                        <span className='text-sm sm:text-base text-zinc-400'>+998 (99) 888-77-66</span>
                    </h3>
                </li>

                <li className='text-base sm:text-lg md:text-xl flex gap-2 pb-4'>
                    <img src={location} alt="location-icon" className='w-6 h-6 sm:w-8 sm:h-8 pr-2 sm:pr-3' />
                    <h3>Manzil <br />
                        <span className='text-sm sm:text-base text-zinc-400'>Toshkent shahar, Chilonzor</span>
                    </h3>
                </li>

                <li className='text-base sm:text-lg md:text-xl flex gap-2 pb-4'>
                    <img src={date} alt="date-icon" className='w-6 h-6 sm:w-8 sm:h-8 pr-2 sm:pr-3' />
                    <h3>Ish vaqti <br />
                        <span className='text-sm sm:text-base text-zinc-400'>Du-Sha, 9:00 dan 18:00 gacha</span>
                    </h3>
                </li>
            </ul>
        </div>

        <div className='bg-neutral-800 rounded-3xl p-4 sm:p-6 md:p-8 lg:ml-6 lg:w-1/2 mt-6 lg:mt-0'>
            <h2 className='text-xl sm:text-2xl md:text-3xl flex items-center gap-2 pb-4 sm:pb-6 md:pb-7 lg:pr-0 xl:pr-72'>So'rov yuborish</h2>
            <form action="/submit" method='post'>
                <label htmlFor="name" className='text-sm sm:text-base'>Ismingiz*</label> <br />
                <input className='bg-neutral-600 rounded-md mt-1 sm:mt-2 w-full p-2 text-sm sm:text-base' type="text" id='name' name='name' required /> <br />

                <label htmlFor="phone" className='text-sm sm:text-base'>Telefon raqamingiz*</label> <br />
                <input 
                  className='bg-neutral-600 rounded-md mt-1 sm:mt-2 w-full p-2 text-sm sm:text-base' 
                  type="text" 
                  id='phone' 
                  name='phone' 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  required 
                /> <br />

                <label htmlFor="option" className='text-sm sm:text-base'>Variantlardan birini tanlang*</label> <br />
                <select className='bg-neutral-600 rounded-md mt-1 sm:mt-2 w-full p-2 mb-2 text-sm sm:text-base' id='option' name='option' required>
                    <option value="">Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.</option>
                    <option value="option1">Dastur haqida bilaman, lekin savollarim bor.</option>
                    <option value="option2">Dasturni o'rganib chiqdim, to'lov qilishga tayyorman.</option>
                </select> <br />

                <button type='submit' className='bg-blue-500 px-4 sm:px-6 md:px-8 lg:px-28 py-2 rounded-3xl mt-2 sm:mt-3 md:mt-4 w-full text-sm sm:text-base'>Yuborish</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Re