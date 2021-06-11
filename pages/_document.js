import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Maxks" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notification" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
