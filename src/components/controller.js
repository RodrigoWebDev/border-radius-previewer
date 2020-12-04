import React from "react";
import { createUseStyles } from "react-jss";

export default (props) => {
  const rotate = props.rotate ? props.rotate : "none";
  //Styles
  const css = createUseStyles({
    input: {
      position: "absolute",
      top: (props) => props.top,
      bottom: (props) => props.bottom,
      left: (props) => props.left,
      right: (props) => props.right,
      width: `${props.width} !important`,
      display: "block !important",
      margin: "0px !important",
      textAlign: "center !important",
      "-webkit-transform": rotate,
      "-moz-transform": rotate,
      "-o-transform": rotate,
      "-ms-transform": rotate,
      transform: rotate,
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
