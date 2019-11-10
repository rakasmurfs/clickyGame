import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper col-10 offset-1">{props.children}</div>;
}

export default Wrapper;