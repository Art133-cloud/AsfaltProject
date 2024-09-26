import React from "react";
import styles from "./../../App.module.css";
import Title from './../basic/titleblack/Titleblack';
import asfaltbeton from './../../assets/img/asfaltbeton.png';
import greyder from './../../assets/img/greyder.png';
import amkador from './../../assets/img/amkador.png';
import minipogruzchik from './../../assets/img/minipogruzchik.png';
import katka from './../../assets/img/katka.png';
import katok from './../../assets/img/katok.png';
import tonar from './../../assets/img/tonar.png';
import trall from './../../assets/img/tral.png';
function CardTechnology ({src, textTechnology}) {
    return (
        <div className={styles.technologyCard}>
            <img src={src} alt="photo" />
            <p>{textTechnology}</p>
        </div>
    )
}
function Technology () {
    const technology = [
        {
            src: asfaltbeton,
            text: "укладчик асфальтобетона"
        },
        {
            src: greyder,
            text: "Грейдер"
        },
        {
            src: amkador,
            text: "Погрузчик амкадор"
        },
        {
            src: minipogruzchik,
            text: "Минипогрузчик"
        },
        {
            src: katka,
            text: "4 катка"
        },
        {
            src: katok,
            text: "4 т каток"
        },
        {
            src: tonar,
            text: "Тонар"
        },
        {
            src: trall,
            text: "Тралл"
        },
    ]
    return (
        <div className={styles.contentTechnology}>
            <div className={styles.container}>
                <div className={styles.parentContentTechnology}>
                    <div className={styles.titleTechnology}>
                        <Title text="НАша ТЕХНИКА"/>
                    </div>
                    <div className={styles.cardTechnology}>
                        {technology.map((item,index) => {
                            return (
                                <CardTechnology 
                                key = {index} src = {item.src} textTechnology = {item.text}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Technology
