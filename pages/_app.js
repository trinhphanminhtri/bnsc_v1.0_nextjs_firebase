import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Benison</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Công ty TNHH Thực phẩm và Giải khát BENISON được thành lập vào năm 2022, trụ sở tại số 59 Mạc Đỉnh Chi, quận 1, Tp. Hồ Chí Minh. Công ty chúng tôi chuyên cung cấp thực phẩm và nước giải khát..."
        />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
