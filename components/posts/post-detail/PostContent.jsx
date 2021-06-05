import React from "react";
import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  slug: "learning-programming-with-js",
  title: "Learning programming with JS",
  image: "learn-js.jpg",
  excerpt:
    "JavaScript is one of the most popular and seek-out programming languages!",
  date: "2021-06-04",
  content:
    "#JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.",
};

const PostContent = (/*{ post }*/) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
