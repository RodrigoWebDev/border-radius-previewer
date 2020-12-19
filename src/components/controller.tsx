import React from "react";
import { createUseStyles } from "react-jss";

type controllerProps = {
  rotate?: string,
  name: string,
  value: number,
  handleChange: () => void,
  position: {
    top: string,
    bottom: string,
    left: string,
    right: string,
  },
}

const Controller = (
  /*{
  rotate,
  name,
  value,
  handleChange,
  position
}*/props: controllerProps) => {
  const _rotate = props.rotate ? props.rotate : "none";

  //Styles
  const css = createUseStyles({
    input: {
      position: "absolute",
      top: props.position.top,
      bottom: props.position.bottom,
      left: props.position.left,
      right: props.position.right,
      width: `300px !important`,
      display: "block !important",
      margin: "0px !important",
      textAlign: "center !important",
      "-webkit-transform": _rotate,
      "-moz-transform": _rotate,
      "-o-transform": _rotate,
      "-ms-transform": _rotate,
      transform: _rotate,
    },
    "@media (max-width: 450px)": {
      input: {
        width: "200px !important",
      },
    },
  });

  //const styles = css(props);
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

export default Controller;