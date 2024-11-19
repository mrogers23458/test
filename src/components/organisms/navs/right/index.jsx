import React from "react";
import styles from "components/organisms/navs/right/rightnav.module.css";
import Text from "components/atoms/text";

export default function RightSideNav({ toggleOpen }) {
  return (
    <aside className={styles.navContainer}>
      <Text variant="headingDark">L</Text>
      <button onClick={toggleOpen}>O</button>
    </aside>
  );
}
