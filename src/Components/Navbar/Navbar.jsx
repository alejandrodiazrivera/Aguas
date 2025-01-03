import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu?'':'hide_mobile_menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Hjem</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Serviceydelser</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>Om os</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>VVS Installationer</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Vores kunder</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn contact-btn'>Kontakt os</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar