import React from "react";
import { createUseStyles } from "react-jss";

type codeProps = {
  refProp: any,
  codeText: any,
  copyText: any,
}

//styles
const css = createUseStyles({
  input: {
    height: "50px !important",
    overflow: "auto",
    border: "none",
    borderRadius: "2px 0 0 2px",
    flexGrow: 1,
    padding: "0 16px",
    fontSize: "20px",
  },
  button: {
    background: "var(--primary-color)",
    height: "50px !important",
    margin: 0,
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 700,
    "&:hover": {
      background: "var(--primary-color-hover)"
    }
  },
  code: {
    display: "flex",
    margin: "20px auto",
    maxWidth: "600px",
    zIndex: 3,
    position: "relative",
    //marginBottom: "100px",
  },
  "@media (max-width: 548px)": {
    code: {
      flexDirection: "column"
    },
    input: {
      marginBottom: "10px",
      fontSize: "16px"
    }
  },
  "@media (max-width: 332px)": {
    input: {
      fontSize: "10px"
    }
  }
});

const Code = ({ refProp, codeText, copyText }: codeProps) => {
  const styles = css();
  return (
    <div className={styles.code}>
      <input
        ref={refProp}
        value={codeText}
        readOnly
        className={styles.input}
      />
      <button onClick={copyText} className={styles.button}>
        Copy
      </button>
    </div>
  );
};

export default Code;
