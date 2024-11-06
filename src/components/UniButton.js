import React from 'react';
import './Button2.css';
import {Link} from 'react-router-dom';
const Styles =['btn--primary','btn--outline'];
const Sizes =['btn--medium','btn--large'];

export const UniButton =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle =Styles.includes(buttonStyle)?buttonStyle:Styles[0];
    const checkButtonSize =Styles.includes(buttonSize)?buttonStyle:Sizes[0];
    return(
        
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            >
                {children}
            </button>
        
    );
}

