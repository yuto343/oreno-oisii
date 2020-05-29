import React from "react";
import { Image } from "cloudinary-react";

function ThumbnailContainer({ imageName, imageDir }) {
  return (
    <div className="relative md:flex md:items-center md:justify-center md:py-20 bg-orange-300">
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
        className="block w-full rounded-md md:w-1/2 "
        publicId={imageDir}
        width="400"
        crop="fill"
        format="webp"
        gravity="auto"
      />
    </div>
  );
}

export default ThumbnailContainer;
