const DUMMY_PRODUCTS = [
  /* ------------------------ HONEY ------------------------ */
  {
<<<<<<< HEAD
    id: "honey-mallee",
=======
    id: "HMallee",
>>>>>>> dbc5ffe6be2e78e6e7d1b068f76779098c589d99
    category: "honey",
    categoryVN: "Mật ong & Siro",
    productName: "Mật Ong Hoa Mallee",
    brandName: "Buzz Honey",
    price: 306000,
    image: "images/products/honey/bush-mallee-honey.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 320g",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Phượng", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Ngọc Anh", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Quý", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },
  {
    id: "honey-meadow",
    category: "honey",
    categoryVN: "Mật ong & Siro",
    productName: "Mật Ong Đồng Cỏ",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/lavender-honey.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 500g",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Hoa", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Đạt", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Trang", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },
  {
    id: "honey-orange",
    category: "honey",
    categoryVN: "Mật ong & Siro",
    productName: "Mật Ong Hoa Cam",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/orange-blossom-honey.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 500g",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Ngọc", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Xuân", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Linh", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },
  {
    id: "honey-kid",
    category: "honey",
    categoryVN: "Mật ong & Siro",
    productName: "Mật Ong Trẻ Em",
    brandName: "Buzz Honey",
    price: 490000,
    image: "images/products/honey/kid-honey.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 500g",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Trang", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "My", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Nhung", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },

  /* ------------------------ OIL ------------------------ */
  {
    id: "oil-250",
    category: "oil",
    categoryVN: "Dầu ăn",
    productName: "Dầu Ô Liu Hữu Cơ 250ml",
    brandName: "Aus Organic & Healthy",
    price: 184000,
    image: "images/products/oil/olive-oil-250ml.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 250ml",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Ngân", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Uyên", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Thúy", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },
  {
    id: "oil-500",
    category: "oil",
    categoryVN: "Dầu ăn",
    productName: "Dầu Ô Liu Hữu Cơ 500ml",
    brandName: "Aus Organic & Healthy",
    price: 252000,
    image: "images/products/oil/olive-oil-500ml.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 500ml",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,
    reviews: [
      { name: "Quyên", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Minh", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Hiếu", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },
  {
    id: "oil-750",
    category: "oil",
    categoryVN: "Dầu ăn",
    productName: "Dầu Ô Liu Hữu Cơ Thể tích 750ml",
    brandName: "Aus Organic & Healthy",
    price: 344000,
    image: "images/products/oil/olive-oil-750ml.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 750ml",
    condition:
      "Bảo quản nơi khô ráo và thoáng mát, tránh nhiệt độ cao và ánh sáng trực tiếp",
    avgRating: 4.5,

    reviews: [
      { name: "Thủy", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Hiếu", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Phúc", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "100% Chemical Free Australian Honey. Raw honey will naturally crystallise, to turn to liquid again, warm gently. Produced from 100% Australian apiaries",
    isNewArrivals: true,
  },

  /* ------------------------ SPARKLING ------------------------ */
  {
    id: "sparkling-1068",
    category: "sparkling",
    categoryVN: "Nước uống có ga",
    productName: "Sparkling White Grape",
    brandName: "Barossa Legend Aus",
    price: 306000,
    image: "images/products/sparkling/sparkling-white.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 320g",
    condition: "Bảo quản nơi khô ráo và thoáng mát (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Thành", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Toản", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Dương", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "Sparkling grapes juice is 100% natural drink made from wine grape grown in a beautiful South Australia region. This is very refreshing drink and suitable for children from 2 years old and elder. Great for any party!",
    isNewArrivals: false,
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
    id: "sparkling-1079",
    category: "sparkling",
    categoryVN: "Nước uống có ga",
    productName: "Sparkling Dark Grape",
    brandName: "Barossa Legend Aus",
    price: 306000,
    image: "images/products/sparkling/sparkling-dark.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 320g",
    condition: "Bảo quản nơi khô ráo và thoáng mát (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Dũng", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Toàn", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Trí", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "Sparkling grapes juice is 100% natural drink made from wine grape grown in a beautiful South Australia region. This is very refreshing drink and suitable for children from 2 years old and elder. Great for any party!",
    isNewArrivals: false,
  },

<<<<<<< HEAD
  /* ------------------------ CEREAL ------------------------ */
  {
    id: "cereal-muesli",
    category: "cereal",
    categoryVN: "Ngũ cốc",
    productName: "Ngũ Cốc Hữu Cơ",
    brandName: "Aus Organic & Healthy",
    price: 156000,
    image: "images/products/nuts/muesli.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 500g",
    condition: "Bảo quản nơi khô ráo và thoáng mát",
    avgRating: 4.5,
    reviews: [
      { name: "Kim Anh", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Trúc", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Hồng", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "This perfect combination of Honey Toasted Oats and Dried Fruit with natural sweetness from sultana, pineapple, paw paw, apricots, cranberry and honey. Start to your day with a nutritious and delicious Muesli is a good choice for your healthy living plan. Great texture and taste.",
    isNewArrivals: false,
  },

  /* ------------------------ DRIED FRUIT ------------------------ */
  {
    id: "driedfruit-grapes",
    category: "driedfruit",
    categoryVN: "Thực phẩm khô",
    productName: "Nho Khô Úc",
    brandName: "Aus Organic & Healthy",
    price: 86000,
    image: "images/products/fruit-toasted/toasted-grapes.jpg",
    origin: "Được trồng và sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 250g",
    condition: "Bảo quản nơi khô ráo và thoáng mát",
    avgRating: 4.5,
    reviews: [
      { name: "Đặng", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Truyền", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Chi", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "Dried Grapes are high nutrient and antioxidant contents. It's plenty of vitamins, minerals and rich in fiber...offers a wealth of health benefits. They also make a quick and delicious snack you can enjoy at home or on the go",
    isNewArrivals: false,
  },

  /* ------------------------ NUT ------------------------ */
  {
    id: "nut-almonds",
=======
  /* ------------------------ NUT ------------------------ */
  {
    id: "NAlmonds",
>>>>>>> dbc5ffe6be2e78e6e7d1b068f76779098c589d99
    category: "nut",
    categoryVN: "Các loại đậu sấy",
    productName: "Hạnh Nhân Rang Muối",
    brandName: "Aus Organic & Healthy",
    price: 205000,
    image: "images/products/nuts/roasted-salted-almonds.jpg",
    origin: "Được trồng và sản xuất tại nước Úc (Australia)",
    netWeight: "Trọng lượng 250g",
    condition: "Bảo quản nơi khô ráo và thoáng mát",
    avgRating: 4.5,
    reviews: [
      { name: "Hào", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Hùng", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Tín", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "Roasted & Salted Almonds contain rich nutrient of protein, fiber, antioxidants, vitamins, and minerals...really health benefits. It's also a great complement to an effective weight loss because of its satiating characteristics for your diet. They are one of the most desired savory snacks by their flavor and crunchiness of the nuts that you can enjoy anytime",
    isNewArrivals: false,
  },

  /* ------------------------ WINE ------------------------ */
  {
    id: "wine-368",
    category: "wine",
    categoryVN: "Rượu",
    productName: "Vang Đỏ Unique Delicious 368",
    brandName: "Aus Legend Wine",
    price: 689000,
    image: "images/products/wine/unique-delicious-368.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 750ml",
    condition: "Bảo quản nơi khô ráo và thoáng mát (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Lâm", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Lợi", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Phúc", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "This South Australia Shiraz 2020 shows delicious ripe cherry and mulberry notes on the nose. The palate is medium to full bodied with a touch of earthy and savory spices. The wine has a great balance with delicate tannins structure that demonstrates great persistence. This would be a match made in heaven with red meat like beef or lamb and some seafood",
    isNewArrivals: true,
  },
  {
    id: "wine-568",
    category: "wine",
    categoryVN: "Rượu",
    productName: "Vang Đỏ Ecstatic Passion 568",
    brandName: "Aus Legend Wine",
    price: 689000,
    image: "images/products/wine/ecstatic-passion-568.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 750ml",
    condition: "Bảo quản nơi khô ráo và thoáng mát (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Hội", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Vũ", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Tiến", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "This South Australia Shiraz Cabernet Sauvignon 2020 was blended to create a beautiful taste and nose. It shows delicious ripe blackberries and mint. The palate is almost full bodied with a touch of plum and savory spices. It is dark in color, with cassis, black cherry flavors, rich fruitiness, high tannins and medium acidity. This would be paired with red meat like beef or lamb and some seafood",
    isNewArrivals: true,
  },
  {
    id: "wine-666",
    category: "wine",
    categoryVN: "Rượu",
    productName: "Vang Đỏ Paradise Secret 666",
    brandName: "Aus Legend Wine",
    price: 1652000,
    image: "images/products/wine/barossa-valley-666.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 750ml",
    condition: "Bảo quản nơi khô ráo và thoáng mát, (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Tiên", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Thoa", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Phấn", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      "This wine is made from one of the most well-known region for winemaking in the world - Barossa Valley. Grapes were grown with extra care and only harvested when the grapes had enough sugar and flavor. Wine are aged in oak barrels for more than 12 months. This wine has fruity, full-bodied and sweet wine with sweet notes of dark chocolate, rich and supple tannins and a heavy body. Perfectly pair with grilled meat and roast chicken or cheese",
    isNewArrivals: false,
  },
  {
    id: "wine-888",
    category: "wine",
    categoryVN: "Rượu",
    productName: "Vang Đỏ Premium Paradise 888",
    brandName: "Aus Legend Wine",
    price: 2066000,
    image: "images/products/wine/coonawarra-888.jpg",
    origin: "Sản xuất tại nước Úc (Australia)",
    netWeight: "Thể tích 750ml",
    condition: "Bảo quản nơi khô ráo và thoáng mát, (5 - 25°C)",
    avgRating: 4.5,
    reviews: [
      { name: "Tấn", reviewRating: 4.5, reviewContent: "Ngon lắm" },
      { name: "Thọ", reviewRating: 4.5, reviewContent: "Rất ngon" },
      { name: "Lộc", reviewRating: 4.5, reviewContent: "Tuyệt vời" },
    ],
    description:
      " Cabernet Sauvignon from Coonawarra has been very popular in the world of wine. With the special climate, Cabernet Sauvignon grapes grow very well with excellent flavor here. Then the wine was made with unique winemaking method and it is so beautiful to drink. This Cabernet Sauvignon are very full-bodied and have aromas of green pepper, mint, and a bit of tobacco notes emerging from aging. It is dark in color, with cassis, black cherry flavors, rich fruitiness, high tannins and high acidity. Cabernet Sauvignon wine can also be aged for 10 years or more",
    isNewArrivals: false,
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

export const getProductsById = (id) => {
  return DUMMY_PRODUCTS.find((item) => item.id === id);
};

export const getFilteredProducts = (filteredCategory) => {
  return DUMMY_PRODUCTS.filter((item) => item.category === filteredCategory);
};
