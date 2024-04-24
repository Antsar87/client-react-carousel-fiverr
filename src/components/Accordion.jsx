import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Accordion = ({ title = 'titulo', info, colorArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 w-full"
      >
        {' '}
        <span style={{ color: colorArrow }}>
          <IoIosArrowDropdownCircle />
        </span>{' '}
        {title}
      </button>

      <div
        className="grid transition-all"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div>
            <div className="px-5 py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
