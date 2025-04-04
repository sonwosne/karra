import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import Layer from "../img/layer.svg";
import Bull from "../img/bull.svg";
import Nishon from "../img/nishon.svg";
import Nimadir from "../img/nimadir.svg";
import ObjectImg from "../img/object.svg";
import books from "../img/yulduzcha_files/books.png";
import bull from "../img/yulduzcha_files/bull.png";
import handshake from "../img/yulduzcha_files/handshake.png";
import megaphone from "../img/yulduzcha_files/megaphone.png";
import money from "../img/yulduzcha_files/money.png";

const SwiperCarousel = () => {
    return (
        <div className='bg-black text-white p-4 sm:p-8'>
            <div className='text-2xl sm:text-4xl font-bold my-8 text-left sm:pl-28 py-4'>
                <h1>Dastur kimlar uchun?</h1>
            </div>

            <div className='sm:px-28 pb-8'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Keyboard, Navigation]}
                    className="mySwiper h-full"
                >
                    {[
                        { img: Layer, title: "Biznesini kengaytirishni istaganlar uchun", text: "Biznesini masshtablashni xohlaydigan biznesmenlar uchun." },
                        { img: Bull, title: "Daromadini oshirishni maqsad qilganlar uchun", text: "Daromadini oshirishni xohlovchi tadbirkorlar uchun." },
                        { img: Nishon, title: "Bozorda o'z o'rnini mustahkamlashni xohlovchilar uchun", text: "O'z yo'nalishini bozorda mustahkam o'rnatishni xohlaydigan biznesmenlar uchun." },
                        { img: Nimadir, title: "Yangi bozorga chiqishni rejalashtirganlar uchun", text: "Yangi bozorga chiqishni istaydigan tadbirkorlar uchun." },
                        { img: ObjectImg, title: "Biznesiga yangi turtki berishni istaganlar uchun", text: "Rivojlanish uchun yangi impuls qidirayotganlar uchun." }
                    ].map((slide, index) => (
                        <SwiperSlide key={index} className="bg-sky-600 rounded-3xl p-6 sm:p-11 flex flex-col justify-between h-full">
                            <img src={slide.img} alt={slide.title} className="h-10 w-10 mb-6" />
                            <div className="flex-grow flex flex-col justify-end">
                                <h1 className="text-sm font-bold">{slide.title}</h1>
                                <span className="text-xs mt-2">{slide.text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div id="about-section" className='text-center'>
    <h1 className='text-2xl sm:text-4xl font-bold text-center mt-8 p-3'>Kurs formati haqida</h1>
    <span className='text-sm sm:text-lg mb-6'>
        Toshkent filialimizda 1 hafta davomida 1 marotaba jonli uchrashuv <br />
        tashkil qilinadi. Uchrashuv davomida quyidagi muammolarga yechim <br /> topamiz.
    </span>
    <div className='flex flex-wrap justify-center gap-4 sm:gap-8 py-10'>
        {[
            { img: books, title: "Fikrlash va psixologiya" },
            { img: bull, title: "Biznes modellar va bozor" },
            { img: handshake, title: "Hamkorlik va jamoa" },
            { img: megaphone, title: "Marketing va reklama" },
            { img: money, title: "Sotuv va daromad" }
        ].map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-4'>
                <img src={item.img} alt={item.title} className='h-32 sm:h-52 w-32 sm:w-52' />
                <h1 className="text-sm font-bold pt-4 text-center">{item.title}</h1>
            </div>
        ))}
    </div>
</div>

            <div className='py-6 px-4 sm:px-20'>
                <h1 className='text-2xl sm:text-4xl font-bold text-center mt-8 p-3 pb-10'>Kurs davomida quyidagi ma'lumotlarga ega bo'lasiz</h1>
                {[
                    "01. Masshtablash uchun bosqichma-bosqich reja.",
                    "02. Tizimli o'sish uchun ko'rsatmalar - moliyadan jamoagacha.",
                    "03. Milliard rublik loyihalarni amalga oshirishda yordam bergan harakatlar.",
                    "04. Biznesga ziyon yetkazmagan holda masshtablashning aniq ko'rsatmalari.",
                    "05. Qanday qilib mijozlarni ko'paytirish."
                ].map((text, index) => (
                    <div key={index} className={`flex items-center bg-neutral-900 border-2 border-neutral-700 rounded-3xl px-4 py-6 gap-5 ${index % 2 === 0 ? 'mr-0 sm:mr-96' : 'ml-0 sm:ml-96'} mt-8`}>
                        <h3 className='text-lg sm:text-2xl font-medium pl-5'><span className='text-xl sm:text-3xl font-semibold'>{text.split('.')[0]}.</span> {text.split('.')[1]}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwiperCarousel;