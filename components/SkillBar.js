import React from "react";

function SkillBar({ skillLevel }) {
  let style = "bg-gray-500 rounded-full h-3";
  switch (skillLevel) {
    default:
      style = "bg-red-400 h-3 rounded-full w-1/4";
      break;
    case 2:
      style = "bg-orange-400 h-3 rounded-full w-1/2";
      break;
    case 3:
      style = "bg-green-400 h-3 rounded-full w-3/4";
      break;
    case 4:
      style = "bg-green-400 h-3 rounded-full w-full pj-bg-skillbar";
      break;
  }
  return (
    <div className="mx-2 mb-2">
      <div className="w-full bg-gray-300 h-3 rounded-full ">
        <div className={style}></div>
      </div>
    </div>
  );
}

export default SkillBar;
