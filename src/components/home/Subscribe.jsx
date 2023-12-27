import React,{useState} from "react";
import ClientImage from "../../assets/images/clients.jpg"
const Subscribe = () => {
    return (
        <>
        <div className="container">
                <div className="w3-stats text-center py-md-4">
                  <img src={ClientImage} className="img-responsive"/>
                  </div>
        </div>        
        <div className="subscribe">
         <div className="container">
         <div className="subscribe1">
             <h4>SIGN UP FOR NEWSLETTER !</h4>
           </div>
             <div className="subscribe2">
             <div className="form">
                 {/* <input type="text" className="text" placeholder="Email"/> */}
                 <input placeholder="Your Email" name="email" type="email" required=""/>
                 <input type="submit" value="Submit"/>
             </div>
         </div>
         <div className="clearfix"></div>
         </div>
    </div>
    </>
    )
}
export default Subscribe;