import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css';
import './UniButton.css'
function Carditem(props) {
    return (
        <>
          <li className='cards__item'>
              <Link className='cards__item__link' to={props.path}>
               <figure className='cards__item__pic-wrap' data-category={props.label}>
                   <img src={props.src} alt='travel image' className='cards__item__img'/>

                   </figure>
                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>
                      {props.text}
                      </h5>
                      <h6 className='cards__item__desc'>{props.desc}</h6>
            <button
            className='crdbtn'
            onClick="location.href='https://moodle.kluniversity.in/course/view.php?id=6843'"
            
           
            >
                {props.btntext}
            </button>
       
       
                 </div>
                  </Link></li>  
        </>
        
    );

}

export default Carditem
