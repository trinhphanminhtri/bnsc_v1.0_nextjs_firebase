import classes from "./featured-posts.module.css";
import PostsGrid from "./posts-grid"

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      {/* <h2>FeaturedPosts</h2> */}
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
