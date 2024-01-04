import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function Populars() {
  let width=window.innerWidth
  let slidersNum = 2
  if (width >= 1024) {
      slidersNum = 8
  } else if (width>=768){
    slidersNum = 4
  }
  return (
    <section className="h-fit pb-7 my-4 bg-gray-50 items-center">
      <p className="text-end py-4 text-xl font-bold pe-4 text-[#B7985B]">
        پرطرفدارترین ها
      </p>
      <Swiper
        slidesPerView={slidersNum}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper font-thin"
      >
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border w-fit h-fit border-2 border-gray-600 rounded-t-2xl">
          <div>
            <img src="https://fakeimg.pl/300/" alt="jewel image" className="rounded-t-2xl" />
            <div className="flex flex-col">
              <span>گوشوارهK137</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Populars;
