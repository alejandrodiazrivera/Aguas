import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "af227498-fdae-4a37-a4e5-f019354174c8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt='' /></h3>
        <p>Have a question or need help with your order? Contact us today and we'll get back to you within 24 hours.</p>
        <ul>
            <li><img src={mail_icon} alt=''/> Contact@aguas.com</li>
            <li><img src={phone_icon} alt=''/> 30 98 89 83</li>
            <li><img src={location_icon} alt=''/> Løgstørgade 18, 2100 København Ø, Danmark</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact