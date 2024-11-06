import React from 'react';
import '../App.css';
import './About.css';

function About() {
    return (
    <div className='hero-container1'>
      <img src="/images/Categories-img.jpg"/>

        <div>
            <header class="main-header">
            <h1 class="web-name web-name-large">AMS AUTOMOBILES</h1>
            </header>

            <section class="content-section container">
                <h2 class="section-header">ABOUT</h2>
                <p className='about-p'> E-conference or electronic conference is one of the latest additions that has really helped the business owners to a great extent. 
                This method is quite popular worldwide for organizing conferences and video calls with clients and other business partners. 
                The meaning of e conference is electronic conference where people participate in a conference through an electronic medium and not like a traditional conference that is held in a room. 
                This method has become extremely important in the business world because of its endless benefits. </p>
                <p className='about-p'>This e-conference has indeed saved a lot of time as well as money. 
                Prior to this concept of electronic conferencing, people used to travel from different parts of the world to gather at a place for the business meetings. 
                This not only consumed a lot of time but also a lot of money as travel cost. So, it is quite clear that e-conferencing can save a lot of time and money of your business </p>
            </section>
        </div>
    </div>
    );
}

export default About;