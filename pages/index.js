import Head from "next/head";
import { Layout, PostOrder, Portfolio, CVlink } from "../components/index";
import { getAllPost } from "../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = await getAllPost("blog");
  const allPortfolioData = await getAllPost("portfolio");
  return {
    props: {
      allPostsData,
      allPortfolioData,
    },
  };
};

export default function Home({ allPostsData, allPortfolioData }) {
  return (
    <Layout home>
      <Head>
        <title>TOP</title>
        <meta
          name="description"
          content="Hello Next Blogです。フロントエンドについての記事を掲載しています。"
        />
      </Head>
      <PostOrder
        blogs={allPostsData.contents}
        pager={false}
        count={3}
        title={"NEW POSTS"}
      />
      <Portfolio portfolios={allPortfolioData.contents} count={3} />
      <CVlink />
    </Layout>
  );
}
