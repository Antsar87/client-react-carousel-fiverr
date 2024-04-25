import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="max-w-5xl mx-auto px-4">
                    <div className='grid sm:grid-cols-2 gap-4 md:grid-cols-4'>

                        <div className="footer-info">
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
                                darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo.
                                Amet volutpat consequat mauris nunc congue.</p>
                        </div>

                        <div className="footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li className="flex items-center gap-x-2"><IoIosArrowForward /><a href="#">Home</a></li>
                                <li className="flex items-center gap-x-2"><IoIosArrowForward /><a href="#">About us</a></li>
                                <li className="flex items-center gap-x-2"><IoIosArrowForward /><a href="#">Services</a></li>
                                <li className="flex items-center gap-x-2"><IoIosArrowForward /><a href="#">Terms of service</a></li>
                                <li className="flex items-center gap-x-2"><IoIosArrowForward /><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>

                            <div className="social-links">
                                <a href="#" className="twitter">
                                    <div className="flex justify-center">
                                        <FaTwitter />
                                    </div>
                                </a>
                                <a href="#" className="facebook">
                                    <div className="flex justify-center">
                                        <FaFacebookF />
                                    </div>
                                </a>
                                <a href="#" className="instagram">
                                    <div className="flex justify-center">
                                        <FaInstagram />
                                    </div>
                                </a>
                                <a href="#" className="google-plus">
                                    <div className="flex justify-center">
                                        <FaGooglePlusG />
                                    </div>
                                </a>
                                <a href="#" className="linkedin">
                                    <div className="flex justify-center">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore
                                legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="copyright">
                    &copy; Copyright <strong></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer