import React from "react";
import { createUseStyles } from "react-jss";

//styles
const css = createUseStyles({
  textarea: {
    height: "81px !important",
    overflow: "auto",
  },
  button: {
    marginBottom: "20px",
    background: "var(--gradient-color)",
  },
});

export default (props) => {
  const styles = css();
  return (
    <div className="code">
      <textarea
        ref={props.refProp}
        value={props.codeText}
        readOnly
        className={styles.textarea}
      />
      <button onClick={props.copyText} className={styles.button}>
        Copy Code
      </button>
    </div>
  );
};
