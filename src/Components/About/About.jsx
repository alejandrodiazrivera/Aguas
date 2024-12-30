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
            <h3>Om Aguas VVS</h3>
            <h2>Leverer de bedste VVS-tjenester i byen</h2>
            <p>Hos Aguas er vi stolte af at være din betroede partner til alle dine VVS-behov. Med et stærkt engagement i at levere førsteklasses service kombinerer vi ekspertise, pålidelighed og en kunde-først tilgang for at sikre din tilfredshed hver gang.</p>
            <p>Vores dygtige team af professionelle er dedikeret til at levere rettidige løsninger, uanset om det drejer sig om en hurtig reparation eller en kompleks installation. Vi forstår, at VVS-problemer kan forstyrre din hverdag, og derfor prioriterer vi effektivt og kvalitetsbevidst håndværk, der holder i længden. Vi reparerer ikke bare rør – vi opbygger tillid. Vores ry som den bedste VVS-service i byen bygger på vores kerneværdier: integritet, gennemsigtighed og en ægte passion for at hjælpe vores lokalsamfund.</p>
            <p>Lad os tage os af dine VVS-udfordringer, så du kan nyde ro i sindet og vide, at dit hjem eller din virksomhed er i de bedste hænder.</p>
        </div>
    </div>
  )
}

export default About