import React, { useState } from "react";
import styles from "./../../App.module.css";

function Asks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.contentAsks}>
    <div className={styles.container}>
    <div className={styles.parentDivAsks}>
    <div className={styles.titleAsks}>
        <h2>Вопросы и ответы по благоустройству</h2>
    </div>
    <div className={styles.faqMainContainer}>
      {/* Accordion Item 1 */}
      <div className={styles.faqContainer}>
        <div className={styles.faqQuestion} onClick={() => toggleAccordion(0)}>
          <div className={styles.faqQuestionText}>
            <h3>Вы работаете по договору?</h3>
          </div>
          <div className={`${styles.icon} ${activeIndex === 0 ? styles.iconActive : ""}`}>
            <div className={`${styles.iconShape} ${activeIndex === 0 ? styles.iconShapeActive : ""}`}></div>
          </div>
        </div>
        <div className={`${styles.answerCont} ${activeIndex === 0 ? styles.open : ""}`}>
          <div className={styles.answer}>
            <p>
              Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className={styles.faqContainer}>
        <div className={styles.faqQuestion} onClick={() => toggleAccordion(1)}>
          <div className={styles.faqQuestionText}>
            <h3>Как оплатить ямочный ремонт дорог?</h3>
          </div>
          <div className={`${styles.icon} ${activeIndex === 1 ? styles.iconActive : ""}`}>
            <div className={`${styles.iconShape} ${activeIndex === 1 ? styles.iconShapeActive : ""}`}></div>
          </div>
        </div>
        <div className={`${styles.answerCont} ${activeIndex === 1 ? styles.open : ""}`}>
          <div className={styles.answer}>
            <p>
              Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className={styles.faqContainer}>
        <div className={styles.faqQuestion} onClick={() => toggleAccordion(2)}>
          <div className={styles.faqQuestionText}>
            <h3>Какая гарантия на работы по асфальтобетонному покрытию дорог?</h3>
          </div>
          <div className={`${styles.icon} ${activeIndex === 2 ? styles.iconActive : ""}`}>
            <div className={`${styles.iconShape} ${activeIndex === 2 ? styles.iconShapeActive : ""}`}></div>
          </div>
        </div>
        <div className={`${styles.answerCont} ${activeIndex === 2 ? styles.open : ""}`}>
          <div className={styles.answer}>
            <p>
              Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className={styles.faqContainer}>
        <div className={styles.faqQuestion} onClick={() => toggleAccordion(3)}>
          <div className={styles.faqQuestionText}>
            <h3>У вас можно заказать демонтаж на территории асфальтового покрытия?</h3>
          </div>
          <div className={`${styles.icon} ${activeIndex === 3 ? styles.iconActive : ""}`}>
            <div className={`${styles.iconShape} ${activeIndex === 3 ? styles.iconShapeActive : ""}`}></div>
          </div>
        </div>
        <div className={`${styles.answerCont} ${activeIndex === 3 ? styles.open : ""}`}>
          <div className={styles.answer}>
            <p>
              Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Item 5 */}
      <div className={styles.faqContainer}>
        <div className={styles.faqQuestion} onClick={() => toggleAccordion(4)}>
          <div className={styles.faqQuestionText}>
            <h3>Как рассчитывается стоимость работ по укладке асфальта территории?</h3>
          </div>
          <div className={`${styles.icon} ${activeIndex === 4 ? styles.iconActive : ""}`}>
            <div className={`${styles.iconShape} ${activeIndex === 4 ? styles.iconShapeActive : ""}`}></div>
          </div>
        </div>
        <div className={`${styles.answerCont} ${activeIndex === 4 ? styles.open : ""}`}>
          <div className={styles.answer}>
            <p>
              Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Asks;
