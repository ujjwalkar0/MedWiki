import { Component } from "react";

export default class LoginForm extends Component {
    render() {
        return (
            <div className="loginComponent">
                <center>
                    <form className="loginForm" method="post">
                        <h3>Sign In</h3>
                        <input type={"text"} name="username" className="loginInput" placeholder="Username" />
                        <input type={"text"} name="password" className="loginInput" placeholder="Password" />
                        <center>
                            <button type="submit" className="loginButton">Login</button>
                            <button type="submit" className="loginWithMicrosoftButton">Login with Microsoft</button>
                        </center>
                    </form>
                </center>
            </div >
        )
    }
}