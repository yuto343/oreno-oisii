import Layout from "../layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import PostCard from "../components/PostCard";
export default function IndexPage({ allPostsData }) {
  return (
    <Layout>
      <ul className="mt-3">
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
        {/* <li className="bg-white rounded-md pj-category-border-color border shadow w-11/12 mx-auto">
          <div className="flex p-2">
            <div className="w-1/3">
              <ImageContainer imageUrl="pictures/test.jpeg" />
            </div>
            <h2 className="px-2 w-2/3">
              サーモンのムニエルABCDEとかですが、もっとタイトルが伸びる可能性もあると思います
            </h2>
          </div>
          <div></div>
        </li> */}
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
