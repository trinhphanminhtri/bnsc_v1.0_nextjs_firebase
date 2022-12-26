import { collapseToast } from "react-toastify";

const UserProfile = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log("Server side code");
  console.log("Request:",req);
  console.log("Response:",res);
  return {
    props: {
      username: "Max",
    },
  };
}
