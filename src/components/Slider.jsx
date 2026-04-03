import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import img1 from "../assets/bg_1.jpg";
import img2 from "../assets/bg_2.jpg";

function Slider() {
  return (
    <>
    <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            className='mySwiper'

        >
            <SwiperSlide>
                <div className="slide" style={{
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <span className='green'>For Rent</span>
                    <h2>871 CRENSHAW BLVD</h2>
                    <p>$2,250,500</p>
                    <button>SEE DETAILS</button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide" style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <span className='red'>For Sale</span>
                    <h2>625 S. BERENDO ST</h2>
                    <p>$1,000,500</p>
                    <button>SEE DETAILS</button>

                </div>
            </SwiperSlide>


        </Swiper>
    </>
  )
}

export default Slider