import EsLogo from "components/atoms/logos/EsLogo";
import TopNavHeader from "components/molecules/headers/NavHeaders/top";
import styles from "components/organisms/navs/top/topnav.module.css";

export default function TopNav() {
  return (
    <nav className={styles.topnav}>
      <EsLogo />
      <TopNavHeader />
      <div id="bumper" />
    </nav>
  );
}
