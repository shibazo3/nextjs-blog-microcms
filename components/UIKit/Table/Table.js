import React from "react";
import styles from "./table.module.css";

const Table = (props) => {
  return (
    <>
      <dl
        data-aos="fade-right"
        data-aos-delay={props.delay}
        className={styles.table1}
      >
        <dt className={styles.table1__title}>{props.title}</dt>
        <dd className={styles.table1__desc}>{props.desc}</dd>
      </dl>
    </>
  );
};

export default Table;
