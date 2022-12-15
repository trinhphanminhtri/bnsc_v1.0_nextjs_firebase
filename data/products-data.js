const DUMMY_PRODUCTS = [
  /* ------------------------ HONEY ------------------------ */
  {
    id: "HMallee",
    category: "honey",
    productName: "Mật Ong Hoa Mallee",
    brandName: "Buzz Honey",
    price: 306000,
    image: "images/products/honey/bush-mallee-honey.jpg",
    newArrivals: true,
  },
  {
    id: "HMeadow",
    category: "honey",
    productName: "Mật Ong Đồng Cỏ",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/lavender-honey.jpg",
    newArrivals: true,
  },
  {
    id: "HOrange",
    category: "honey",
    productName: "Mật Ong Hoa Cam",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/orange-blossom-honey.jpg",
    newArrivals: true,
  },
  {
    id: "HKid",
    category: "honey",
    productName: "Mật Ong Trẻ Em",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/kid-honey.jpg",
    newArrivals: true,
  },

  /* ------------------------ OIL ------------------------ */
  {
    id: "O250",
    category: "oil",
    productName: "Dầu Ô Liu Hữu Cơ 250ml",
    brandName: "Aus Organic & Healthy",
    price: 184000,
    image: "images/products/oil/olive-oil-250ml.jpg",
    newArrivals: true,
  },
  {
    id: "O500",
    category: "oil",
    productName: "Dầu Ô Liu Hữu Cơ 500ml",
    brandName: "Aus Organic & Healthy",
    price: 252000,
    image: "images/products/oil/olive-oil-500ml.jpg",
    newArrivals: true,
  },
  {
    id: "O750",
    category: "oil",
    productName: "Dầu Ô Liu Hữu Cơ 750ml",
    brandName: "Aus Organic & Healthy",
    price: 344000,
    image: "images/products/oil/olive-oil-750ml.jpg",
    newArrivals: true,
  },

  /* ------------------------ SPARKLING ------------------------ */
  {
    id: "S1068",
    category: "sparkling",
    productName: "Sparkling White Grape",
    brandName: "Barossa Legend Aus",
    price: 306000,
    image: "images/products/sparkling/sparkling-white.jpg",
    newArrivals: false,
  },
  {
    id: "S1079",
    category: "sparkling",
    productName: "Sparkling Dark Grape",
    brandName: "Barossa Legend Aus",
    price: 306000,
    image: "images/products/sparkling/sparkling-dark.jpg",
    newArrivals: false,
  },

  /* ------------------------ CEREAL ------------------------ */
  {
    id: "NMuesli",
    category: "cereal",
    productName: "Ngũ Cốc Hữu Cơ",
    brandName: "Aus Organic & Healthy",
    price: 156000,
    image: "images/products/nuts/muesli.jpg",
    newArrivals: false,
  },

  /* ------------------------ DRIED FRUIT ------------------------ */
  {
    id: "FTGrapes",
    category: "driedfruit",
    productName: "Nho Khô Úc",
    brandName: "Aus Organic & Healthy",
    price: 86000,
    image: "images/products/fruit-toasted/toasted-grapes.jpg",
    newArrivals: false,
  },

  /* ------------------------ NUT ------------------------ */
  {
    id: "NAlmonds",
    category: "nut",
    productName: "Hạnh Nhân Rang Muối",
    brandName: "Aus Organic & Healthy",
    price: 205000,
    image: "images/products/nuts/roasted-salted-almonds.jpg",
    newArrivals: false,
  },

  /* ------------------------ WINE ------------------------ */
  {
    id: "W368",
    category: "wine",
    productName: "Vang Đỏ Unique Delicious 368",
    brandName: "Aus Legend Wine",
    price: 689000,
    image: "images/products/wine/unique-delicious-368.jpg",
    newArrivals: true,
  },
  {
    id: "W568",
    category: "wine",
    productName: "Vang Đỏ Ecstatic Passion 568",
    brandName: "Aus Legend Wine",
    price: 689000,
    image: "images/products/wine/ecstatic-passion-568.jpg",
    newArrivals: true,
  },
  {
    id: "W666",
    category: "wine",
    productName: "Vang Đỏ Paradise Secret 666",
    brandName: "Aus Legend Wine",
    price: 1652000,
    image: "images/products/wine/barossa-valley-666.jpg",
    newArrivals: false,
  },
  {
    id: "W888",
    category: "wine",
    productName: "Vang Đỏ Premium Paradise 888",
    brandName: "Aus Legend Wine",
    price: 2066000,
    image: "images/products/wine/coonawarra-888.jpg",
    newArrivals: false,
  },
];

export const getAllProducts = () => {
  return DUMMY_PRODUCTS;
};

export const getFilteredProducts = (filteredCategory) => {
  return DUMMY_PRODUCTS.filter((item) => item.category === filteredCategory);
};
