import React, { useState } from "react";
import styles from './../../App.module.css';
import Location from './../../assets/svg/location.svg';
import LocationFooter from '../../assets/svg/locationDropdown.svg';
import Dropdown from '../../assets/svg/dropdownIcon.svg'
import Mail from "../../assets/svg/mail.svg"
function DropDownInfo({ isOpen, onToggle }) {
    return (
        <div className={styles.textInfoBlack}>
            <div className={styles.dropdownInfoBlack}>
                <div onClick={onToggle} className={`${styles.summary} ${styles.forrightborder}`}>
                <img src={LocationFooter} alt="photo" />
                    <p className={styles.forUnderLine}>Информация</p>
                    <img src={Dropdown} alt="photo" />
                </div>
                {isOpen && (
                    <ul className={styles.dropDownUlFirst}>
                        <li>info</li>
                        <li>info</li>
                        <li>info</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

function DropDownInfoTwo({ isOpen, onToggle }) {
    return (
        <div className={styles.textInfoBlack}>
            <div className={styles.dropdownInfoBlack}>
                <div onClick={onToggle} className={styles.summary}>
                    <p>О компании</p>
                    <img src={Dropdown} alt="photo" />
                </div>
                {isOpen && (
                    <ul className={styles.dropDownUlSecond}>
                        <li>info</li>
                        <li>info</li>
                        <li>info</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

function ContentInfoBlack() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={styles.contentInfo}>
            <div className={styles.container}>
                <div className={styles.parentContentInfo}>
                <div className={styles.forFlexDropdown}>
                    <DropDownInfo id="1" isOpen={openId === "1"} onToggle={() => handleToggle("1")} />
                    <DropDownInfoTwo id="2" isOpen={openId === "2"} onToggle={() => handleToggle("2")} />
                </div>
                <div className={styles.forFlexMailAndLocation}>
                    <a href="#">
                        <img src={Location} alt="photo" />
                        Адрес рыбатекст
                    </a>
                    <a href="#" className={styles.leftBorder}>
                        <img src={Mail} alt="photo" />
                        <p>Мейл рыбатекст</p>                    
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContentInfoBlack;