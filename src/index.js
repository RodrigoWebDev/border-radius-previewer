import React, { useState, useRef, useEffect } from "react";
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
import BgAnimation from "./components/BgAnimation";
import Container from "./components/Container";

//Styles
const css = createUseStyles({
  boxContainer: {
    position: "relative",
    maxWidth: "300px",
    margin: "0 auto",
    border: "3px dashed var(--text-color)",
    zIndex: "3",
  },
  "@media (max-width: 450px)": {
    boxContainer: {
      maxWidth: "200px",
      height: "200px",
    },
  },
});

function App() {
  //State
  const [top, setTop] = useState(50);
  const [right, setRight] = useState(25);
  const [bottom, setBottom] = useState(50);
  const [left, setLeft] = useState(25);
  let position;

  //Variables
  const borderStyle = `${top}% ${right}% ${bottom}% ${left}%`;
  /*const codeText = `-webkit-border-radius: ${borderStyle}; 
    -moz-border-radius: ${borderStyle}; 
    border-radius: ${borderStyle};`;*/
  const codeText = `border-radius: ${borderStyle};`;
  const codeAreaRef = useRef(null);
  const styles = css();
  const boxWidth = "300px";
  let positions;


  if(desktopView()){
    positions = {
      controllerTop: {
        top:"-5px",
        left:"0px",
        right:"unset",
        bottom:"unset",
      },
      controllerRight : {
        top: "48%",
        left: "unset",
        right: "-153px",
        bottom: "unset",
      },
      controllerBotton : {
        top: "unset",
        left: "0px",
        right: "unset",
        bottom: "-5px",
      },
      controllerLeft : {
        top: "48%",
        left: "-153px",
        right: "unset",
        bottom: "unset",
      },
    }
  }else{
    positions = {
      controllerTop: {
        top: "-5px",
        left: "0",
        right: "unset",
        bottom: "unset",
      },
      controllerRight : {
        top: "50%",
        left: "unset",
        right: "-102px",
        bottom: "unset",
      },
      controllerBotton : {
        top: "unset",
        left: "0",
        right: "unset",
        bottom: "-5px",
      },
      controllerLeft : {
        top: "50%",
        left: "-102px",
        right: "unset",
        bottom: "unset",
      },
    }
  }

  function desktopView(){
    return window.innerWidth > 450;
  }

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
  }

  function copyText() {
    //Copy Text
    codeAreaRef.current.select();
    document.execCommand("copy");

    alertMsg();
  }

  return (
    <>
      <BgAnimation/>
      <Container>
        <Header />
        <div className={styles.boxContainer}>
          <Controller
            position={positions.controllerTop}
            value={top}
            handleChange={handleChange("setTop")}
            name="top"
          />
          <Controller
            position={positions.controllerRight}
            rotate="rotate(90deg)"
            value={right}
            handleChange={handleChange("setRight")}
            name="right"
          />
          <Controller
            position={positions.controllerBotton}
            rotate="rotate(180deg)"
            value={bottom}
            handleChange={handleChange("setBottom")}
            name="bottom"
          />
          <Controller
            position={positions.controllerLeft}
            rotate="rotate(-90deg)"
            value={left}
            handleChange={handleChange("setLeft")}
            name="left"
          />
          <Box border={borderStyle} value={top} />
        </div>
        <Code refProp={codeAreaRef} codeText={codeText} copyText={copyText} />
        <Footer />
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
