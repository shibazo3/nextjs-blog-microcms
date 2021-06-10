import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.css";
import Button from "@material-ui/core/Button";
import { Modal } from "../../components/index";

const Portfolio = ({ portfolios, count }) => {
  const pfCount = portfolios.length;
  return (
    <>
      <section className={styles.portfolioContainer}>
        <h2 data-aos="fade-up" className="heading1">
          MY PORTFOLIO
        </h2>
        <div className={styles.pfOrdered}>
          {portfolios.map(
            (portfolio) =>
              count > 0 &&
              count-- && (
                <>
                  <div
                    className={styles.pfContent}
                    id={portfolio.id}
                    key={portfolio.id}
                    data-aos="fade-up"
                    data-aos-delay={-count + 3 * 100}
                    data-aos-once="false"
                  >
                    <Image
                      className={styles.pfContentImg}
                      width={300}
                      height={200}
                      objectFit={"cover"}
                      src={
                        portfolio.thumbnail.url
                          ? portfolio.thumbnail.url
                          : "/portfolio.jpg"
                      }
                      alt=""
                    />
                    <h3 className={styles.pfTitle}>{portfolio.title}</h3>
                  </div>
                </>
              )
          )}
        </div>
        {pfCount > 5 && (
          <Link href="/">
            <Button variant="outlined" color="primary">
              <span>実績一覧へ</span>
            </Button>
          </Link>
        )}
      </section>
    </>
  );
};
export default Portfolio;
