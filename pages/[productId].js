import React from "react";
import path from "path";
import fs from "fs/promises";

const ProductId = (props) => {
  if (!props.product) {
    return <p>Loading!!!</p>;
  }

  return (
    <>
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
    </>
  );
};

async function getData() {
  // cwd - current working directory
  const filePath = path.join(process.cwd(), "data", "dummyBackend.json");

  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const params = ids.map((id) => {
    return { params: { productId: id } };
  });
  return {
    paths: params,
    fallback: false,
  };
}

export default ProductId;
