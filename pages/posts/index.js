import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
const DUMMY_POSTS = [
  {
    slug: "getting-started-01",
    title: "Getting Started with Next.js",
    image: "getting-started-01.png",
    excerpt:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    date: "2024-06-10",
  },
  {
    slug: "getting-started-02",
    title: "Getting Started with Next.js",
    image: "getting-started-02.png",
    excerpt:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    date: "2024-06-10",
  },
  {
    slug: "getting-started-03",
    title: "Getting Started with Next.js",
    image: "getting-started-03.png",
    excerpt:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    date: "2024-06-10",
  },
  {
    slug: "getting-started-04",
    title: "Getting Started with Next.js",
    image: "getting-started-04.png",
    excerpt:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    date: "2024-06-10",
  },
];
function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}
export default AllPostsPage;

export function getStaticProps(params) {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
