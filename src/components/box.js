import React from "react";
import { createUseStyles } from "react-jss";

const css = createUseStyles({
  box: {
    height: "300px",
    width: "300px",
    maxWidth: "100%",
    background: "var(--primary-color)",
    borderRadius: (props) => props.border,
    margin: "0 auto",
  },
  "@media (max-width: 450px)": {
    box: {
      width: "194px",
      height: "194px",
    },
  },
});

export default (props) => {
  console.log(props.border);
  const styles = css(props);

  return <div className={styles.box}></div>;
};
