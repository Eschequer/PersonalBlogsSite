import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileData = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileData);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const posts = fs.readdirSync(postsDirectory);

  const fetchedPosts = posts.map((post) => getPostData(post));

  return fetchedPosts.sort((postA, postB) => postA - postB);
}

export function getFeaturedPosts() {
  const posts = getAllPosts();

  return posts.filter((post) => post.isFeatured);
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
