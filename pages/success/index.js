import Head from "next/head";
import { Layout } from "../../components/index";
import styles from "./success.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Thanks</title>
        <meta
          name="description"
          content="Hello Next Blogのお問い合わせ完了ページです。"
        />
      </Head>
      <div className={styles.container}>
        <h2 className={styles.heading1}>お問い合わせ完了</h2>
        <p className={styles.text1}>
          お問い合わせありがとうございます。
          <br />
          ご入力いただいたメールアドレス宛に、後ほど返信致しますのでご確認ください。
        </p>
      </div>
    </Layout>
  );
}
