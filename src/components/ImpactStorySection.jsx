import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimionalData } from "../Data";
//import { RiDoubleQuotesL } from "react-icons/ri";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const ImpactStorySection = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className=" bg-white w-full mx-auto">
      <div className=" container mx-auto w-full">
        <div className="py-36 md:py-12 mx-auto">
          <div className="">
            <h3 className="mb-4 tracking-wide text-center ">
              {" "}
              Our Impact Stories
            </h3>
          </div>

          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {testimionalData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full bg-[#FAF4ED] p-8 rounded ">
                  <img
                    src="/assets/svg/fluent_text-quote-24-filled (1).svg"
                    alt=""
                    loading="lazy"
                    className="block w-8 h-8 bg-clip-text bg-transparent   gradient-100  mb-4"
                  />
                  <p className="leading-relaxed mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonial.CoverImg}
                      loading="lazy"
                      className="w-24 h-24 rounded-full flex-shrink-0 border-4 bg-clip-border border-transparent gradient-100 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.authorName}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.authorRole}
                      </span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center space-x-2 mt-5">
            <button
              onClick={goPrev}
              className=" bg-[#FAF4ED] rounded-full w-8 h-8 flex items-center justify-center"
              arial-label="previous testimonial"
            >
              <HiArrowLongLeft className=" text-[#026354] w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="prevEl bg-[#FAF4ED] rounded-full w-8 h-8 flex items-center justify-center"
              arial-label="next testimonial"
            >
              <HiArrowLongRight className=" text-[#026354] w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStorySection;
