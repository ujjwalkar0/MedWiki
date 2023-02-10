import { useState, useEffect } from "react";
import Medicine from "./Medicine";

export default function Banner() {
    const [medicine, setMedicine] = useState({ "works": [{ "title": "abc" }] });


    useEffect(() => {
        fetch("http://openlibrary.org/subjects/love.json")
            .then(response => response.json())
            .then(data => setMedicine(data))
    }, [])

    return (
        <div>
            <div style={{ float: "left", width: "48%" }}>
                <div className="medicinesList">
                    {medicine.works.map((e) =><Medicine name={e.title}/>)}
                </div>

            </div>
            <div style={{ float: "right", width: "48%" }}>
                <p className="bannerText">MedWiki</p>
                <form>
                    {medicine.hello}
                    <label htmlFor="search">
                        <input type={"text"} name="search" className="search" placeholder="Write Medicine Name..."></input>
                    </label>
                    <button type="button" className="searchItem">Search</button>
                </form>
            </div>


        </div>
    )
}