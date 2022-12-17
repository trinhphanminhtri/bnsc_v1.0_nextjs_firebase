import TruckIcon from "../components/icons/truck-icon";
import UserGroupIcon from "../components/icons/user-group-icon";
import GlobeAsiaAustralia from "../components/icons/globe-asia-australia-icon";
import HeartIcon from "../components/icons/heart-icon";

const DUMMY_SERVICES = [
  {
    icon: <TruckIcon />,
    title: "Giao hàng nhanh",
    subtitle: "Dịch vụ chuyên nghiệp",
    bg: "#e984a2",
  },
  {
    icon: <UserGroupIcon />,
    title: "Tư vấn 24/7",
    subtitle: "Năng động - Sáng tạo",
    bg: "#b9cc95",
  },
  {
    icon: <GlobeAsiaAustralia />,
    title: "Hàng nhập khẩu",
    subtitle: "Nguồn hàng từ nước Úc",
    bg: "#f8d49b",
  },
  {
    icon: <HeartIcon />,
    title: "Tốt cho sức khỏe",
    subtitle: "Giá trị dinh dưỡng cao",
    bg: "#F6E6BC",
  },
];

export const getAllServices = () => {
  return DUMMY_SERVICES;
};
