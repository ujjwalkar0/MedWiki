import { Component } from "react";



export default class Navbar extends Component {
    render() {
        return (
            <ul className="navbar">
                <div>
                    <a href="/">
                        <img src="https://www.clinisys.com/app/uploads/2022/09/Clinisys_logo_bk_rgb.svg" width={"130px"} className="logo"></img>
                    </a>
                    <div className="right">
                        <li className="navbar"><a class="active" href="#home">Home</a></li>
                        <li className="navbar"><a href="#news">News</a></li>
                        <li className="navbar"><a href="#contact">Contact</a></li>
                        <li className="navbar"><a href="#about">About</a></li>
                        <li className="navbar"><a href="/login">Login</a></li>
                    </div>
                </div>
            </ul>
        )
    }
}