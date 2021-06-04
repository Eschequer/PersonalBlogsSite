import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { DUMMY_POSTS } from "../../components/util/posts";

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
