import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const buttons = (topic) => {
    return (
      <div>
        <button style={{background
        :'yellow'}}>{topic}</button>
      </div>
    );
  };
  const buttons2 = (topic) => {
    return (
      <div>
        <button style={{background:'red'}} >{topic}</button>
      </div>
    );
  };
  const buttons3 = (topic) => {
    return (
      <div>
        <button style={{background:'	#7CFC00'}}>{topic}</button>
      </div>
    );
  };
 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="image"
          src="http://media.oregonlive.com/parade/photo/arnoldjpg-5472b4dfe2311f51.jpg"
          alt="random-image"
        />
        <div className="sidebar__stat">
          <p>
            Time <br />
            Left:
          </p>

          <p className="sidebar__statNumber">02:39:29</p>
          <p className="arnold">Arnold Kumar</p>
        </div>
      </div>
      <div className="sidebar__top1">
        <div className="legend">
          <p>Question Pallete</p>
        </div>
        <div className="nichew">
          <div className="buttons-red">
            
            {buttons(1)}
            {buttons2(2)}
            {buttons3(3)}
            {buttons(4)}
            {buttons2(5)}
          </div>
          <div className="buttons">
            {buttons2(6)}
            {buttons(7)}
            {buttons3(8)}
            {buttons(9)}
            {buttons3(10)}
          </div>
        </div>
        <p className="legend2"></p>
        <div className="bbbbb3">
          <div className=""></div>
        </div>
      </div>

      <div className="sidebar__top1">
        <div className="legend">
          <p>Lengend (Click to View)</p>
        </div>
        <div className="niche">
          <div className="bbbbb">
            <button style={{background:'#7CFC00'}}>4Answers</button>
            <button style={{background:'#b39eb5'}}>1 Review+Ans</button>
            <button style={{background:'gray'}}>1 Dump</button>
          </div>
          <div className="bbbbb">
            <button className="hebtn" style={{background:'red'}}>2 No Answer</button>
            <button style={{background:'yellow'}}>1 Review-Ans</button>
            <button style={{background:'white'}}>1 No Visite</button>
          </div>
        </div>
        <p className="legend2">10 All Questions</p>
        <div className="bbbbb3">
          <div className="hehee">
            <button className="hebtn">Profile</button>
            <button className="hebtn">Instr</button>
          </div>
          <div className="hehee2">
            <button className="hebtn">Questions</button>
            <button className="hebtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
