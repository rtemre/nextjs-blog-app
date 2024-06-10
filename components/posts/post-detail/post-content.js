import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POSTS = {
  slug: "getting-started-01",
  title: "Getting Started with Next.js",
  image: "getting-started-01.png",
  date: "2024-06-10",
  content: "# This is a first post",
};
function PostContent(params) {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
