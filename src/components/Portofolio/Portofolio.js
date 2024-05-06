import React from 'react';
import './Portofolio.css';
import port1 from '../../assets/port1.PNG';
import port2 from '../../assets/port2.PNG';
import port3 from '../../assets/port3.PNG';
import port4 from '../../assets/port4.png';
import port5 from '../../assets/port5.png';
import port6 from '../../assets/port6.png';


const Portofolio=()=>{
  return(
    <section id='portofolio'>
        <h2 className='tittle'>My Portofolio</h2>
        <span className='desc'>My creation from learning and hardworked.</span>
        <div className='imgs'>
            <img src={port1} alt='' className='img'/>
            <img src={port2} alt='' className='img'/>
            <img src={port3} alt='' className='img'/>
            <img src={port4} alt='' className='img'/>
            <img src={port5} alt='' className='img'/>
            <img src={port6} alt='' className='img'/>
        </div>
        <button className='moreBtn'>See More</button>
    </section>
  );
}

export default Portofolio;
