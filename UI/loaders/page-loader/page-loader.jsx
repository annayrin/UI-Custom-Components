import React from "react";
import classes from "./page-loader.module.css";

const PageLoader = () => {

    return (
        <div className={classes.pageLoader}>
            <h1 className={classes.loading}>
                <span className={classes.let1}>l</span>
                <span className={classes.let2}>o</span>
                <span className={classes.let3}>a</span>
                <span className={classes.let4}>d</span>
                <span className={classes.let5}>i</span>
                <span className={classes.let6}>n</span>
                <span className={classes.let7}>g</span>
            </h1>
        </div>
    )
}

export default PageLoader