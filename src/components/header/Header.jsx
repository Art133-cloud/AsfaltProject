import React, { useState } from 'react';
import styles from './../../App.module.css';
import LogoHeader from './../../assets/svg/logo.svg';
import Telephone from './../../assets/svg/tel.svg'
function Logo () {
    return (
        <div className={styles.LogoBlockHeader}>
            <img src={LogoHeader} alt="photo" />
        </div>
    )
}
function Tel () {
    return (
        <div className={styles.contentTelephone}>
        <div className={styles.telContent}>
            <div className={styles.telephoneImg}>
            <img src={Telephone} alt="photo" />
            </div>
            <div className={styles.telAndButton}>
                <p>+ 8 921 123-12-12</p>
                <form>
                    <button>Заказ звонка</button>
                </form>
            </div>
        </div>
        </div>
    )
}
function HeaderMenu () {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <nav>
                <div className={styles.hamburgerMenu}>
      <input id="menu__toggle" className={styles.menuToggle} type="checkbox" />
      <label className={styles.menuBtn} htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={styles.menuBox}>
        <li><a className={styles.menuItem} href="#">Главная</a></li>
        <li><a className={styles.menuItem} href="#">Цены</a></li>
        <li><a className={styles.menuItem} href="#">Наши работы</a></li>
        <li><a className={styles.menuItem} href="#">Контакты</a></li>
        <li>
        <details>
                    <summary
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ color: isHovered ? '#ff7b00' : '#121212', cursor: 'pointer' }}
            >
                Услуги
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.244802 0.243704C0.321897 0.166451 0.41347 0.105161 0.514282 0.0633431C0.615093 0.0215252 0.723161 0 0.832302 0C0.941442 0 1.04951 0.0215252 1.15032 0.0633431C1.25113 0.105161 1.34271 0.166451 1.4198 0.243704L4.65313 3.47704L7.88647 0.243704C8.04228 0.0878888 8.25361 0.00035286 8.47397 0.00035286C8.69432 0.00035286 8.90565 0.0878888 9.06147 0.243704C9.21728 0.399518 9.30482 0.610848 9.30482 0.831204C9.30482 1.05156 9.21728 1.26289 9.06147 1.4187L5.23647 5.2437C5.15937 5.32096 5.0678 5.38225 4.96699 5.42406C4.86618 5.46588 4.75811 5.48741 4.64897 5.48741C4.53983 5.48741 4.43176 5.46588 4.33095 5.42406C4.23014 5.38225 4.13856 5.32096 4.06147 5.2437L0.236468 1.4187C-0.0801983 1.10204 -0.0801981 0.568704 0.244802 0.243704Z"
                        fill={isHovered ? '#ff7b00' : '#121212'}
                    />
                </svg>
            </summary>
                        <ul>
                            <li>Дорожное строительство</li>
                            <li>Благоустройство</li>
                            <li>Аренда техники</li>
                            <li>Асфальтирование дорог</li>
                        </ul>
                    </details>
        </li>
        <li>
        <div className={styles.telContent}>
            <div className={styles.telephoneImg}>
                <img src={Telephone} alt="photo" />
            </div>
            <div className={styles.telAndButton}>
                <p>+ 8 921 123-12-12</p>
                <form>
                    <button>Заказ звонка</button>
                </form>
            </div>
        </div>
        </li>
      </ul>
    </div>
            <ul className={styles.menuHeder}>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    <details>
                    <summary
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ color: isHovered ? '#ff7b00' : '#121212', cursor: 'pointer' }}
            >
                Услуги
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.244802 0.243704C0.321897 0.166451 0.41347 0.105161 0.514282 0.0633431C0.615093 0.0215252 0.723161 0 0.832302 0C0.941442 0 1.04951 0.0215252 1.15032 0.0633431C1.25113 0.105161 1.34271 0.166451 1.4198 0.243704L4.65313 3.47704L7.88647 0.243704C8.04228 0.0878888 8.25361 0.00035286 8.47397 0.00035286C8.69432 0.00035286 8.90565 0.0878888 9.06147 0.243704C9.21728 0.399518 9.30482 0.610848 9.30482 0.831204C9.30482 1.05156 9.21728 1.26289 9.06147 1.4187L5.23647 5.2437C5.15937 5.32096 5.0678 5.38225 4.96699 5.42406C4.86618 5.46588 4.75811 5.48741 4.64897 5.48741C4.53983 5.48741 4.43176 5.46588 4.33095 5.42406C4.23014 5.38225 4.13856 5.32096 4.06147 5.2437L0.236468 1.4187C-0.0801983 1.10204 -0.0801981 0.568704 0.244802 0.243704Z"
                        fill={isHovered ? '#ff7b00' : '#121212'}
                    />
                </svg>
            </summary>
                        <ul>
                            <li>Дорожное строительство</li>
                            <li>Благоустройство</li>
                            <li>Аренда техники</li>
                            <li>Асфальтирование дорог</li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a href="#">Цены</a>
                </li>
                <li>
                    <a href="#">Наши работы</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}
function Header () {
    return (
        <div className={styles.contentHeader}>
            <div className={styles.container}>
                <div className={styles.parentHeader}>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <HeaderMenu />
                    </div>
                    <div>
                        <Tel />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header