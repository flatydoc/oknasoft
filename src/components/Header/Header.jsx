import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/icons/logo.png";
import phone from "../../assets/icons/phone.svg";
import support_agent from "../../assets/icons/support_agent.svg";
import styles from "./Header.module.scss";

import { Sidebar } from "../Sidebar/Sidebar";
import { BurgerBtn } from "../ui/BurgerBtn/BurderBtn";

export const Header = ({
  scrollToAdv,
  scrollToWorks,
  scrollToRev,
  scrollToForm,
  scrollToCalc,
}) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const sidebarActiveHandler = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="OknaSoft logo" />
          <div className={styles.logoText}>
            <h2 className={styles.logoTitle}>OknaSoft</h2>
            <p className={styles.logoSubtitle}>Elastyczna fabryka szkła</p>
          </div>
        </div>
      </NavLink>
      <div className={styles.contacts}>
        <div className={styles.phone}>
          <img className={styles.contactsImg} src={phone} alt="" />
          <a href="tel:+48536065365">+48 536-065-365</a>
        </div>

        <button onClick={scrollToForm} className={styles.feedbackBtn}>
          <img className={styles.contactsImg} src={support_agent} alt="" />
          <p className={styles.feedbackBtnText}>Poproś o telefon</p>
        </button>

        <BurgerBtn event={sidebarActiveHandler} sidebarStatus={sidebarActive} />
        <Sidebar
          isActive={sidebarActive}
          setIsActive={setSidebarActive}
          scrollToForm={scrollToForm}
          scrollToAdv={scrollToAdv}
          scrollToWorks={scrollToWorks}
          scrollToRev={scrollToRev}
          scrollToCalc={scrollToCalc}
        />
      </div>
    </header>
  );
};
