import { Fragment } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
