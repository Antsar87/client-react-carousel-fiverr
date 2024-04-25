/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import img from '../assets/gif2-transparente.gif';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import CardContent from './CardContent';
import { FaChevronDown } from 'react-icons/fa';

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

  // const slideTo = (index) => {
  //   if (swiper) swiper.slideTo(index);
  // };

  return (
    <div className="mx-auto">
      <div className="responsive px-5">
        <Swiper
          modules={[Pagination]}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 3,
          //   },
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          // slidesPerView={2}
          slidesPerView={3}
          spaceBetween={15}
          centeredSlides
          className="pb-10"
          pagination
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
        isActive ? 'bg-grayDark w-96' : null
      }`}
    >
      <div className="h-full">
        <div className={`${isActive ? 'flex-1' : 'card__imgBox'}`}>
          <img
            src={img}
            alt=""
            className={`mx-auto object-contain ${isActive ? 'h-48' : 'h-44'}`}
          />
        </div>
        <div className="card__content mt-5" style={{ flex: 2 }}>
          <div className="px-5">
            <CardContent />
          </div>

          <div
            className="grid transition-all mt-5"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <div className="px-2">
                <Accordion colorArrow={color} />
                <Accordion colorArrow={color} />
                <Accordion colorArrow={color} />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="py-2 mt-5 bg-white text-black w-full flex justify-center items-center gap-2"
          >
            View plan details
            <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : null}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselResponsive;
