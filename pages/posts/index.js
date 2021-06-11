import React from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../util/post-utils";

const PostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all created posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
