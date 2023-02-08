import React from "react";
import "./Smallb.css";
import { useState } from "react";
const Smallb = () => {
  return (
    <div className="smallb">
      <div className="smallbc">
        <button className="btn">All Sections</button>
        <button className="btn">Physics</button>
        <button className="btn">Chemistry</button>
        <button className="btn">Maths</button>
      </div>
      {/* <hr className="hrline" /> */}
    </div>
  );
};

export default Smallb;
