import React from "react";
import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignin, ...otherProps }) =>

(
    <button onClick={otherProps.onClick} className={`${isGoogleSignin ? 'google-signin-button' : ''} custom-button`}>{children}</button>
);


export default CustomButton;