// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';

import img from '../assets/gif2-transparente.gif';

import { GrNext } from 'react-icons/gr';

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import Accordion from './Accordion';

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

  console.log(color);

  return (
    <div className="max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto relative px-20">
      <div className=" ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          // breakpoints={{
          //   768: {
          //     slidesPerView: 1,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 2,
          //     spaceBetween: 50,
          //   },
          // }}
          spaceBetween={30}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          centeredSlides
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <Card
                  color={item.color}
                  isActive={isActive}
                  setColor={setColor}
                />
              )}
            </SwiperSlide>
          ))}
          <Arrows />
        </Swiper>
      </div>

      <div
        className={`bg-grayDark text-white max-w-md lg:max-w-xl text-xl py-5 rounded-xl mx-auto`}
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
  );
};

const Card = ({ color, isActive, setColor }) => {
  if (isActive) {
    setColor(color);
  }

  return (
    <div
      style={{ border: isActive ? `2px solid ${color}` : null }}
      className={` py-10 card rounded-xl text-white ${
        isActive ? 'bg-grayDark' : 'text-center'
      }`}
    >
      <div className="flex gap-5 items-center h-full">
        <div className={`${isActive ? 'flex-1' : 'card__imgBox'}`}>
          <img
            src={img}
            alt=""
            className={`"mx-auto h-52 object-contain" ${
              isActive ? 'min-w-36' : null
            }`}
          />
        </div>
        <div className="card__content" style={{ flex: 2 }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla adipisci impedit porro, ullam temporibus necessitatibus nihil
            dignissimos distinctio odit.
          </p>
        </div>
      </div>
    </div>
  );
};

const Arrows = () => {
  const swiper = useSwiper();

  return (
    <div className="text-3xl">
      <button onClick={() => swiper.slidePrev()} className="rotate-180">
        <GrNext />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;