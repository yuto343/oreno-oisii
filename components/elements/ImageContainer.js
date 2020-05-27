import React from "react";

function ImageContainer({ imageName, imageDir }) {
  return (
    <div className="relative">
      <img
        className="rounded-md"
        src={require(`../../posts/${imageDir}/${imageName}?trace`).trace}
      />
      <img
        src={require(`../../posts/${imageDir}/${imageName}?webp`)}
        className="z-1 block absolute top-0 right-0 rounded-md"
      />
    </div>
  );
}

export default ImageContainer;
