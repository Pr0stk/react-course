import React from "react"
import classes from "./MyButton.module.css";

const MyButton = ({props, children}) => {
    return (
        <button className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton;