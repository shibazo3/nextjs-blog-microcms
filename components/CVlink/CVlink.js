import React from "react";
import Link from "next/link";
import styles from "./CVlink.module.css";
import Button from "@material-ui/core/Button";

const CVlink = () => {
  return (
    <>
      <section className={styles.CVContainer}>
        <h2 className="heading1">CONTACT</h2>
        <div className={styles.CVOrdered}>
          <p className={styles.text}>
            当ブログに関するお問い合わせやご意見をお待ちしております。
            <br />
          </p>
          <Link href="/contact/">
            <Button variant="outlined" color="primary">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CVlink;
