import React from "react";
import { getPostsFiles, getPostData } from "../../util/post-utils";
import { useRouter } from "next/router";
import PostContent from "../../components/posts/post-detail/PostContent";
import Head from "next/head";

const PostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const postsFiles = getPostsFiles();

  const paths = postsFiles.map((postFile) => ({
    params: { slug: postFile.replace(/\.md$/, "") },
  }));

  console.log(paths);

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const fileName = context.params.slug;

  let post;

  try {
    post = getPostData(fileName);
  } catch (error) {
    console.log(`error!!!`);
    console.log(post);
  }

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post }, revalidate: 600 };
}
