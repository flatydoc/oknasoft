import styles from "./Advantages.module.scss";
import ceny from "../../assets/icons/01.png";
import producja from "../../assets/icons/02.png";
import gwarancja from "../../assets/icons/03.png";
import materialy from "../../assets/icons/04.png";
import podejscie from "../../assets/icons/05.png";
import zespol from "../../assets/icons/06.png";

export const Advantages = ({ advRef }) => {
  return (
    <section ref={advRef} className={styles.advantages}>
      <h2 className={styles.title}>NASZE ATUTY</h2>
      <p className={styles.subtitle}>Dlaczego jesteśmy dla ciebie</p>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={ceny} alt="" />
          <h3 className={styles.cardTitle}>KORZYSTNE CENY</h3>
          <p className={styles.cardSubtitle}>
            Codziennie monitorujemy rynek i jesteśmy gotowi zaoferować najlepszą
            cenę.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={producja} alt="" />
          <h3 className={styles.cardTitle}>WŁASNA PRODUKCJA</h3>
          <p className={styles.cardSubtitle}>
            Kontrolujemy każdy etap produkcji oraz materiały użyte do produkcji.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={gwarancja} alt="" />
          <h3 className={styles.cardTitle}>GWARANCJA 1 ROK</h3>
          <p className={styles.cardSubtitle}>
            Na wszystkie prace udzielamy 1 rok gwarancji.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={materialy} alt="" />
          <h3 className={styles.cardTitle}>MATERIAŁY WYSOKIEJ JAKOŚCI</h3>
          <p className={styles.cardSubtitle}>
            Sprawdzamy co kupujemy i odpowiadamy za jakość okuć i materiałów.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={podejscie} alt="" />
          <h3 className={styles.cardTitle}>
            INDYWIDUALNE PODEJŚCIE DO KAŻDEGO KLIENTA
          </h3>
          <p className={styles.cardSubtitle}>
            Jesteśmy za podziałem pracy. Nad każdym projektem pracują
            specjaliści o wąskim profilu.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={zespol} alt="" />
          <h3 className={styles.cardTitle}>DOŚWIADCZONY ZESPÓŁ MONTAŻOWY</h3>
          <p className={styles.cardSubtitle}>
            Doświadczenie, które zdobyliśmy, zostanie zastosowane w Twoim
            zamówieniu, aby efekt cieszył Cię przez wiele lat.
          </p>
        </div>
      </div>
    </section>
  );
};
