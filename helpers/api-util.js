export async function getAllProducts() {
  const response = await fetch(
    "https://bnscv1nextjs-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({ id: key, ...data[key] });
  }
  return products;
}

export async function getFeaturedProducts() {
  const featuredProducts = await getAllProducts();
  return featuredProducts.filter((item) => item.isFeatured);
}

export async function getAllNewArrivals() {
  const allNewArrivals = await getAllProducts();
  return allNewArrivals.filter((item) => item.isNewArrivals);
}

export async function getProductById(id) {
  const productById = await getAllProducts();
  return productById.find((item) => item.id === id);
}

export async function getProductByCategory(category) {
  const productByCategory = await getAllProducts();
  return productByCategory.filter((item) => item.category === category);
}
