import React from 'react';
import './About.css';
import programming from '../../assets/programming.png';
import gameDev from '../../assets/gameDev.png';
import contentCreator from '../../assets/contentCreator.png';
import learning from '../../assets/learning.png';

const About=()=>{
  return(
    <section id='about'>
      <span className='tittle'>What I Do?</span>
      <span className='desc'>I am programming, creating video games, and creating content about gaming.</span>
      <div className='bars'>
        <div className='bar'>
          <img src={programming} alt='programmer' className='barImg'/>
          <div className='barText'>
            <h2>Programming</h2>
            <p>Create websites, desktop app, and mobile apps.</p>
          </div>
        </div>

        <div className='bar'>
          <img src={gameDev} alt='gameDev' className='barImg'/>
          <div className='barText'>
            <h2>Game Developer</h2>
            <p>Creating 2D Games such as platformer, quiz, and visual novels.</p>
          </div>
        </div>

        <div className='bar'>
          <img src={contentCreator} alt='contentCreator' className='barImg'/>
          <div className='barText'>
            <h2>Content Creator</h2>
            <p>Creating content on Youtube and Tiktok.</p>
          </div>
        </div>
      
      <div className='bar'>
          <img src={learning} alt='learning' className='barImg'/>
          <div className='barText'>
            <h2>Learning</h2>
            <p>Learning skills needed to improve self. Learn by watching tutorial, and implemented in on self project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
