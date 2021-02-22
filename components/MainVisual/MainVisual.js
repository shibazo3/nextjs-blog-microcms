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
          <h1 className={styles.catchHeading}>Next.js Sample Blog</h1>
          <p className={styles.catchText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            sapiente porro voluptas perspiciatis ducimus maxime nemo recusandae
            eos perferendis inventore?
          </p>
        </div>
      </div>
    </>
  );
};
export default MainVisual;
