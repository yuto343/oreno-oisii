import React from "react";
import { getFilteredPostsData } from "../../lib/posts";
import { getAllCategoryNames } from "../../lib/categories";
import Layout from "../../layout/Layout";
import PostCard from "../../components/PostCard";
function category({ filteredData }) {
  console.log(filteredData);
  return (
    <Layout>
      <ul className="mt-3">
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
  console.log(params);
  const filteredData = getFilteredPostsData(params.category);
  return {
    props: {
      filteredData,
    },
  };
}
