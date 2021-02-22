import Head from "next/head";
import { Layout, PostOrder, Portfolio, CVlink } from "../components/index";
import { getAllPost } from "../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = await getAllPost("blog");
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>TOP</title>
        <meta
          name="description"
          content="Next.jsのサンプルブログです。フロントエンドについての記事を掲載しています。"
        />
      </Head>
      <PostOrder
        blogs={allPostsData.contents}
        pager={false}
        count={3}
        title={"NEW POSTS"}
      />
      <Portfolio />
      <CVlink />
    </Layout>
  );
}
