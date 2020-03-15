import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {createUseStyles} from "react-jss"
import Swal from 'sweetalert2'

import Header from "./components/header"
import Footer from "./components/footer"
import Box from "./components/box"
import Code from "./components/code"
import Controller from "./components/controller"


//Styles
const css = createUseStyles({
  container: {
    margin: "0 auto",
    maxWidth: "600px"
  },
  boxContainer : {
    position: "relative",
  }
})

function App() {

    //State
    const [tl, setTl] = useState(0)
    const [tr, setTr] = useState(0)
    const [bl, setBl] = useState(0)
    const [br, setBr] = useState(0)

    //Functions
    function handleChange(val){
      return function(e){
        eval(`${val}(e.target.value)`)
      }
    }

    function alertMsg(){
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      }).fire({
        icon: 'success',
        title: 'Text copied successfully'
      })
    }

    function copyText(){
      //Copy Text
      codeAreaRef.current.select()
      document.execCommand("copy")

      alertMsg()
    }

    //Variables
    const borderStyle = `${tl}px ${tr}px ${br}px ${bl}px`
    const codeText = `-webkit-border-radius: ${borderStyle}; 
-moz-border-radius: ${borderStyle}; 
border-radius: ${borderStyle};
    `
    const codeAreaRef = useRef(null)
    const styles = css()

    return (
      <div className={styles.container}>
        <Header/>
        <div className={styles.boxContainer}>
          <Controller top="0px" left="0px" right="unset" bottom="unset" value={tl} handleChange={handleChange("setTl")}/>
          <Controller top="0px" left="unset" right="0px" bottom="unset" value={tr} handleChange={handleChange("setTr")}/>
          <Controller top="unset" left="0px" right="unset" bottom="0px" value={bl} handleChange={handleChange("setBl")}/>
          <Controller top="unset" left="unset" right="0px" bottom="0px" value={br} handleChange={handleChange("setBr")}/>
          <Box border={borderStyle} value={tl}/>
        </div>
        <Code refProp={codeAreaRef} codeText={codeText} copyText={copyText}/>
        <Footer/>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
