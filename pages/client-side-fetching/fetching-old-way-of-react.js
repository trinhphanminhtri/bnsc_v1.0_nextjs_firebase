import { useEffect, useState } from "react";
import { Container, Col } from "reactstrap";

const OldWayOfReactFetching = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://bnscv1nextjs-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);
  console.log(sales);

  if (isLoading) {
    <p>Loading...</p>;
  }

  /** đoạn if bên dưới fix lỗi map is undefined */
  if (!sales) {
    return <p>No Data Yet</p>;
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

export default OldWayOfReactFetching;

/**
 * đầu tiên isLoading: false và useState của sales và setSales chưa xác định
 * cách React làm việc: useEffect chỉ thực thi effect function sau khi nội dung trong component được chạy và render lần đầu tiên
 * đây là lý do khi sales.map báo lỗi vì code chạy lần đầu tiên do cách React làm việc + sales chưa được định nghĩa lần đầu
 */
