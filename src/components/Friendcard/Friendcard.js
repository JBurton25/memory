import React from "react";
import "./Friendcard.css";

const Friendcard = props => (
    <div className ="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt = {props.image.replace(".jpg", "")} src= {require("../../images/" + props.image)} height="150px" width="150px" />
        </div>
        </div>
);

export default Friendcard;