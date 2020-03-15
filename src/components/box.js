import React from "react"
import {createUseStyles} from "react-jss"

const css = createUseStyles({
    box: {
        height: "100px",
        width: "100px",
        backgroundColor: "red",
        borderRadius: props => props.border,
    }
})

export default (props) => {
    console.log(props.border)
    const styles = css(props)

    console.log(styles)
    return(
        <div className={styles.box}></div>
    )
}