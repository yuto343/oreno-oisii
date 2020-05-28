import Layout from "../layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import PostCard from "../components/PostCard";
export default function IndexPage({ allPostsData }) {
  return (
    <Layout>
      <ul className="mt-3 md:w-3/4 lg:w-1/2 md:mx-auto">
        {allPostsData.map((post, idx) => {
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
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// export async function getStaticProps() {
//   const allPostsData = getFilteredPostsData("chicken");
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
