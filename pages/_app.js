import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
