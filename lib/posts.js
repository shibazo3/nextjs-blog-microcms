import matter from "gray-matter";
import fetch from "node-fetch";
import remark from "remark";
import html from "remark-html";

export async function getAllPost(params) {
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY
        ? process.env.API_KEY
        : process.env.X_API_KEY,
    },
  };
  const response = await fetch(
    `https://ch-next-sample.microcms.io/api/v1/${params}`,
    key
  );
  const data = await response.json();
  return {
    contents: data.contents,
  };
}

export async function getAllPostIds(params) {
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY
        ? process.env.API_KEY
        : process.env.X_API_KEY,
    },
  };
  const response = await fetch(
    `https://ch-next-sample.microcms.io/api/v1/${params}`,
    key
  );
  const data = await response.json();
  const dataNames = await data.contents.map((data) => data);

  return dataNames.map((dataName) => {
    return {
      params: {
        id: dataName.id,
      },
    };
  });
}

export async function getPostData(params, id) {
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY
        ? process.env.API_KEY
        : process.env.X_API_KEY,
    },
  };
  const response = await fetch(
    `https://ch-next-sample.microcms.io/api/v1/${params}/${id}`,
    key
  );

  //Params
  const post = await response.json();
  const title = post.title;
  const editor = post.editor;
  const img = post.img ? post.img.url : "";
  const category = post.category;
  const description = post.description;
  const pubDateParams = new Date(post.publishedAt);
  const pubDate = pubDateParams.toLocaleDateString();

  //Markdown
  const matterResult = matter(post.body);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title,
    contentHtml,
    editor,
    img,
    category,
    description,
    pubDate,
  };
}
