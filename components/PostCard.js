import React from "react";
import ImageContainer from "./elements/ImageContainer";
import Link from "next/link";

function PostCard({ postTitle, postImageUrl, postImageDir }) {
  return (
    <li className=" mt-3 bg-white rounded-md pj-category-border-color border shadow w-11/12 mx-auto">
      <Link href="/recipes/[recipe]" as={`/recipes/${postImageDir}`}>
        <a>
          <div className="flex p-2">
            <div>
              <ImageContainer
                imageName={postImageUrl}
                imageDir={postImageDir}
              />
            </div>
            <h2 className="px-2 w-2/3 md:px-2">{postTitle}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostCard;
