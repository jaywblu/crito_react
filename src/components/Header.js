import React from 'react'
import MainNav from './MainNav'
import { Link } from 'react-router-dom'

import img_Logotype from '../assets/images/logotype.svg'
import img_IconPhone from '../assets/images/icon-phone.svg'
import img_IconMail from '../assets/images/icon-mail.svg'
import img_IconLocation from '../assets/images/icon-location.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div id="headerLogo" className="col sm-3 md-3 lg-2 xl-2">
                    <Link to="/" end>
                        <img src={img_Logotype} alt="Crito Agency logotype" />
                    </Link>
                </div>
                <div className="col sm-9 md-9 lg-10 xl-10">
                    <div className="row">
                        <div id="headerContact">
                            <ul>
                                <li><img src={img_IconPhone} alt="Contact phone number" /><span>+46 (8) 121 470 50</span></li>
                                <li><img src={img_IconMail} alt="Contact e-mail" /><span><a href="mailto:info@crito.com">info@crito.com</a></span></li>
                                <li><img src={img_IconLocation} alt="Contact address" /><span>Sveavägen 31, 111 34 STOCKHOLM</span></li>
                            </ul>
                        </div>
                        <div id="headerResponsiveMenu">
                            <button type="button"><i className="fa-solid fa-bars"></i></button>
                        </div>
                        <div id="headerSocial">
                            <ul>
                                <li><a href="#" target="_blank"><i className="fa-brands fa-facebook"></i><span>Share on Facebook</span></a></li>
                                <li><a href="#" target="_blank"><i className="fa-brands fa-twitter"></i><span>Share on Twitter</span></a></li>
                                <li><a href="#" target="_blank"><i className="fa-brands fa-instagram"></i><span>Share on Instagram</span></a></li>
                                <li><a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i><span>Share on LinkedIn</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <MainNav></MainNav>
                        <div id="headerProfile">
                            <button type="button" className="btn btn-primary">Login<i className="icon link-icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header