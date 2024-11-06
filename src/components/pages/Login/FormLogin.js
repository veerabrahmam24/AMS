import React from 'react';
import validate from './Validateinfo';
import useForm2 from './useForm2';
import './Form2.css';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' method="POST" noValidate>
        <h1>
          Log In
        </h1>
       
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
           
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        <button className='form-input-btn' type='submit'>
          Log in
        </button>
        <span className='form-input-login'>
         Forgot Password ? Click <a href='#'>here</a>
        </span>
        <ol>
        <li><a href="https://www.facebook.com/" class="fab fa-facebook-f"></a></li>
        <li><a href="https://www.instagram.com/" class="fab fa-instagram"></a></li>
        <li><a href="https://www.twitter.com/" class="fab fa-twitter"></a></li>
        <li><a href="https://www.google.com/" class="fab fa-google"></a></li>
        <li><a href="https://www.linkedin.com/" class="fab fa-linkedin"></a></li>

        
      </ol>
      </form>
    </div>
  );
};

export default FormLogin;