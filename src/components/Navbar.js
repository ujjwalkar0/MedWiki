import { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <ul className="navbar">
                <div>
                    <img src="https://www.clinisys.com/app/uploads/2022/09/Clinisys_logo_bk_rgb.svg" width={"100px"} className="logo"></img>
                    <div className="right">
                        <li className="navbar"><a class="active" href="#home">Home</a></li>
                        <li className="navbar"><a href="#news">News</a></li>
                        <li className="navbar"><a href="#contact">Contact</a></li>
                        <li className="navbar"><a href="#about">About</a></li>
                    </div>
                </div>
            </ul>
        )
    }
}