import PostsGrid from "../posts/posts-grid";
import classes from "./all-posts.module.css";

const AllPosts = (props) => {
  const { items } = props;
  return (
    <section className={classes.posts}>
      <h1>Bảng tin hoạt động của công ty</h1>
      <PostsGrid posts={items} />
    </section>
  );
};

export default AllPosts;
