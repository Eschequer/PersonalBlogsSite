import React from "react";
import PostGrid from "./PostGrid";
import styles from "./AllPosts.module.css";

const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
