import React from "react"
import { createUseStyles } from "react-jss"

const css = createUseStyles({
    footer: {
        textAlign: "center"
    }
})

export default () => {
    const styles = css()
    return(
        <footer className={styles.footer}>
            Created by <a href="https://rqueiroz.netlify.com/">Rodrigo Queiroz</a>
        </footer>
    )
}