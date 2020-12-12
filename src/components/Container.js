import React from "react";
import "./bg-animation.css";
import { createUseStyles } from "react-jss";

export default (props) => {
	
	const css = createUseStyles({
		container: {
			zIndex: 3,
			position: "relative"
		}
	})
	
	return <div className={css().container}>{props.children}</div >
  
};
