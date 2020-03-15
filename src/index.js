import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';

import Header from "./components/header"
import Footer from "./components/footer"
import Box from "./components/box"
import Controller from "./components/controller"
import Code from "./components/code"

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

    function copyText(){
      codeAreaRef.current.select()
      document.execCommand("copy")
    }

    //Variables
    const borderStyle = `${tl}px ${tr}px ${br}px ${bl}px`
    const codeText = `border-radius: ${borderStyle};`
    const codeAreaRef = useRef(null)

    return (
      <div className="App">
        <Header/>
        <Box border={borderStyle}/>
        <div className="row">
          <Controller value={tl} handleChange={handleChange("setTl")}/>
          <Controller value={tr} handleChange={handleChange("setTr")}/>
          <Controller value={bl} handleChange={handleChange("setBl")}/>
          <Controller value={br} handleChange={handleChange("setBr")}/>
        </div>
        <Code refProp={codeAreaRef} codeText={codeText} copyText={copyText}/>
        <Footer/>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
