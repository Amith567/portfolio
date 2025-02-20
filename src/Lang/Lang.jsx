import React from "react";
import "./Lang.css";
import ActionAreaCard from "../Card/ActionAreaCard"

function Lang(props) {
  return (
    <div className="lang-container">
      <h1 id="lang">languages</h1>
      <div className="lang-content">
        {props.language.map(( Lang,index) => (
          <ActionAreaCard key={index} img={Lang.img} title={Lang.title}  state={Lang.state}/>
        ))}
      </div>
    </div>
  );
}

export default Lang;
