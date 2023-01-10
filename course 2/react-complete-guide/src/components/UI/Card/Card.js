import React from "react";
import "./card.css";

export default function (props) {
  console.log(props);
  return <div className={"card " + props.className}>{props.children}</div>;
}
