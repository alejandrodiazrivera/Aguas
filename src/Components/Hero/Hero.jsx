import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Vand- og VVS-mester – ét tilstoppet toilet ad gangen.</h1>
            <p>
            Med en stor passion for at løsne spændinger i rørene arbejder vi for et kloakfrit miljø og sund sanitet i hele verden
            </p>
            <Link to='program' smooth={true} offset={-240} duration={500} className='btn'>
                Explore more <img src={dark_arrow} alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default Hero