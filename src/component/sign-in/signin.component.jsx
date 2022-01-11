import React from "react";
import './signin.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: this.state.email, password: '' });
        } catch (error) {
            console.log('Error: ', error);
        }


    }

    onChangeHandler = (e) => {
        const { value, name } = e.target;

        this.setState(
            {
                [name]: value
            }
        )
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">Do you have an account?</h2>
                <span>Sign in here</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        changeHandler={this.onChangeHandler}
                        label="Email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        changeHandler={this.onChangeHandler}
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit" name="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin >Sign in with Google</CustomButton>

                    </div>

                </form>
            </div>
        )
    }
}

export default Signin;