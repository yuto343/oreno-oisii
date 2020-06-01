import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ReactMarkDown from "react-markdown";
import Layout from "../../layout/Layout";
import ThumbnailContainer from "../../components/elements/ThumbnailContainer";
import TwemojiElement from "../../components/elements/TwemojiElement";
import SkillBar from "../../components/SkillBar";

function recipe({ postData, params }) {
  //   console.log(postData);
  //   console.log(params);

  return (
    <Layout params={postData.category} title={params.recipe}>
      <ThumbnailContainer
        imageName={postData.thumbnail}
        imageDir={params.recipe}
      />
      <div className="px-3 md:w-3/4 md:mx-auto">
        <div className="justify-end items-center mt-3  flex">
          <div className="w-6">
            <TwemojiElement emoji="📝" />
          </div>
          <div>{postData.date}</div>
          {postData.modified && (
            <div className="flex">
              <div className="w-6 ml-3">
                <TwemojiElement emoji="🛠" />
              </div>
              <div>{postData.modified}</div>
            </div>
          )}
        </div>
        <p>熟練度</p>
        <SkillBar skillLevel={postData.level} />
        <h1 className="text-xl mt-3">{postData.title}</h1>
        <div className="mt-3 pb-10 pj-recipe-content">
          <ReactMarkDown source={postData.content} />
        </div>
      </div>
    </Layout>
  );
}

export default recipe;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.recipe);
  return {
    props: {
      params,
      postData,
    },
  };
}
