import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>WaterPlumbing Master - one unclogged toilet at a time</h1>
            <p>
                With a great passion for releasing pipe tensions, we work for a poop-free environment and healthy sanitation all over the world.
            </p>
            <Link to='program' smooth={true} offset={-240} duration={500} className='btn'>
                Explore more <img src={dark_arrow} alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default Hero