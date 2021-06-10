import React from "react";
import Link from "next/link";
import styles from "./postOrder.module.css";
import CardBox from "../UIKit/CardBox/CardBox";
import Button from "@material-ui/core/Button";

const PostOrder = ({ blogs, pager, count, title }) => {
  let roadMore;
  const originCount = count;
  if (pager) {
    roadMore = "";
  } else {
    roadMore = (
      <Link href="/posts/">
        <Button variant="contained" color="primary">
          記事をもっと見る
        </Button>
      </Link>
    );
  }

  return (
    <>
      <section className={styles.postContainer}>
        <h2 className="heading1" data-aos="fade-up">
          {title}
        </h2>
        <div className={styles.postOrdered}>
          {blogs.map(
            (blog) =>
              count > 0 &&
              count-- && (
                <CardBox
                  title={blog.title}
                  body={blog.body}
                  desc={blog.description}
                  img={blog.img}
                  id={blog.id}
                  key={blog.id}
                  category={blog.category}
                  date={blog.publishedAt}
                  order={-count + originCount}
                />
              )
          )}
        </div>
        {roadMore}
      </section>
    </>
  );
};
export default PostOrder;
