import React from "react";
import ImageContainer from "./elements/ImageContainer";

function PostCard({ postTitle, postImageUrl, postImageDir }) {
  return (
    <li className=" mt-3 bg-white rounded-md pj-category-border-color border shadow w-11/12 mx-auto">
      <div className="flex p-2">
        <div className="w-1/3">
          <ImageContainer imageName={postImageUrl} imageDir={postImageDir} />
        </div>
        <h2 className="px-2 w-2/3">{postTitle}</h2>
      </div>
      <div></div>
    </li>
  );
}

export default PostCard;
