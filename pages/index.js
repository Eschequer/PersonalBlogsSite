import React from "react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const HomePage = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={product.id}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export async function getStaticProps(context) {
  // cdw - current working directory
  const filePath = path.join(process.cwd(), "data", "dummyBackend.json");

  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  console.log(context);

  return {
    props: {
      ...data,
    },
    revalidate: 30,
  };
}

export default HomePage;
