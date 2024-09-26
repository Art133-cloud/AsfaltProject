import React from "react";
import styles from './../../App.module.css';
function Input ({placeholder}) {
    return (
        <input type="text" placeholder={placeholder} required/>
    )
} 
function InputZone () {
    return (
        <div className={styles.inputZone}>
            <h5>Онлайн заявка</h5>
            <form>
            <Input placeholder="Имя"/>
            <Input placeholder="Телефон"/>
            <textarea placeholder="Описание работ"></textarea>
            <button>Отправить заявку</button>
            </form>
        </div>
    )
}
function SectionWithBackground () {
    return (
        <div className={styles.contentSectionWithBackground}>
            <div className={styles.container}>
                <div className={styles.parentDivForSectionWithBackground}>
                <h1>Строительство дорог И Благоустройство прилегающих территорий</h1>
                </div>
                <InputZone />
            </div>
        </div>
    )
}
export default SectionWithBackground;