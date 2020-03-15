import React from "react"
import {createUseStyles} from "react-jss"

//Styles
const css = createUseStyles({
    controller: {
        position: "absolute",
        top: props => props.top,
        bottom: props => props.bottom,
        left: props => props.left,
        right: props => props.right,
    },
    input: {
        width: "auto !important",
        maxWidth: "none !important",
        display: "block !important",
        width: "45px !important",
        padding: "10px !important",
        margin: "0px !important",
        textAlign: "center !important",
    }
})

export default (props) => {
    const styles = css(props)
    return(
        <div className={styles.controller}>
            <input className={styles.input} onChange={props.handleChange} type="number" value={props.value}/>
        </div>
    )
}