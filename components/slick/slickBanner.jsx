'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    autoplay : true,
    InitalSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  }
  

  return (
      
     <div className="w-full m-auto my-5">
       <div className="slider-container">
        <Slider {...settings}>
          
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/banner/1.png"
              alt=""
              width={1400}
              height={500}
            />
          
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/banner/2.png"
              alt=""
              width={1400}
              height={500}
            />

            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/banner/3.png"
              alt=""
              width={1400}
              height={500}
            />

        </Slider>
      </div> 
     </div>
  )
}

export default SlickBanner
