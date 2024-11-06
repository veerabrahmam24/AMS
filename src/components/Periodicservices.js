import React from 'react';
import '../App.css'
import Carditem from './Carditem';
import './cards3.css';
import Footer from './Footer';
import './Periodicservices.css'
import { scards } from './smallcards';


function Periodicservices() {
  return (

    <div className='hero-container1'>
      <img src="/images/ser-img.jpg"/>
      <div>

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>


              <Carditem
                src='images/s-1.jpeg' 
                text='Periodic Services'
                label='Complete service'
                desc='Get your services on regular intervals to keep your vehicle in top condition.'
                path='/Travel'
                btntext='Book now'
                className='card1'
              />
              <Carditem
                src='images/s-2.jpg'
                text='Body Repair'
                label='Body repair'
                desc='Click here to make your vehicles outer appearance brand new.'
                path='/services'
                btntext='Book Now'
                className='card2'
              />

            </ul>
            <ul className='cards__items1'>
            <Carditem

             src='images/s-3.jpg'
             text='Inspection and Diagnostics'
             label='Vehicle health'
             desc='Dont know what is wrong with your vehicle Dont worry we are here yo find out the problem and solve it.'
             btntext='Book now'
             path='/Automobile'
             className='card1'
/>

              <Carditem
                src='images/s-7.jpg'
                text='Cleaning and protection'
                label='Interior and exterior'
                desc='Let us make your car clean and protected with our special packs.'
                path='/Travel'
                btntext='Book now'
                className='card1'
              />
            </ul>
            <div>

            </div>

          </div>


        </div>


      </div>
      <Footer />
    </div>
  );
}
export default Periodicservices;