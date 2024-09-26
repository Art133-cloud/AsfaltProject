import React from "react";
import styles from './../../App.module.css';
import Title from '../basic/titleblack/Titleblack';
import firstImg from './../../assets/img/firstImgCategory.png';
import secondImg from "./../../assets/img/secondImgCategory.png";
import thirdImg from "./../../assets/img/thirdImgCategory.png";
import forImg from "./../../assets/img/forImgCategory.png";
function ImgWithTextCategory ({src,textUnderImg}) {
    return (
        <div className={styles.cardCategory}>
            <img src={src} alt="photo" />
            <p>{textUnderImg}</p>
        </div>
    )
}
function Category () {
    const cardsCategory = [
        {
            src: firstImg,
            textUnderImg: "Дорожное строительство"
        },
        {
            src: secondImg,
            textUnderImg: "Благоустройство"
        },
        {
            src: thirdImg,
            textUnderImg: "Аренда техники"
        },
        {
            src: forImg,
            textUnderImg: "Асфальтирование дорог"
        }
    ]
    return (
        <div className={styles.contentCategory}>
            <div className={styles.container}>
                <div className={styles.parentContentCategory}>
                    <div className={styles.titleCategory}>
                        <Title text="КАТЕГОРИИ" />
                    </div>
                    <div className={styles.imagesCategory}>
                        {cardsCategory.map((item, index) => {
                            return (
                                <ImgWithTextCategory key = {index} src = {item.src} textUnderImg={item.textUnderImg}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category