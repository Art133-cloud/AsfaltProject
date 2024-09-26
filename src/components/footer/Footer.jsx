import React from "react";
import styles from './../../App.module.css';
import logo from './../../assets/svg/logoFooter.svg';
import tiktok from './../../assets/svg/tiktok-app-icon 1.svg';
import youtube from './../../assets/svg/youtube.svg';
import vk from './../../assets/svg/Vk.svg';
import location from './../../assets/svg/locationFooter.svg';
import tel from './../../assets/svg/telFooter.svg';
import mail from './../../assets/svg/mailFooter.svg';
function TitlesFooter ({textTitles}) {
    return (
        <div className={styles.titleFooter}>
            <h3>{textTitles}</h3>
        </div>
    )
}
function InfosTextFooter ({textInfoFooter}) {
    return (
        <div className={styles.textInfoFooter}>
            <a href="#">
            {textInfoFooter}
            </a>
        </div>
    )
}
function Footer () {
    return (
        <div className={styles.contentFooter}>
            <div className={styles.container}>
                <div className={styles.parentContentFooter}>
                    <div className={styles.topContentFooter}>
                        <div className={styles.logosFooter}>
                            <a href="#">
                            <img src={logo} alt="photo" />
                            </a>
                            <div className={styles.logosWebs}>
                                <a href="#">
                                <img src={tiktok} alt="photo" />
                                </a>
                                <a href="#">
                                <img src={youtube} alt="photo" />
                                </a>
                                <a href="#">
                                <img src={vk} alt="photo" />
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoFooter}>
                            <TitlesFooter textTitles="О компании"/>
                        <div className={styles.textsInfoFooter}>
                            <InfosTextFooter textInfoFooter="История компании"/>
                            <InfosTextFooter textInfoFooter="Партнеры"/>
                            <InfosTextFooter textInfoFooter="Контакты"/>
                            <InfosTextFooter textInfoFooter="Реквизиты"/>
                        </div>
                        </div>

                        <div className={styles.infoFooter}>
                            <TitlesFooter textTitles="Дополнительно"/>
                        <div className={styles.textsInfoFooter}>
                            <InfosTextFooter textInfoFooter="Услуги и цены"/>
                            <InfosTextFooter textInfoFooter="Наши работы"/>
                            <InfosTextFooter textInfoFooter="Вопросы и ответы "/>
                        </div>
                        </div>
                        <div className={styles.infoFooter}>
                            <TitlesFooter textTitles="Контакты"/>
                        <div className={styles.textsInfoFooter}>
                            <div className={styles.infoTextWithSvg}>
                                <a href="#">
                                <img src={location} alt="photo" />
                                </a>
                                <InfosTextFooter textInfoFooter="Адрес рыбатекст"/>
                            </div>
                            <div className={styles.infoTextWithSvg}>
                                <a href="#">
                                <img src={tel} alt="photo" />
                                </a>
                                <InfosTextFooter textInfoFooter="8 (499) 755-54-64"/>
                            </div>
                            <div className={`${styles.infoTextWithSvg} ${styles.textWithUnderlineFooter}`}>
                                <a href="#">
                                <img src={mail} alt="photo" />
                                </a>
                                <a href="#">
                                    Мейл рыбатекст
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContentFooter}>
                <div className={styles.container}>
                    <div className={styles.contentBottomFooter}>
                        <div className={styles.asfaltblago}>
                            <a href="#">© 2024 АСФАЛЬТ Благоустройство</a>
                        </div>
                        <div className={styles.lastTextFooter}>
                            <a href="#">Пользовательское соглашение </a>
                            <a href="#">Карта сайта </a>
                            <a href="#">Политика конфиденциальности </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer