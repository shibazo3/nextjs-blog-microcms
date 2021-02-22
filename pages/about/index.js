import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/index";
import styles from "./about.module.css";

export default function About(props) {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Next.jsのブログです。当サイトはNext.jsにまつわる情報を掲載しています。"
        />
      </Head>
      <section className={styles.container}>
        <h2 className={styles.heading1}>About</h2>
        <section className={styles.inner}>
          <h3 className={styles.heading2}>このサイトについて</h3>
          <p>当サイトはNext.jsにまつわる情報を掲載しています</p>
        </section>
        <section className={styles.inner}>
          <h3 className={styles.heading2}>採用について</h3>
          <p>
            現在中途および新卒の採用を行っております。詳しくは
            <Link href="/contact/" className={styles.link}>
              コンタクトフォーム
            </Link>
            よりお問い合わせください。
          </p>
        </section>
      </section>
    </Layout>
  );
}
