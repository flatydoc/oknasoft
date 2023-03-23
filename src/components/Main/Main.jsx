import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        MIĘKKIE OKNA <br />
        <span style={{ color: "#fff" }}>ELASTYCZNE PCV</span>
      </h1>
      <p className={styles.subtitle}>od producenta</p>
      <p className={styles.listTitle}>
        Produkcja i montaż pod klucz miękkich okien o dowolnej złożoności do:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>altany i tarasy</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>werandy</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>kawiarni</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>pomieszczeń przemysłowych</span>
        </li>
      </ul>
    </div>
  );
};
