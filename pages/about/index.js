import Head from "next/head";
import Link from "next/link";
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
          <p>当ブログはフロントエンドにまつわる情報を掲載しています</p>
        </section>
        <section className={styles.inner}>
          <h3 className={styles.heading2}>管理人プロフィール</h3>
          <Table title="名前" desc="柴田翼（Tsubasa Shibata）" />
          <Table title="生年月日" desc="1994/7/13" />
          <Table title="出身地" desc="秋田県秋田市" />
          <Table title="所属" desc="株式会社クロノドライブ" />
          <Table title="役職" desc="フロントエンドエンジニア" />
          <Table
            title="使用言語、ツール"
            desc="HTML/CSS(SCSS)/JavaScript(React, Next, jQuery)/PHP/WordPress/Gitなど"
          />
          <Table
            title="資格"
            desc="HTML5プロフェッショナル認定試験 レベル1, TOEIC L&R TEST 785点"
          />
          <Table
            title="趣味"
            desc="ドラム、お笑い、野球観戦（千葉ロッテファン）、旅行、お酒"
          />
          <Table title="座右の銘" desc="It's never too late." />

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
