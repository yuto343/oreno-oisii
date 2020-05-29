import Nav from "../components/nav";
import Head from "next/head";
import twemoji from "twemoji";
export default function Layout({ children, params, title, image }) {
  return (
    <div className="min-h-screen pj-background-color pj-text-color">
      <Head>
        <title>{title ? `${title} | oreno-oisii` : "oreno-oisii"}</title>
        <meta
          name="description"
          content="これは僕が飲食店を経営している両親から教えてもらったレシピを記録し、知見をアップデートておくためのサイトです。"
        />
        <meta name="keyword" content="料理、レシピ、おいしい、男飯" />
        {/* -- ▼OGPの設定 --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={title ? `${title} | oreno-oisii` : "oreno-oisii"}
        />
        <meta
          property="og:description"
          content="これは僕が飲食店を経営している両親から教えてもらったレシピを記録し、知見をアップデートておくためのサイトです。"
        />
        <meta property="og:url" content="https://oreno-oisii.tokyo" />
        <meta property="og:image" content={image ? image : "/images/ogp.png"} />
        <meta property="og:site_name" content="oreno-oisii.com" />
        <meta property="og:locale" content="ja_JP" />
        {/* -- ▼Twitter Cardsの設定--*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="oreno-oisii.com" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <Nav params={params} />
      <div className="w-full">{children}</div>
    </div>
  );
}
