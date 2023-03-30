import React,{useState} from "react";
import ExecutiveLeadsImage from "../../assets/images/clients.jpg"

const Clients = () => {
    return (
<div className="container">
	<br/><br/>
            <div className="w3-stats text-center py-md-4">
			<h3 className="title-style mb-2">Some of our satisfied clients include..</h3><br/><br/>
              <img src={ExecutiveLeadsImage} className="img-responsive" />				            </div>
	</div>
    )
}

export default Clients;