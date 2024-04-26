import React, { useState } from 'react';
import talktalk from '../assets/talktalk.png';
import male from '../assets/male.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      <header className="bg-white rounded-xl py-5 px-5">
        <div className="mx-auto">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={talktalk} className="h-10 block" />
            </div>

            <button
              className="lg:hidden absolute right-10 text-3xl"
              onClick={() => setIsOpen(true)}
            >
              <RxHamburgerMenu />
            </button>

            <nav
              id=""
              className={`lg:relative z-50
             ${isOpen ? null : 'hidden lg:block'}`}
            >
              <ul
                id={`${isOpen ? 'active-side' : null}`}
                className={`bg-white z-50 transition-transform
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              min-h-svh top-0 right-0 p-5 nav-menu absolute
             lg:translate-x-0 lg:p-0 lg:min-h-full lg:static flex flex-col lg:flex-row`}
              >
                <li className="text-end lg:hidden pt-5">
                  <button
                    className=" text-3xl"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoCloseOutline />
                  </button>
                </li>

                <li className="menu-active">
                  <a href="#">Getting Started on TalkTalk</a>
                </li>

                <li className="menu-has-children">
                  <a href="#">
                    Sim Only Deals
                    <IoIosArrowDown className="inline" />
                  </a>

                  <ul>
                    <li>
                      <a href="#">Best SIM Only Deals</a>
                    </li>
                    <li>
                      <a href="#">Pay As You Go Deals</a>
                    </li>
                    <li>
                      <a href="#">Monthly Rolling SIM Deals</a>
                    </li>
                    <li>
                      <a href="#">Contract SIM Deals</a>
                    </li>
                    <li>
                      <a href="#">Order Your Free SIM</a>
                    </li>
                    <li>
                      <a href="#">Activate Your SIM</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">TalkTalk App</a>
                </li>

                <li className="menu-has-children">
                  <a href="#">
                    Step-by-Step Guides
                    <IoIosArrowDown className="inline" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Switching to us</a>
                    </li>
                    <li>
                      <a href="#">Activate Your SIM</a>
                    </li>
                    <li>
                      <a href="#">PIN Code</a>
                    </li>
                    <li>
                      <a href="#">Voicemail</a>
                    </li>
                    <li>
                      <a href="#">PUK Code</a>
                    </li>
                    <li>
                      <a href="#">How to Top-up</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>

                <li className="menu-has-children">
                  <a href="#">
                    About TalkTalk
                    <IoIosArrowDown className="inline" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Why TalkTalk</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Roaming</a>
                    </li>
                    <li>
                      <a href="#">International Calls</a>
                    </li>
                    <li>
                      <a href="#">UK Rates</a>
                    </li>
                    <li>
                      <a href="#">e-SIM</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>

                <li className="menu-has-children">
                  <a href="#">
                    Help
                    <IoIosArrowDown className="inline" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Service Updates</a>
                    </li>
                    <li>
                      <a href="#">Ask The Community</a>
                    </li>
                    <li>
                      <a href="#">Ask a giffgaff Agent</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="menu-img">
                      <img src={male} />
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
