import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  //   console.log(fileNames);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName;
    const fullPath = path.join(postsDirectory, `${fileName}/index.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // console.log(fileContents);

    const matterResult = matter(fileContents);
    // console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function echoAiueo() {
  console.log("aiueo");
}

export function getFilteredPostsData(category) {
  const allData = getSortedPostsData();
  const filteredData = allData.filter((data) => {
    return data.category === category;
  });
  return filteredData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        recipe: fileName,
      },
    };
  });
}

export function getPostData(name) {
  const fullPath = path.join(postsDirectory, `${name}/index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    name,
    ...matterResult.data,
    content: matterResult.content,
  };
}
