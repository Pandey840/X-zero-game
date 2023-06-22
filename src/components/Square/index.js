import React from "react";

const Squre = (props) => {
  return (
    <div onClick={props.clicked} className="squre-div">
      <h5>{props.value}</h5>
    </div>
  );
};

export default Squre;
