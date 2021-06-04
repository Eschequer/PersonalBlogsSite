import React from "react";
import styles from "./PostGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = ({ posts }) => {
  if (!posts) return null;

  return (
    posts && (
      <ul className={styles.grid}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    )
  );
};

export default PostGrid;
