// Using the FileSystem
import fs from "fs/promises";
import path from "path";
// End Using the FileSystem

import React, { Fragment } from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import AllPosts from "../../components/posts/all-posts";

const AllPostsPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Benison - Tin tức</title>
      </Head>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <AllPosts items={posts} />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  // Using the FileSystem
  const filePath = path.join(process.cwd(), "data", "dummy-posts.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: { destination: "/contact" },
    };
  }

  if (data.posts.length === 0) {
    return { notFound: true };
  }
  // End Using the FileSystem

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 60,
  };
}
