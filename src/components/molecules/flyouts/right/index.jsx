import React from "react";
import NavLink from "components/atoms/links/NavLink";
import styles from "components/organisms/navs/left";

export default function RightSideFlyout() {
  return (
    <aside className={styles.sideNav}>
      <h2 className={styles.title}>Navigation</h2>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/properties">Properties</NavLink>
        </li>
      </ul>
    </aside>
  );
}
