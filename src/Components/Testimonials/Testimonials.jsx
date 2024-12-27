import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

const Testimonials = () => {
    const slider=useRef(null);
    let tx=0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25; // Corrected this line
        }
        slider.current.style.transform = `translateX(${tx}%)`;    
    }
    
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; 
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=''/>
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>I was in a pinch and needed help ASAP. I called and Aguas was at my home 15min later. I avoided a water damage and I had the toilet up and running an hour later</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=''/>
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>I was in a pinch and need help ASAP. I called and Aguas was at my home 15min later. I avoided a water damage and I had the toilet up and running an hour later</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=''/>
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>I was in a pinch and need help ASAP. I called and Aguas was at my home 15min later. I avoided a water damage and I had the toilet up and running an hour later</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=''/>
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>I was in a pinch and need help ASAP. I called and Aguas was at my home 15min later. I avoided a water damage and I had the toilet up and running an hour later</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Testimonials