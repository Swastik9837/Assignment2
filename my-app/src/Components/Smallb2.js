import React, { useState } from "react";
import "./Smallb2.css";
const Smallb2 = ({color}) => {
  
  return (
    <div className="smallb2">
      <div className="smallbc2">
        <button className="btn2" >CLEAR RESPONCE</button>
        <button className="btn2">Review</button>
        <button className="btn2">Dump</button>
        <button className="btn2">Previous</button>
        <button className="btn2">Next</button>
      </div>
    </div>
  );
};

export default Smallb2;
