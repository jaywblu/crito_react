import React from 'react'
import MainNav from './MainNav'
import { Link } from 'react-router-dom'

import img_Logotype from '../assets/images/logotype.svg'
import img_IconPhone from '../assets/images/icon-phone.svg'
import img_IconMail from '../assets/images/icon-mail.svg'
import img_IconLocation from '../assets/images/icon-location.svg'
import ButtonLink from '../utils/ButtonLink'

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
                                <li><img src={img_IconMail} alt="Contact e-mail" /><span><Link to="mailto:info@crito.com">info@crito.com</Link></span></li>
                                <li><img src={img_IconLocation} alt="Contact address" /><span>Sveavägen 31, 111 34 STOCKHOLM</span></li>
                            </ul>
                        </div>
                        <div id="headerResponsiveMenu">
                            <button type="button"><i className="fa-solid fa-bars"></i></button>
                        </div>
                        <div id="headerSocial">
                            <ul>
                                <li><Link to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i><span>Share on Facebook</span></Link></li>
                                <li><Link to="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i><span>Share on Twitter</span></Link></li>
                                <li><Link to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i><span>Share on Instagram</span></Link></li>
                                <li><Link to="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i><span>Share on LinkedIn</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <MainNav></MainNav>
                        <div id="headerProfile">
                            <ButtonLink color="primary" text="Login" url="/login"></ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header