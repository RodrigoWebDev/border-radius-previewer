import React from "react";
import "./box.css"

type boxProps = {
  border: string
}

const Box = (props: boxProps) => {
  return <div className="box" style={{ borderRadius: props.border }}></div>;
};

export default Box
