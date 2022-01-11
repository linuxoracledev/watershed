import React from "react";
import './signin-signup.styles.scss';
import Signin from "../../component/sign-in/signin.component";
import SignUp from "../../component/sign-up/sign-up.component";

const SigninSignup = () => (
    <div className="signin-signup">
        <Signin />
        <SignUp />
    </div>
);

export default SigninSignup;