import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../../components/index";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./posts.module.css";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

export default function Posts({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Posts detail</title>
        <meta
          name="description"
          content={"Next.jsのサンプルブログです。" + postData.description}
        />
      </Head>
      <section className={styles.container}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.category}>{postData.category}</div>
        <div className={styles.detail}>
          <p className={styles.editor}>
            <PersonIcon className={styles.icon} />
            {postData.editor}
          </p>
          <span className={styles.publish}>
            <QueryBuilderIcon className={styles.icon} />
            {postData.pubDate}
          </span>
        </div>
        <div>
          <>
            {postData.img && (
              <Image
                className="catch"
                src={postData.img}
                width={800}
                height={500}
                layout="responsive"
                objectFit={"cover"}
                quality={80}
                alt={postData.title}
              />
            )}
            <style jsx global>
              {`
                .catch {
                  margin-bottom: 30px !important;
                }
              `}
            </style>
          </>
        </div>
        <section
          className={styles.postContainer}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className={styles.link}>
          <Link href="/posts/">
            <Button variant="contained" color="primary">
              投稿一覧へ
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds("blog");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData("blog", params.id);
  return {
    props: {
      postData,
    },
  };
}
