import React from "react";
import styles from "./../../App.module.css";
import Title from '../basic/titleyellow/Titleyellow';
import bigImg from "./../../assets/img/leftBigImg.png";
import leftTop from "./../../assets/img/topLeftImg.png";
import middleTop from "./../../assets/img/topMiddleImg.png";
import RightTop from './../../assets/img/topRightImg.png';
import leftBottom from './../../assets/img/bottomLeftImg.png';
import bottomMiddle from './../../assets/img/bottomMiddleImg.png';
import bottomright from './../../assets/img/bottomRightImg.png';
function Works () {
    const titleBase = {
        text: "Наши роботы",
        textunder: "У нас можно арендовать любую единицу техники на любой отрезок времени"
    }
    return (
        <div className={styles.worksContent}>
            <div className={styles.title}>
                <Title text = {titleBase.text} textunder = {titleBase.textunder}/>
            </div>
            <div className={styles.images}>
                <img src={bigImg} alt="photo" className={styles.bigImg}/>
                <div className={styles.lines}>

                <div className={styles.lineImages}>
                <img src={leftTop} alt="photo" />
                <img src={middleTop} alt="photo" />
                <img src={RightTop} alt="photo" />
                </div>
                <div className={styles.lineImages}>
                <img src={leftBottom} alt="photo" />
                <img src={bottomMiddle} alt="photo" />
                <img src={bottomright} alt="photo" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Works