import React from "react";
import Feature from "./Feature";
import Footer from "./Footer";
import "../Style/Feature.css";
import "../Style/Footer.css";

function Body(){
    return(
        <div className="body-content">
            <Feature />
            <div className="first-content">
               <p><span>TSF BANK</span><br></br>A Bank for the the benefits of the people</p>
            </div>
            <Footer />
        </div>
    )
}
export default Body;