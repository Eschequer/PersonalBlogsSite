import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/black-cat.jpg" width={400} height={400} />
      </div>
      <h1>Hi, my name is Maxks</h1>
      <p>It is my personal blog.</p>
    </section>
  );
};

export default Hero;
