import React from "react"
import {createUseStyles} from "react-jss"

const css = createUseStyles({
    title: {
        textAlign: "center",
        marginBottom: "50px",
    }
})
export default () => {
    const styles = css()
    return(
        <header className="header">
            <h1 className={styles.title}>Border Radius Previewer</h1>
        </header>
    )
}