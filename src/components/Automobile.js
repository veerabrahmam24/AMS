import React from 'react';
import '../App.css'
import Carditem from './Carditem';
import './cards2.css';
import Footer from './Footer';
import './Automobile.css'
import { scards } from './smallcards';


function Autmb() {
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
                path='/Periodicservices'
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

              <Carditem

                src='images/s-3.jpg'
                text='Inspection and Diagnostics'
                label='Vehicle health'
                desc='Dont know what is wrong with your vehicle Dont worry we are here yo find out the problem and solve it.'
                btntext='Book now'
                path='/Automobile'
                className='card1'
              />
            </ul>
            <ul className='cards__items1'>
              <Carditem

                src='images/s-4.jfif'
                text='Ac Services'
                label='Disinfection and repair'
                desc='Get your vehicle ac disinfected and germ free and top up the gas so your vehicle is as cool as you.'
                btntext='Book now'
                path='/Automobile'
                className='card1'
              />
              <Carditem

                src='images/s-5.jfif'
                text='Battery Care'
                label='Battery life'
                desc=' We will care for your vehicles diet by caring for its battery just as you care about your diet.'
                btntext='Book now'
                path='/Automobile'
                className='card1'
              />
              <Carditem

                src='images/s-6.jfif'
                text='Windshields, Glasses and Lights'
                label='Replacement'
                desc='Make it shine by replacing your vehicles lights.'
                btntext='Book now'
                path='/Automobile'
                className='card1'
              />
            </ul>
            <ul className='cards__items1'>


              <Carditem
                src='images/s-7.jpg'
                text='Cleaning and protection'
                label='Interior and exterior'
                desc='Let us make your car clean and protected with our special packs.'
                path='/Travel'
                btntext='Book now'
                className='card1'
              />
              <Carditem
                src='images/s-8.jfif'
                text='Break clutch and suspension'
                label='Vehicle safety'
                desc='Keeping your vehicle working well is as important as keeping it clean on the outside.Let us make your journey as safe as possible.'
                path='/services'
                btntext='Book Now'
                className='card2'
              />

              <Carditem

                src='images/s-9.jfif'
                text='Fitments'
                label='Replacement and fitting'
                desc='Front wiper blades replacement, Horn replacement, Front bumper replacement and painting, Rear bumper replacement, Timing belt replacement.'
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
export default Autmb;