import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./mainVisual.module.css";

const MainVisual = () => {
  return (
    <>
      <div className={styles.mainVisual}>
        <Image
          src={"/mv.jpg"}
          layout="fill"
          objectFit={"cover"}
          quality={80}
          alt=""
        />
        <div className={styles.catch}>
          <h1
            data-aos="fade-right"
            data-aos-duration="600"
            className={styles.catchHeading}
          >
            Hello Next Blog
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="600"
            className={styles.catchText}
          >
            This blog was made with Next.js, micro CMS, and Vercel. <br />
            I'm aiming to improve the performance of websites.
          </p>
        </div>
      </div>
    </>
  );
};
export default MainVisual;
