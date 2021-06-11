import React from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../util/post-utils";
import Head from "next/head";

const HomePage = ({ posts }) => {
  if (posts) {
    return (
      <>
        <Head>
          <title>My Blog</title>
          <meta name="description" content="My personal blog site" />
        </Head>
        <Hero />
        <FeaturedPosts posts={posts} />
      </>
    );
  }
};

export default HomePage;

export async function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: { posts },
  };
}
