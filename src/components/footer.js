import React from "react"
import { createUseStyles } from "react-jss"

const css = createUseStyles({
    footer: {
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "#2b2b2b",
        left: 0,
        padding: "10px 0",
    },
    link:{
        marginLeft: "5px"
    }
})

export default () => {
    const styles = css()
    return(
        <footer className={styles.footer}>
            Created by 
            <a target="_blank" className={styles.link} href="https://rqueiroz.netlify.com/"> Rodrigo Queiroz</a>. 
            Source code 
            <a target="_blank" className={styles.link} href="https://github.com/RodrigoWebDev/border-radius-previewer">here</a>
        </footer>
    )
}