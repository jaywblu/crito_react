import React from 'react'

import img_PaperzLogo from '../assets/images/paperz.svg'
import img_DorfusLogo from '../assets/images/dorfus.svg'
import img_MartinoLogo from '../assets/images/martino.svg'
import img_SquareLogo from '../assets/images/square.svg'
import img_GobonaLogo from '../assets/images/gobona.svg'

const PartnersSection = () => {
  return (
    <section id="partners" className="container padding-top-small padding-btm-small">
        <div className="row">
            <div className="col">
                <img src={img_PaperzLogo} alt="Logotype for Paperz - Leading Paper Company" />
            </div>
            <div className="col">
                <img src={img_DorfusLogo} alt="Logotype for Dorfus" />
            </div>
            <div className="col">
                <img src={img_MartinoLogo} alt="Logotype for Martino - Colors of your life" />
            </div>
            <div className="col">
                <img src={img_SquareLogo} alt="Logotype for Square - Real Estate Solution" />
            </div>
            <div className="col">
                <img src={img_GobonaLogo} alt="Logotype for Gobona - Your Trusted Currier" />
            </div>
        </div>
    </section>
  )
}

export default PartnersSection