import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { createUseStyles } from "react-jss";
import Swal from "sweetalert2";
import "./swal-theme.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Box from "./components/box";
import Code from "./components/code";
import Controller from "./components/controller";

//Styles
const css = createUseStyles({
  boxContainer: {
    position: "relative",
    maxWidth: "300px",
    margin: "0 auto",
    border: "3px dashed var(--text-color)",
    "z-index": "3",
  },
});

function App() {
  //State
  const [top, setTop] = useState(50);
  const [right, setRight] = useState(25);
  const [bottom, setBottom] = useState(50);
  const [left, setLeft] = useState(25);

  //Functions
  function handleChange(val) {
    return function (e) {
      eval(`${val}(e.target.value)`);
    };
  }

  function alertMsg() {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    }).fire({
      icon: "success",
      title: "Text copied successfully",
    });

    //debugger
  }

  function copyText() {
    //Copy Text
    codeAreaRef.current.select();
    document.execCommand("copy");

    alertMsg();
  }

  //Variables
  const borderStyle = `${top}% ${right}% ${bottom}% ${left}%`;
  const codeText = `-webkit-border-radius: ${borderStyle}; 
-moz-border-radius: ${borderStyle}; 
border-radius: ${borderStyle};
    `;
  const codeAreaRef = useRef(null);
  const styles = css();
  const boxWidth = "300px";

  return (
    <>
      <Header />
      <div className={styles.boxContainer}>
        <Controller
          top="-5px"
          left="0px"
          right="unset"
          bottom="unset"
          width={boxWidth}
          value={top}
          handleChange={handleChange("setTop")}
          name="top"
        />
        <Controller
          top="48%"
          left="unset"
          right="-153px"
          bottom="unset"
          width={boxWidth}
          rotate="rotate(90deg)"
          value={right}
          handleChange={handleChange("setRight")}
          name="right"
        />
        <Controller
          top="unset"
          left="0px"
          right="unset"
          bottom="-5px"
          width={boxWidth}
          rotate="rotate(180deg)"
          value={bottom}
          handleChange={handleChange("setBottom")}
          name="bottom"
        />
        <Controller
          top="48%"
          left="-153px"
          right="unset"
          bottom="unset"
          width={boxWidth}
          rotate="rotate(-90deg)"
          value={left}
          handleChange={handleChange("setLeft")}
          name="left"
        />
        <Box border={borderStyle} value={top} />
      </div>
      <Code refProp={codeAreaRef} codeText={codeText} copyText={copyText} />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
