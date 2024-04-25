import { PiQuestionLight } from 'react-icons/pi';
import img from '../assets/get-sim-home.svg';
import { useState } from 'react';
import Modal from './Modal';

const CardContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <div>
        <h2 className="text-center text-lg font-semibold">
          $20 per motnh gets you 30-40GB of data, depending on your plan
        </h2>

        <ul className="mt-4">
          <li className="flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>Flexible contract plan</span>

            <span className="inline-flex items-center gap-2">
              40 GB data{' '}
              <button onClick={openModal}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
          <li className="my-5 flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>Monthly Rolling plan</span>

            <span className="inline-flex items-center gap-2">
              35 GB data{' '}
              <button onClick={openModal}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
          <li className="flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>Pay as you go plan</span>

            <span className="inline-flex items-center gap-2">
              30 GB data{' '}
              <button onClick={openModal}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
        </ul>

        <div className="mt-5 text-center">
          <button className="bg-[#FEF2CC] text-grayDark px-3 py-2 rounded-lg relative">
            Order your free SIM
            <img src={img} alt="" className="absolute h-10 -top-4 -right-12" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContent;
