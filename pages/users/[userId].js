const UserIdPage = (props) => {
  return <h1>{props.id }</h1>;
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userIdWithParams = params.userId

  return {
    props: {
      id: 'userid-' + userIdWithParams,
    }
  }
}
