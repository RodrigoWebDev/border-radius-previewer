import React from "react"

export default (props) => (
    <div className="code">
        <textarea ref={props.refProp} value={props.codeText} readOnly className="code-field"/>
        <button onClick={props.copyText} className="button">Copy</button>
    </div>
)