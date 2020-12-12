import React from "react";
import { createUseStyles } from "react-jss";

export default (props) => {
  const rotate = props.rotate ? props.rotate : "none";
  
  //Styles
  const css = createUseStyles({
    input: {
      position: "absolute",
      top: (props) => props.position.top,
      bottom: (props) => props.position.bottom,
      left: (props) => props.position.left,
      right: (props) => props.position.right,
      width: `300px !important`,
      display: "block !important",
      margin: "0px !important",
      textAlign: "center !important",
      "-webkit-transform": rotate,
      "-moz-transform": rotate,
      "-o-transform": rotate,
      "-ms-transform": rotate,
      transform: rotate,
    },
    "@media (max-width: 450px)": {
      input: {
        width: "200px !important",
      },
    },
  });

  const styles = css(props);

  return (
    <input
      name={props.name}
      className={styles.input}
      onChange={props.handleChange}
      type="range"
      value={props.value}
    />
  );
};
