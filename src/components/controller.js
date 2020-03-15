import React from "react"

export default (props) => {
    return(
        <div className="col">
            <input onChange={props.handleChange} type="number" value={props.value}/>
        </div>
    )
}