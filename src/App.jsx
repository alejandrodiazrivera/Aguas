import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title' 
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer  from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = React.useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Vores Serviceydelser' title='Hvad vi tilbyder'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Billeder' title='Projekter'/>
        <Campus/>
        <Title subTitle='Kunderanmeldelser' title='Hvad Siger Vores Kunder'/>
        <Testimonials/>
        <Title subTitle='Kontakt Os' title='Kom i kontakt'/>
        <Contact/>
        <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
  </div>
  )  
}

export default App