import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.css";
import Button from "@material-ui/core/Button";

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolioContainer}>
        <h2 className="heading1">MY PORTFOLIO</h2>
        <div className={styles.pfOrdered}>
          <Link href="/">
            <div className={styles.pfContent}>
              <Image
                className={styles.pfContentImg}
                width={250}
                height={150}
                objectFit={"cover"}
                src="/portfolio.jpg"
                alt=""
              />
              <h3 className={styles.pfTitle}>title</h3>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.pfContent}>
              <Image
                className={styles.pfContentImg}
                width={250}
                height={150}
                objectFit={"cover"}
                src="/portfolio.jpg"
                alt=""
              />
              <h3 className={styles.pfTitle}>title</h3>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.pfContent}>
              <Image
                className={styles.pfContentImg}
                width={250}
                height={150}
                objectFit={"cover"}
                src="/portfolio.jpg"
                alt=""
              />
              <h4 className={styles.pfTitle}>title</h4>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.pfContent}>
              <Image
                className={styles.pfContentImg}
                width={250}
                height={150}
                objectFit={"cover"}
                src="/portfolio.jpg"
                alt=""
              />
              <h3 className={styles.pfTitle}>title</h3>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.pfContent}>
              <Image
                className={styles.pfContentImg}
                width={250}
                height={150}
                objectFit={"cover"}
                src="/portfolio.jpg"
                alt=""
              />
              <h3 className={styles.pfTitle}>title</h3>
            </div>
          </Link>
        </div>
        <Link href="/">
          <Button variant="outlined" color="primary">
            <span>実績一覧へ</span>
          </Button>
        </Link>
      </section>
    </>
  );
};
export default Portfolio;
