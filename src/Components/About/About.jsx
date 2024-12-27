import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img' />
            <img src={play_icon} alt='' className='play_icon' onClick={() => { setPlayState(true) }} />
        </div>
        <div className='about-right'>
            <h3>About AguaS Plumbing</h3>
            <h2>Providing the best plumbing services in town</h2>
            <p>At Aguas, we take pride in being your trusted partner for all your plumbing needs. With a commitment to delivering top-notch services, we combine expertise, reliability, and a customer-first approach to ensure your satisfaction every time.</p>
            <p>Our skilled team of professionals is dedicated to providing timely solutions, whether it’s a quick fix or a complex installation. We understand that plumbing problems can disrupt your daily life, which is why we prioritize efficient and high-quality workmanship that stands the test of time. We don’t just fix pipes – we build trust. Our reputation as the best plumbing service in town is founded on our core values: integrity, transparency, and a genuine passion for helping our community.</p>
            <p>Let us handle your plumbing challenges so you can enjoy peace of mind knowing your home or business is in the best hands.</p>
        </div>
    </div>
  )
}

export default About