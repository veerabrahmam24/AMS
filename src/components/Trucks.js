import React from 'react';
import '../App.css';
import Carditem from './Carditem';
import './cards2.css';
import Footer from './Footer';
import './Trucks.css'
import { scards } from './smallcards';


function Trucks() {
  return (
    <div className='hero-container1'>
      <img src="/images/Categories-img.jpg"/>
      <div>

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>
              <Carditem
                src='images/truck1-img.jpg' 
                text='Cars & Sports Utility Vehicles'
                label='Cars & sports'
                desc='Check out mouthwatering deals on cars and sports vehicles and get our latest deals by booking online.'
                path='/Travel'
                btntext='Book now'
                className='card1'
              />
              <Carditem
                src='images/truck2-img.jpg'
                text='Two wheelers'
                label='Motorbikes'
                desc='Dream wilder with these amazing two wheelers.'
                path='/services'
                btntext='Book now'
                className='card2'
              />

              <Carditem

                src='images/truck3-img.jpg'
                text='Trucks'
                label='Trucks'
                desc='Get transportation trucks for your business to save time and money. Find latest deals on heavy load trucks'
                btntext='Book now'
                path='/Automobile'
                className='card1'
              />
            </ul>
            <ul className='cards__items1'>
              <Carditem
                src='images/truck4-img.jpg' 
                text='Cars & Sports Utility Vehicles'
                label='Cars & sports'
                desc='Check out mouthwatering deals on cars and sports vehicles and get our latest deals by booking online.'
                path='/Travel'
                btntext='Book now'
                className='card1'
              />
              <Carditem
                src='images/truck5-img.jpg'
                text='Two wheelers'
                label='Motorbikes'
                desc='Dream wilder with these amazing two wheelers.'
                path='/services'
                btntext='Book now'
                className='card2'
              />

              <Carditem

                src='images/truck6-img.jpg'
                text='Trucks'
                label='Trucks'
                desc='Get transportation trucks for your business to save time and money. Find latest deals on heavy load trucks'
                btntext='Book now'
                path='/Automobile'
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
export default Trucks;