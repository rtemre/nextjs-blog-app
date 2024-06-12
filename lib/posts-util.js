import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName?.replace(/\.md$/, ""); // remove the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts(params) {
  const postsFiles = fs.readdirSync(postsDirectory);

  const postsData = postsFiles?.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = postsData.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts(params) {
  return getAllPosts().filter((post) => post.isFeatured);
}
