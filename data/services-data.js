import TruckIcon from "../components/icons/truck-icon";
import UserGroupIcon from "../components/icons/user-group-icon";
import GlobeAsiaAustralia from "../components/icons/globe-asia-australia-icon";
import HeartIcon from "../components/icons/heart-icon";

const DUMMY_SERVICES = [
  {
    icon: <TruckIcon />,
    title: "Giao hàng nhanh",
    subtitle: "Dịch vụ chuyên nghiệp",
    bg: "#fdefe6",
  },
  {
    icon: <UserGroupIcon />,
    title: "Tư vấn 24/7",
    subtitle: "Năng động - Sáng tạo",
    bg: "#d6e5fb",
  },
  {
    icon: <GlobeAsiaAustralia />,
    title: "Hàng nhập khẩu",
    subtitle: "Nguồn hàng từ nước Úc",
    bg: "#ceebe9",
  },
  {
    icon: <HeartIcon />,
    title: "Tốt cho sức khỏe",
    subtitle: "Giá trị dinh dưỡng cao",
    bg: "#e2f2b2",
  },
];

export const getAllServices = () => {
  return DUMMY_SERVICES;
};
