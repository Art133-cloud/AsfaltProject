import React from "react";
import styles from "./../../../App.module.css";
function TitleBlack ({text, textunder}) {
    return (
            <>
        <h2 className={styles.basicYellowTitle}>
            {text}
        </h2>
        <p className={styles.basicYellowTitleUnderText}>{textunder}</p>
            </>
    )
}
export default TitleBlack