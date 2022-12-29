import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = [
  {
    slug: "brand-opening-01",
    title: "brand-opening",
    image: "brand-opening-01.jpg",
    date: "2022-12-27",
    content: "# This is a first post",
  },
];

const PostContent = (props) => {
  const { slug, image, content } = props;
  const imagePath = `/images/posts/${slug}/${image}`;
  return <article className={classes.content}>{content}</article>;
};

export default PostContent;
