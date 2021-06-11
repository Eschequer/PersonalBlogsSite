import React from "react";
import Image from "next/image";
import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const PostContent = ({ post }) => {
  if (!post) return null;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  function renderImg(image) {
    return <Image alt={image.alt} src={image.src} width={30} height={30} />;
  }

  function renderParagraph(paragraph) {
    const { node } = paragraph;

    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];

      if (child.type === "element" && child.tagName === "img") {
        return <div className="rewf">{paragraph.children}</div>;
      }
    }

    return <p>{paragraph.children}</p>;
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={{ p: renderParagraph, img: renderImg }}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
