import React from 'react';
import success from "../img/yulduzcha_files/success.svg";
import screenshot1 from "../img/screenshot1.jpg";
import screenshot2 from "../img/Screenshot2.jpg";
import screenshot3 from "../img/screenshot3.jpg";
import screenshot4 from "../img/Screenshot4.jpg";
import screenshot5 from "../img/screenshot5.jpg";
import screenshot6 from "../img/Screenshot6.jpg";
import screenshot7 from "../img/screenshot7.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css';
import { Navigation, Keyboard, Pagination, Autoplay } from 'swiper/modules';

const Salom = () => {
    return (
        <div className='bg-black text-white min-h-screen flex-col p-4 sm:p-6 md:p-8'>
            <div id='modules-section'>
            <h1 className="text-3xl sm:text-4xl text-blue-500 font-bold text-center mt-6 sm:mt-8 p-3 mb-6 sm:mb-8">Asosiy modullar</h1>

<div className='py-4 sm:py-6 px-4 sm:px-8 md:px-12 lg:px-20 mx-auto max-w-7xl'>
    {/* 1chi */}
    <div className='bg-neutral-900 border-2 border-neutral-700 rounded-3xl px-4 sm:px-6 py-6 mb-5'>
        <h3 className='text-xl sm:text-2xl pl-3 sm:pl-5 pb-4 sm:pb-5'> <span className='text-2xl sm:text-3xl font-semibold'>01.</span>Tadbirkor psixologiyasi: ichki holatni o'zgartirish <br className="hidden sm:block" />  <br className="hidden sm:block" /> <span className='text-base sm:text-lg text-zinc-400 block mt-2 sm:mt-3'>Tadbirkorda noto'g'ri shakllangan ichki resurslardan xalos bo'lish, ichki to'siqlarni yengib o'tish va biznesining o'sishi hamda rivojlanishi uchun barqaror fikrlashni shakllantirish.</span>
        </h3>
        <div className='pl-3 sm:pl-7'><ul className='space-y-3 sm:space-y-4'><li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
            <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Bloklar bilan ishlash: o'sishga to'sqinlik qilayotgan qo'rquvlarni yengish.
        </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Qaror qabul qilishda o'ziga bo'lgan ishonchni oshirish, haqiqiy liderlikni qabul qilish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Liderlik ruhiyatini shakllantirish, tavakkalchilikni (risklarni) qabul qilish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Energiya boshqaruvini qo'lga olib, ortiqcha zo'riqishlarsiz samaradorlikni oshirish.
            </li>
        </ul>
        </div>
    </div>

    {/* 2chi */}
    <div className='bg-stone-400 border-2 border-neutral-200 text-black rounded-3xl px-4 sm:px-6 py-6 mb-5'>
        <h3 className='text-xl sm:text-2xl pl-3 sm:pl-5 pb-4 sm:pb-5'> <span className='text-2xl sm:text-3xl font-semibold'>02.</span>
            Biznes-modellar va brendlar tahlili: biznesingiz asoslarini mustahkamlash <br className="hidden sm:block" />  <br className="hidden sm:block" /> <span className='text-base sm:text-lg text-zinc-600 block mt-2 sm:mt-3'>Biznesning zaif tomonlarini aniqlab, modelni mustahkamlash va kuchli brend yaratish.</span>
        </h3>
        <div className='pl-3 sm:pl-7'><ul className='space-y-3 sm:space-y-4'><li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
            <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Hozirgi biznes-modelingiz tahlili: nima ishlayapti, qayerda biznesingiz oqsayapti.
        </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Noyob savdo taklifini (UTP) yaratish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Mijozlarni o'ziga tortadigan brend qurish va lidogeneratsiyani yo'lga qo'yish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Moliyaviy oqimni yaxshilash va xarajatlarni kamaytirish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Ishtirokchilar tajribasi: haqiqiy vaziyatlarni o'rganib, to'g'ri qarorlar qabul qilish uchun foydalanish.
            </li>
        </ul>
        </div>
    </div>

    {/* 3chi */}
    <div className='bg-neutral-900 border-2 border-neutral-700 rounded-3xl px-4 sm:px-6 py-6 mb-5'>
        <h3 className='text-xl sm:text-2xl pl-3 sm:pl-5 pb-4 sm:pb-5'> <span className='text-2xl sm:text-3xl font-semibold'>03.</span>Jamoa: odamlar orqali biznesni kuchaytirish <br className="hidden sm:block" />  <br className="hidden sm:block" /> <span className='text-base sm:text-lg text-zinc-400 block mt-2 sm:mt-3'>Kuchli jamoa tuzishni o'rganish.</span>
        </h3>
        <div className='pl-3 sm:pl-7'><ul className='space-y-3 sm:space-y-4'><li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
            <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Qanday qilib biznesingizga turtki beruvchi xodimni topish.
        </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Brendingiz atrofida ekotizim yaratish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Jamoaning doimiy rivojlanish yo'lida harakat qilishini ta'minlash uchun qanday choralar ko'rish kerak?
            </li>
        </ul>
        </div>
    </div>

    {/* 4chi */}
    <div className='bg-stone-400 border-2 border-neutral-200 text-black rounded-3xl px-4 sm:px-6 py-6 mb-5'>
        <h3 className='text-xl sm:text-2xl pl-3 sm:pl-5 pb-4 sm:pb-5'> <span className='text-2xl sm:text-3xl font-semibold'>04.</span>
            Marketing va lidogeneratsiya: qanday qilib yangi darajaga chiqish mumkin?<br className="hidden sm:block" />  <br className="hidden sm:block" /> <span className='text-base sm:text-lg text-zinc-600 block mt-2 sm:mt-3'>Yangi mijozlarni jalb qilish va mavjud mijozlarni saqlab qolish uchun marketing strategiyalarini yaratishni o'rganish, sifatli lidlar yaratish uchun yangi metodlar va vositalarni tushunish va tatbiq etish.</span>
        </h3>
        <div className='pl-3 sm:pl-7'><ul className='space-y-3 sm:space-y-4'><li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
            <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Noyob savdo taklifini (UTP) yaratish.</li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Reklama kanallarini tanlash (onlayn: ijtimoiy tarmoqlar, kontekstli reklama, SEO; oflayn: tadbirlar, tashqi reklama, PR).</li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />Maksimal natijaga erishish uchun budjetni optimallashtirish va xarajatlarni baholash.</li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className='mt-1 sm:mt-0 pr-1 sm:pr-3' />O'z biznesingiz uchun individual marketing rejasi va lidogeneratsiya tizimini ishlab chiqish.
            </li>
        </ul>
        </div>
    </div>

    {/* 5chi */}
    <div className='bg-neutral-900 border-2 border-neutral-700 rounded-3xl px-4 sm:px-6 py-6 mb-5'>
        <h3 className='text-xl sm:text-2xl pl-3 sm:pl-5 pb-4 sm:pb-5'> <span className='text-2xl sm:text-3xl font-semibold'>05.</span>Sotuv, avtomatlashtirish va motivatsiyani tizimlashtirish <br className="hidden sm:block" />  <br className="hidden sm:block" /> <span className='text-base sm:text-lg text-zinc-400 block mt-2 sm:mt-3'>Sotuv boshqaruvining asosiy tamoyillarini o'rganish va tatbiq etish, biznes jarayonlarini avtomatlashtirish va xodimlar motivatsiyasini oshirish uchun samarali tizim yaratish.</span>
        </h3>
        <div className='pl-3 sm:pl-7'><ul className='space-y-3 sm:space-y-4'><li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
            <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Sotuv bo'limining ishini baholash uchun asosiy KPI-lar.</li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Sotuv bo'limini boshqarishning asosiy tamoyillari va foydani oshirish uchun strategiyalar ishlab chiqish.</li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Ish samaradorligini oshirish va ortiqcha harakatlarni oldini olish maqsadida sotuv jarayonini avtomatlashtirish.
            </li>
            <li className='text-base sm:text-xl flex items-start sm:items-center gap-2'>
                <img src={success} alt="success-icon" className="mt-1 sm:mt-0" />Sotuv bo'limi jamoasining ish unumdorligini oshirish uchun samarali tizim ishlab chiqish va tatbiq etish.
            </li>
        </ul>
        </div>
    </div>
</div>

            </div>
            {/* fotogalareya */}
            <div id='photogallery-section' className="mt-8 sm:mt-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left sm:ml-12 md:ml-24 p-3 mb-5">Fotogalareya</h1>

                <div className="px-4 sm:px-8">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        keyboard={{
                            enabled: true,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay, Keyboard, Navigation]}
                        className="mySwiper h-[300px] sm:h-[350px] md:h-[400px]"
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {[
                            { img: screenshot1 },
                            { img: screenshot2 },
                            { img: screenshot3 },
                            { img: screenshot4 },
                            { img: screenshot5 },
                            { img: screenshot6 },
                            { img: screenshot7 }
                        ].map((slide, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <img src={slide.img} alt={slide.title} className="h-full w-full object-cover rounded-xl sm:rounded-2xl" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Salom;