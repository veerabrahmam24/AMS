import React from 'react';
import '../App.css'
import { Button2 } from './Button2';
import './HeroSection.css';



function HeroSection() {
  const headingStyle={
    color:'blue'
  }
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted/>
      
      <h1 >AMS 71 </h1>
      <p>What are you waiting for?</p>
     
      <div className='hero-btns'>
        
          <Button2 className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            
              Get Started
         

            
          </Button2>
          
                      
      </div>
     
    
    </div>
     
    
  );
}
export default HeroSection;