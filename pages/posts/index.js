import Head from "next/head";
import { Layout, PostOrder } from "../../components/index";
import { getAllPost } from "../../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = await getAllPost("blog");
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Hello Next Blogの投稿一覧です。" />
      </Head>
      <PostOrder
        blogs={allPostsData.contents}
        pager={true}
        count={9}
        title={"POSTS"}
      />
    </Layout>
  );
}
