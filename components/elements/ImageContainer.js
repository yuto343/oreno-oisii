import React from "react";
import { Image } from "cloudinary-react";

function ImageContainer({ imageName, imageDir }) {
  return (
    <div className="relative">
      {/* <img
        className="rounded-md"
        src={require(`../../posts/${imageDir}/${imageName}?trace`).trace}
      /> */}
      {/* <img
        src={require(`../../posts/${imageDir}/${imageName}?webp`)}
        className="z-1 block absolute top-0 right-0 rounded-md"
      /> */}
      <Image
        cloudName="dceadmun7"
        className="z-1 block  rounded-md"
        publicId={imageDir}
        width="150"
        height="150"
        crop="fill"
        format="jpeg"
        gravity="auto"
        alt={imageDir}
      />
    </div>
  );
}

export default ImageContainer;
