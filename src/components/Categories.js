import React from 'react';
import '../App.css';
import Carditem from './Carditem';
import './cards2.css';
import Footer from './Footer';
import './Categories.css'
import { scards } from './smallcards';


function categ() {
  return (
    <div className='hero-container1'>
      <img src="/images/Categories-img.jpg"/>
      <div>

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>
              <Carditem
                src='images/sports.jpg' 
                text='Cars & Sports Utility Vehicles'
                label='Cars & sports'
                desc='Check out mouthwatering deals on cars and sports vehicles and get our latest deals by booking online.'
                path='/Cars'
                btntext='Book now'
                className='card1'
              />
              <Carditem
                src='images/Bikes.jpg'
                text='Two wheelers'
                label='Motorbikes'
                desc='Dream wilder with these amazing two wheelers.'
                path='/Bikes'
                btntext='Book now'
                className='card2'
              />

              <Carditem

                src='images/Trucks.jpg'
                text='Trucks'
                label='Trucks'
                desc='Get transportation trucks for your business to save time and money. Find latest deals on heavy load trucks'
                btntext='Book now'
                path='/Trucks'
                className='card1'
              />
              <Carditem

               src='images/accessories.jpg'
               text='Accessories'
               label='Accessories'
               desc='Make your journey more comfortable,safe and stylish with our latest automobile accessories.'
               btntext='Book now'
               path='/Accessories'
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
export default categ;