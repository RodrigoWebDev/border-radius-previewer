import React from "react";
import { createUseStyles } from "react-jss";

//styles
const css = createUseStyles({
  input: {
    height: "50px !important",
    overflow: "auto",
    border: "none",
    borderRadius: "2px 0 0 2px",
    flexGrow: 1,
    padding: "0 16px",
    fontSize: "20px"
  },
  button: {
    background: "var(--primary-color)",
    height: "50px !important",
    margin: 0,
    cursor: "pointer",
    "&:hover": {
      background: "var(--primary-color-hover)"
    }
  },
  code: {
    display: "flex",
    margin: "20px auto",
    maxWidth: "600px",
    zIndex: 3,
    position: "relative"
  },
  "@media (max-width: 548px)": {
    input: {
      fontSize: "12px"
    } 
  }
});

export default (props) => {
  const styles = css();
  return (
    <div className={styles.code}>
      <input
        ref={props.refProp}
        value={props.codeText}
        readOnly
        className={styles.input}
      />
      <button onClick={props.copyText} className={styles.button}>
        Copy Code
      </button>
    </div>
  );
};
