import React from "react";
import Image from "next/image";
import Typed from "react-typed";
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
          <Typed
            className={styles.catchText}
            strings={[
              `This blog is made with Next.js, micro CMS, and Vercel. <br />I'm aiming to improve the performance of websites.`,
            ]}
            typeSpeed={20}
            startDelay={500}
            backDelay={2000}
            loop
          />
        </div>
      </div>
    </>
  );
};
export default MainVisual;
