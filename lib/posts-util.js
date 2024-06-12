import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier?.replace(/\.md$/, ""); // remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts(params) {
  const postsFiles = getPostFiles();

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
