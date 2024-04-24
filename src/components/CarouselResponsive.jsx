/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';

import img from '../assets/gif2-transparente.gif';

import { GrNext } from 'react-icons/gr';

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
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

const CarouselResponsive = () => {
  const [color, setColor] = useState('');

  // console.log(color);

  return (
    <div className="mx-auto">
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}

          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          centeredSlides
          className='pb-10'
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
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({ color, isActive, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isActive) {
      setColor(color);
    }
  }, [isActive, color]);

  return (
    <div
      style={{ border: isActive ? `2px solid ${color}` : null }}
      className={` pt-10 overflow-hidden card rounded-xl text-white w-full ${
        isActive ? 'bg-grayDark' : null
      }`}
    >
      <div className="h-full">
        <div className={`${isActive ? 'flex-1' : 'card__imgBox'}`}>
          <img
            src={img}
            alt=""
            className={`mx-auto h-52 object-contain ${
              isActive ? 'min-w-36' : null
            }`}
          />
        </div>
        <div className="card__content mt-5" style={{ flex: 2 }}>
          <div className="px-5">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla adipisci impedit porro, ullam temporibus
              necessitatibus nihil dignissimos distinctio odit.
            </p>
          </div>

          <div
            className="grid transition-all mt-5"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <div className='px-2'>
                <Accordion colorArrow={color} />
                <Accordion colorArrow={color} />
                <Accordion colorArrow={color} />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="py-2 mt-5 bg-white text-black w-full"
          >
            View plan details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselResponsive;
