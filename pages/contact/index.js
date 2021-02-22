import Head from "next/head";
import { Layout } from "../../components/index";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Next.jsブログのお問い合わせページです。依頼や質問などはこちらからお気軽にお問い合わせください。"
        />
      </Head>
      contact
    </Layout>
  );
}
