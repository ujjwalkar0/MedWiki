import { Component } from "react";

export default class SignupForm extends Component {
    render() {
        return (
            <div className="signupComponent">
                <center>
                    <form className="signupForm" method="dialog">
                        <h3>Sign Up</h3>
                        <input type={"text"} name="firstname" className="signupInput" placeholder="First Name" />
                        <input type={"text"} name="lastname" className="signupInput" placeholder="Last Name" />
                        <input type={"text"} name="mobileNo" className="signupInput" placeholder="Mobile Number" />
                        <input type={"text"} name="emailId" className="signupInput" placeholder="Email Id" />
                        <input type={"text"} name="password" className="signupInput" placeholder="Password" />
                        <input type={"text"} name="confirm_password" className="signupInput" placeholder="Confirm Password" />
                        <center>
                            <button type="submit" className="signupButton">Signup</button>
                            <button type="submit" className="signupWithMicrosoftButton">Signup with Microsoft</button>
                        </center>
                    </form>
                </center>
            </div >
        )
    }
}