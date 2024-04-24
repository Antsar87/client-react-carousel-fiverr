import React from 'react';
import talktalk from '../assets/talktalk.png';
import male from '../assets/male.jpg';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <header className="bg-white py-10 px-5">
      <div className="mx-auto">
        <div className="flex items-center">
          <div className="">
            <img src={talktalk} className='h-10 block'/>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
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
  );
};

export default Header;
