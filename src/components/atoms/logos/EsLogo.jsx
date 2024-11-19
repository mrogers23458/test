import logoImage from "assets/logos/es_logo.png";
import styles from "components/atoms/logos/EsLogo.module.css";

export default function EsLogo() {
  return <img className={styles.eslogo} src={logoImage} alt="company logo" />;
}
