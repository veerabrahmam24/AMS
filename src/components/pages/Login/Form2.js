import React, { useState } from 'react';
import './Form2.css';
import FormLogin from './FormLogin';
import FormSuccess from '../../FormSuccess';

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-cont'>
      <video src="/videos/video-3.mp4" autoPlay loop muted/>
      <div className='form-container'>
    
        <div className='form-content-left'>
         <h1>Hi!</h1>
         <p>Nice to meet you again</p>
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </>
  );
};

export default Form2;