import React, { useRef } from 'react';
import './Contact.css';
import php from '../../assets/php.png';
import unity from '../../assets/unity.png';
import androidStudio from '../../assets/androidStudio.png';
import java from '../../assets/java.png';
import ytb from '../../assets/ytb.png';
import ig from '../../assets/ig.png';
import tiktok from '../../assets/tiktok.png';
import emailjs from '@emailjs/browser';


const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {publicKey: 'YOUR_PUBLIC_KEY',})
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent !");
            },
            (error) => {
              console.log(error.text);

            },
          );
      };

  return(
    <section id='contactPage'>
        <div id='proficient'>
            <h1 className='profTittle'>Proficient In :</h1>
            <p className='profDesc'>
                I am learning several programming language for creating game, desktop apps, website, and mobile apps.
            </p>
            <div className='profImgs'>
                <img src={unity} alt='unity' className='profImg'/>
                <img src={php} alt='php' className='profImg'/>
                <img src={androidStudio} alt='androidStudio' className='profImg'/>
                <img src={java} alt='java' className='profImg'/>
            </div>
        </div>

        <div id='contact'>
            <h1 className='profTittle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form to discuss work.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={ytb} alt='' className='link'/>
                    <img src={ig} alt='' className='link'/>
                    <img src={tiktok} alt='' className='link'/>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
