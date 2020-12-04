import React from "react";
import { createUseStyles } from "react-jss";

const css = createUseStyles({
  row: {
    display: "flex",
  },
});

export default (props) => {
  const styles = css(props);

  return <div className={styles.row}>{props.children}</div>;
};
