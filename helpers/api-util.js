// ------------ Fetching data from Firebase
export async function getAllProducts() {
  const response = await fetch(
    "https://bnscv1nextjs-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();

  // Transformed data
  const transformedData = [];
  for (const key in data) {
    transformedData.push({ id: key, ...data[key] });
  }
  return transformedData;
}
// ------------ End Fetching data from Firebase

export async function getFeaturedProducts() {
  const allProducts = await getAllProducts();
  return allProducts.filter((item) => item.isFeatured);
}

export async function getAllNewArrivals() {
  const allProducts = await getAllProducts();
  return allProducts.filter((item) => item.isNewArrivals);
}

/*
export async function getProductById(id) {
  const productById = await getAllProducts();
  return productById.find((item) => item.id === id);
}

export async function getProductByCategory(category) {
  const productByCategory = await getAllProducts();
  return productByCategory.filter((item) => item.category === category);
}

export async function getAscendingProducts() {
  const ascendingProducts = await getAllProducts();
  return ascendingProducts.sort((a, b) => a.price - b.price);
}

export async function getDescendingProducts() {
  const descendingProducts = await getAllProducts();
  return descendingProducts.sort((a, b) => b.price - a.price);
}
*/
