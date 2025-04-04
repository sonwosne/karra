import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const clients = [
    { videoUrl: "https://www.youtube.com/embed/yJN_St-UyqQ?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/KOTZ9MS2Glo?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/zlW55aAxLE0?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/0jjlo91pxkM?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/ZWeAS0KTQbA?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/aD-QQduOnmc?fs=0" },
    { videoUrl: "https://www.youtube.com/embed/nHwrf6rOB3c?fs=0" },
];

const ClientCards = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const handlePlayClick = (index) => {
        setActiveVideo(activeVideo === index ? null : index);
    };

    return (
        <div id='comments-section' className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8">
            {/* Responsive heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left sm:ml-12 md:ml-24 mt-6 sm:mt-8 p-3 mb-4 sm:mb-5">Sharxlar</h1>

            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper h-[300px] sm:h-[350px] md:h-[400px]"
                    breakpoints={{
                        640: { // Small tablets
                            slidesPerView: 1.5,
                            spaceBetween: 25
                        },
                        768: { // Tablets
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: { // Laptops
                            slidesPerView: 2.5,
                            spaceBetween: 35
                        },
                        1280: { // Desktops
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                >
                    {clients.map((client, index) => (
                        <SwiperSlide 
                            key={index} 
                            className="!w-[280px] sm:!w-[320px] md:!w-[360px]"
                        >
                            <div className="relative w-full h-full rounded-xl bg-zinc-900 overflow-hidden aspect-video">
                                {activeVideo !== index && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-50 transition-all cursor-pointer">
                                        <button
                                            onClick={() => handlePlayClick(index)}
                                            className="text-3xl sm:text-4xl text-white hover:text-red-500 transition-colors"
                                            aria-label="Play video"
                                        >
                                            ▶
                                        </button>
                                    </div>
                                )}

                                {activeVideo === index && (
                                    <iframe
                                        className="w-full h-full rounded-xl"
                                        src={client.videoUrl}
                                        title={`Video ${index}`}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                        frameBorder="0"
                                        allowFullScreen={false}
                                    ></iframe>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientCards;