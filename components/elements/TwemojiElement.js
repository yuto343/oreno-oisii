import React from "react";
import twemoji from "twemoji";

export default function TwemojiElement({ emoji }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: "svg",
          ext: ".svg",
        }),
      }}
    ></div>
  );
}
