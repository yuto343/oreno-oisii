import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="preload"
            href="/fonts/m-plus-rounded-1c-v10-latin_japanese-regular.woff"
            as="font"
            crossOrigin=""
          />
          {/* 
          とりあえずwoffだけでいいのでコメントアウト
          <link
            rel="preload"
            href="/fonts/m-plus-rounded-1c-v10-latin_japanese-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/m-plus-rounded-1c-v10-latin_japanese-regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/m-plus-rounded-1c-v10-latin_japanese-regular.svg"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/m-plus-rounded-1c-v10-latin_japanese-regular.eot"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
