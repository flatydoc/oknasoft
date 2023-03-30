import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import phone from "../../assets/icons/phone.svg";
import support_agent from "../../assets/icons/support_agent.svg";

export const Sidebar = ({
  isActive,
  setIsActive,
  scrollToForm,
  scrollToAdv,
  scrollToRev,
  scrollToWorks,
  scrollToCalc,
}) => {
  return (
    <div
      onClick={() => setIsActive(false)}
      className={classNames(styles.sidebar, {
        [styles.active]: isActive,
      })}
    >
      <nav className={styles.sidebarList}>
        <div className={styles.phone}>
          <img className={styles.contactsImg} src={phone} alt="" />
          <a href="tel:+48536065365">+48 536-065-365</a>
        </div>

        <button onClick={scrollToForm} className={styles.feedbackBtn}>
          <img className={styles.contactsImg} src={support_agent} alt="" />
          <p className={styles.feedbackBtnText}>Poproś o telefon</p>
        </button>

        <button onClick={scrollToAdv} className={styles.sidebarItem}>
          NASZE ATUTY
        </button>
        <button onClick={scrollToCalc} className={styles.sidebarItem}>
          KALKULACJA KOSZTÓW
        </button>
        <button onClick={scrollToWorks} className={styles.sidebarItem}>
          NASZA PRACA
        </button>
        <button onClick={scrollToRev} className={styles.sidebarItem}>
          RECENZJE KLIENTÓW
        </button>
      </nav>
    </div>
  );
};
