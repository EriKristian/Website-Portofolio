import React from 'react';
import './Intro.css';
import bg from '../../assets/foto.png';
import btnImg from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Intro=()=>{
  return(
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Eri</span> <br/>Programmer</span>
        <p className='introPara'>I am a programmer, game developer, and content creator</p>
        <Link><button className='btn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }}><img src={btnImg} alt='call' className='btnImg'/>Contact Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro;
