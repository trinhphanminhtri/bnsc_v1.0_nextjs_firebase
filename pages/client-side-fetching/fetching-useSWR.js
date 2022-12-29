import { useEffect, useState } from "react";
import { Container, Col } from "reactstrap";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const FetchingUseSWR = () => {
  const [sales, setSales] = useState([]);
  
  const { data, error } = useSWR(
    "https://bnscv1nextjs-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  // Transforming data
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
          // ...data[key],
        });
      }
      setSales(transformedSales);
    }
  }, [data]); // dependencies: data -> to re-run when fetching new data
  // End Transforming data
  

  if (error) {
    return <p>Failed to load</p>;
  }
  if (!data || !sales) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <Col lg="12">
        <ul className="fs-4 my-5">
          {sales.map((item) => (
            <li key={item.id}>
              {item.username} - ${item.volume}
            </li>
          ))}
        </ul>
      </Col>
    </Container>
  );
};

export default FetchingUseSWR;
