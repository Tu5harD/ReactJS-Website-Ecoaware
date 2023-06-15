import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./Image_Slider.css";
import content from "./content";
import AOS from "aos";
import 'aos/dist/aos.css'
// import required modules
import { useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";

function Image_Slider() {
  
  useEffect(()=>{
    AOS.init({duration:1000});
  })

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {content.map((item, index) => (
          <SwiperSlide className="slider_main" >
            <div
              key={index}
              className="slider_Content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="slider_inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
              <div className="profile_div" >
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 0 0" ref={progressCircle}>
            <circle cx="0" cy="0" r="0"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
export default Image_Slider;
