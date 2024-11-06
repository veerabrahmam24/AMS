import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSighnup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-cont'>
      <video src="/videos/video-6.mp4" autoPlay loop muted/>
      <div className='form-container'>
    
        <div className='form-content-left'>
         <h1>Come on!</h1>
         <p>join with us</p>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </>
  );
};

export default Form;