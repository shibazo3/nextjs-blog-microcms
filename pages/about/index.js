import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../../components/index";
import Table from "../../components/UIKit/Table/Table";
import styles from "./about.module.css";

export default function About(props) {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Hello Next Blogのaboutページです。管理人プロフィールを掲載しています。"
        />
      </Head>
      <section className={styles.container}>
        <h2 className={styles.heading1}>About</h2>
        <section className={styles.inner}>
          <h3 className={styles.heading2}>このサイトについて</h3>
          <p>当ブログはフロントエンドにまつわる情報を掲載しています。</p>
        </section>
        <section className={styles.inner}>
          <h3 className={styles.heading3}>管理人プロフィール</h3>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.profile}
              src={"/profile.jpg"}
              width={200}
              height={200}
              alt={""}
            />
          </div>
          <Table title="名前" desc="柴田翼（Tsubasa Shibata）" />
          <Table title="生年月日" desc="1994/7/13" delay={50} />
          <Table title="出身地" desc="秋田県秋田市" delay={100} />
          <Table title="所属" desc="株式会社クロノドライブ" delay={150} />
          <Table title="役職" desc="フロントエンドエンジニア" delay={200} />
          <Table
            title="使用言語、ツール"
            desc="HTML/CSS(SCSS)/JavaScript(React, Next, jQuery)/PHP/WordPress/Gitなど"
            delay={250}
          />
          <Table
            title="資格"
            desc="HTML5プロフェッショナル認定試験 レベル1, TOEIC L&R TEST 815点"
            delay={300}
          />
          <Table
            title="趣味"
            desc="ランニング、ドラム、お笑い、野球観戦（千葉ロッテファン）、旅行、お酒"
            delay={350}
          />
          <Table title="座右の銘" desc="It's never too late." delay={400} />

          <p className={styles.text1}>
            もっと知りたい方は
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
