import React from 'react'
import {Link} from 'react-router-dom'
import './cards2.css';
import './UniButton.css'

function scards(props) {
    return (
        <>
          <li className='cards__item1'>
              <Link className='cards__item__link1' to={props.path}>
               <figure className='cards__item__pic-wrap1' data-category={props.label}>
                   <img src={props.src} alt='travel image' className='cards__item__img1'/>

                   </figure>
                  <div className='cards__item__info1'>
                      <h5 className='cards__item__text1'>
                      {props.text}
                      </h5>
                      <h6 className='cards__item__desc1'>{props.desc}</h6>
                    
            <button
            className='crdbtn1'
            onClick="location.href='https://moodle.kluniversity.in/course/view.php?id=6843'"
            
           
            >
                {props.btntext}
            </button>
       
       
                 </div>
                  </Link></li>  
        </>
        
    );

}

export default scards