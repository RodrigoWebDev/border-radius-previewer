import React, { ReactNode } from "react";
import "./bg-animation.css";
import { createUseStyles } from "react-jss";

type containerProps = {
	children: ReactNode
}

const Container = ({ children }: containerProps) => {
	const css = createUseStyles({
		container: {
			zIndex: 3,
			position: "relative"
		}
	})

	return <div className={css().container}>{children}</div >

};

export default Container
