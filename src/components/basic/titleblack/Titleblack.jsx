import React from "react";
import styles from "./../../../App.module.css";
function TitleBlack ({text}) {
    return (
        <h2 className={styles.basicBlackTitle}>
            {text}
        </h2>
    )
}
export default TitleBlack