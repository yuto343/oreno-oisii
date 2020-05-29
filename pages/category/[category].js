import React from "react";
import { getFilteredPostsData } from "../../lib/posts";
import { getAllCategoryNames } from "../../lib/categories";
import Layout from "../../layout/Layout";
import PostCard from "../../components/PostCard";
function category({ filteredData, params }) {
  // console.log(filteredData);

  return (
    <Layout params={params.category} title={params.category}>
      <ul className="mt-3 md:w-3/4 lg:w-1/2 md:mx-auto">
        {filteredData.map((post, idx) => {
          return (
            <PostCard
              key={idx}
              postTitle={post.title}
              postImageUrl={post.thumbnail}
              postImageDir={post.id}
            />
          );
        })}
      </ul>
    </Layout>
  );
}

export default category;

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const paths = getAllCategoryNames;
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const paths = getAllCategoryNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filteredData = getFilteredPostsData(params.category);
  return {
    props: {
      filteredData,
      params,
    },
  };
}
