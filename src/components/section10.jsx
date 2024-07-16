import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Previous Arrow
const PrevArrow = ({ onClick, disabled }) => (
  <button
    className={`hover:bg-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out border border-gray-400 text-gray-800 hover:text-white p-[7px] rounded-full ml-[1050px] ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
    }`}
    onClick={onClick}
    disabled={disabled}
  >
   <IoIosArrowBack  className=' w-3 h-3'/> 
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, disabled }) => (
  <button
    className={`absolute top-0 right-[9%] hover:bg-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out border border-gray-400 text-gray-800 hover:text-white p-[7px] rounded-full ml-20 ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    <IoIosArrowForward  className=' w-3 h-3' />
  </button>
);

const Section10 = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '100px', // Adjust as needed
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: () => {
      if (sliderRef.current) {
        setSlideCount(sliderRef.current.innerSlider.state.slideCount);
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      setSlideCount(sliderRef.current.innerSlider.state.slideCount);
    }
  }, []);

  return (
    <div className="w-[95%] rounded-r-[40px] h-[900px] bg-gray-100 mt-16 relative">
      <div className="pt-20">
        <h1 className="text-4xl font-bold ml-28">
          What Students are saying
          <p>about internee.pk</p>
        </h1>
        <div className="relative">
          <PrevArrow
            onClick={() => sliderRef.current.slickPrev()}
            disabled={currentSlide === 0}
          />
          <NextArrow
            onClick={() => sliderRef.current.slickNext()}
            disabled={currentSlide >= slideCount - 2}
          />
        </div>
        <Slider ref={sliderRef} {...settings} className="mx-12 -mr-44">
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Rabia Javed</h2>
              <span className="text-white">Karachi, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Nagina Asif</h2>
              <span className="text-white">Karachi, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Razaullah Sami</h2>
              <span className="text-white">KPK, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Kashan Soomro</h2>
              <span className="text-white">Multan, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Naila Rozi</h2>
              <span className="text-white">Lahore, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Mohammad Rafiq</h2>
              <span className="text-white">Sindh Divison, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Ayesha Laghari</h2>
              <span className="text-white">Islamabad, Pakistan</span>
            </div>
          </div>
          <div className="h-80 max-w-[480px] bg-black slide-up -ml-24 mt-10 relative cursor-pointer opacity-85 rounded-[40px] shadow-xl">
            <p className="text-white p-12 text-xl font-[400]">
              "internee.pk is the best, most comprehensive 21st-century innovation for those student who's
              looking for internship and upgrade thier skillsets. Their projects are tough but market
              valued."
            </p>
            <div className="text-xl absolute bottom-6 left-12">
              <h2 className="text-yellow-500 font-bold">Sidra</h2>
              <span className="text-white">Bahawalnagar, Pakistan</span>
            </div>
          </div>
        </Slider>
      </div>
      <div className='flex items-center justify-between p-[200px] -mt-32'>
        <div>
            <div className='flex items-center gap-4 -ml-5 py-4'>
                <img src="https://internee.pk/wp-content/uploads/2021/04/icon-safe-secure.svg" alt="" />
                <h2 className=' text-[30px] tracking-tight font-bold'>Safe and secure</h2>
            </div>
           <ul className='list-disc text-lg leading-8'>
            <li>Powered by Microsoft Azure cloud technology.</li>
            <li>Encrypted at rest and in transit.</li>
            <li>Data resides in US-based data centers.</li>
           </ul>
        </div>
        <div className=' ml-60'>
            <div className='flex gap-4 -ml-5 py-4'>
                <img className=' mb-12' src="https://internee.pk/wp-content/uploads/2021/04/icon-money-back-2.svg" alt="" />
                <h2 className=' text-[30px] tracking-tight font-bold'>
                Free From Internship To Certification</h2>
            </div>
           <ul className='list-disc text-lg leading-8'>
            <li>Profile Building & Optimization</li>
            <li>Free Learning Management System</li>
            <li>Hands on Tasks with Certification</li>
           </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Section10;
