import Head from "next/head";
import { Layout, MainForm } from "../../components/index";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Hello Next Blogのお問い合わせページです。ご依頼やご質問などはこちらからお気軽にお問い合わせください。"
        />
      </Head>
      contact
      <MainForm />
    </Layout>
  );
}
