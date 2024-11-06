import React from 'react';
import '../../../App.css'
import Carditem from '../../Carditem';
import './../../Cards.css';
import './../../cards2.css';
import './Getstarted.css';

function Getstarted() {
  return (
    <div className='hero-container'>
      <img src="/images/getstarted-img.jpg"/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/about-img.jfif'
                    text='About Us'
                    label='Profile'
                    desc='You can find out all the services we can offer and our achievements. Know what is different about us by checking our about us page.'
                    path='/About'
                    btntext='Know more'
                    className='card1'
                    />
                    <Carditem
                    src='images/Categories-img.jpg'
                    text='Categories'
                    label='Products'
                    desc='Find your dream vehicle by going through our products.Cars and sports utility vehicles, upcoming cars, old cars, car exchange, bikes, trucks and accessories.'
                    path='/Categories'
                    btntext='Book now'
                    className='card2'
                    />
                    
                    <Carditem
                    src='images/service-img.jpg'
                    text='Services'
                    label='Services'
                    desc='One stop for all issues with your automobile. Peridic services, repairs of all types, inspection and diagnostics.'
                    btntext='Book now'
                    path='/Automobile'
                    className='card3'
                    />
                    </ul>
                   <ul className='cards__items'>
                    <Carditem
                    src='images/contact-img.jfif'
                    text='Contact Us'
                    label='We are all ears!'
                    desc='Contact us to schedule an appointment or to give feedback on our services.'
                    path='/contact'
                    btntext='Happy to connect'
                    className='card1'
                    />

                    <Carditem
                    src='images/gallery-img.jfif'
                    text='Our Featured Gallery'
                    label='Gallery'
                    desc='Check out our featured images to get an understanding of how we work.'
                    path='/Gallery'
                    btntext='Know more'
                    className='card2'
                    />
                    
                    <Carditem
                    src='images/blog-img.jpg'
                    text='Blog'
                    label='Know our stories'
                    desc='Want to hear interesting and real life stories? Go through our blog to find what we offer that you relate to.'
                    path='/Blog'
                    btntext='Know more'
                    className='card2'
                    />
                    </ul>
                     
                </div>
              
           
            </div>
            
            
     </div>
     <footer/>
    </div>
  );
}
export default Getstarted;