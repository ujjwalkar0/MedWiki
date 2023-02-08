import { Component } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
            </>
        )
    }
}