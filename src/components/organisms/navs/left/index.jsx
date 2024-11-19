import React from "react";
import styles from "components/organisms/navs/left/leftnav.module.css";
import Text from "components/atoms/text";

export default function LeftSideNav({ toggleOpen }) {
  return (
    <aside className={styles.navContainer}>
      <Text variant="headingDark">L</Text>
      <button onClick={toggleOpen}>O</button>
    </aside>
  );
}
