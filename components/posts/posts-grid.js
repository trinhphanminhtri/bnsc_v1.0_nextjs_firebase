import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import classes from "../posts/posts-grid.module.css";
import PostItem from "./post-item";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((item) => (
        <PostItem key={item.slug} post={item} />
      ))}
    </ul>
  );
};

export default PostsGrid;
