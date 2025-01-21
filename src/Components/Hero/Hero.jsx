import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="offer-sign">
      <div className="offer-sign-text">RING NU <br />28 49 34 81<br/>
      </div>
      </div>

        <div className="hero-text">
            <h1>Aguas Totalinterprise</h1>
            <p>
            Kvalitetshåndværk til tiden - Lad os gøre dit projekt nemt, effektivt og problemfrit.
            </p>
            <Link to='program' smooth={true} offset={-240} duration={500} className='btn'>
                Se mere <img src={dark_arrow} alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default Hero