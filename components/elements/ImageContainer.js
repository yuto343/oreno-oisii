import React from "react";

function ImageContainer({ imageUrl }) {
  return (
    <div className="relative">
      <img
        className="rounded-md"
        src={require(`../../public/images/${imageUrl}?trace`).trace}
      />
      <img
        src={require(`../../public/images/${imageUrl}?webp`)}
        className="z-1 block absolute top-0 right-0 rounded-md"
      />
    </div>
  );
}

export default ImageContainer;
