import React from "react";
import NavLink from "components/atoms/links/NavLink";
import styles from "components/molecules/flyouts/left/leftflyout.module.css";
import Text from "components/atoms/text";

export default function LeftSideFlyout({ toggleOpen }) {
  return (
    <aside className={styles.sideNav}>
      <Text variant="headingDark">Flyout L</Text>
      <button onClick={toggleOpen}>close</button>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/properties">Properties</NavLink>
    </aside>
  );
}
