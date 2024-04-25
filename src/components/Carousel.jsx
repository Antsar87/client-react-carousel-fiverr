// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';

import img from '../assets/gif2-transparente.gif';

import { GrNext } from 'react-icons/gr';
import { PiQuestionLight } from 'react-icons/pi';

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import CardContent from './CardContent';

const data = [
  {
    color: '#00afff',
  },
  {
    color: '#db00d6',
  },
  {
    color: '#69e300',
  },
  {
    color: '#ffb700',
  },
  {
    color: '#fc7979',
  },
  {
    color: '#c57e37',
  },
  {
    color: '#ebd000',
  },
  {
    color: '#FF7F50',
  },
];

const Carousel = () => {
  const [color, setColor] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchMove = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="desktop max-w-3xl lg:max-w-5xl xl:max-w-5xl mx-auto relative ">
      <div className="">
        <Swiper
          // install Swiper modules
          // navigation
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="px-32 relative"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <Card
                  color={item.color}
                  isActive={isActive}
                  setColor={setColor}
                  isDragging={isDragging}
                />
              )}
            </SwiperSlide>
          ))}
          <Arrows />
        </Swiper>
      </div>

      <div className={`mt-10 max-w-md md:max-w-[565px] mx-auto pl-2`}>
        <div
          className="bg-grayDark text-white text-xl py-5 rounded-xl"
          style={{ border: `2px solid ${color}` }}
        >
          <header
            className="pb-2 px-4 mb-5"
            style={{ borderBottom: `2px solid ${color}` }}
          >
            This plan includes
          </header>
          <div className="grid grid-cols-2 px-4 gap-y-4">
            <Accordion colorArrow={color} />
            <Accordion colorArrow={color} />
            <Accordion colorArrow={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ color, isActive, setColor, isDragging }) => {
  useEffect(() => {
    if (isActive) {
      setColor(color);
    }
  }, [isActive, color]);

  return (
    <div
      style={{ border: isActive ? `2px solid ${color}` : null }}
      className={`py-10 card rounded-xl text-white 
      ${isActive ? 'bg-grayDark' : null}
      ${isDragging ? 'removeML' : null}`}
    >
      <div className="flex gap-5 h-full">
        <div className={`${isActive ? 'flex-1' : 'card__imgBox'}`}>
          <img
            src={img}
            alt=""
            className={`"mx-auto object-contain" ${isActive ? 'h-56' : 'h-44'}`}
          />
        </div>
        <div className="card__content" style={{ flex: 2 }}>
          <CardContent />
        </div>
      </div>
    </div>
  );
};

const Arrows = () => {
  const swiper = useSwiper();

  return (
    <div className="text-3xl">
      <button
        onClick={() => swiper.slidePrev()}
        className="rotate-180 absolute top-1/2 left-0 z-10"
      >
        <GrNext />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-1/2 right-0 z-10"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;
