import { useState } from "react";

export default function Banner() {
    const [medicine, setMedicine] = useState({"hello":"abc"});
    setMedicine({"hello":"world"})
    return (
        <div>
            <div style={{ float: "left", width: "48%" }}>


            </div>
            <div style={{ float: "right", width: "48%" }}>
                <p className="bannerText">MedWiki</p>
                <form>
                    <label htmlFor="search">
                        <input type={"text"} name="search" className="search" placeholder="Write Medicine Name..."></input>
                    </label>
                    <button type="button" className="searchItem">Search</button>
                </form>
            </div>

        </div>
    )
}