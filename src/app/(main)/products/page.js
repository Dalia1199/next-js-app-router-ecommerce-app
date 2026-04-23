import ProductsComponent from "@/components/ProductsComponent";

export const metadata = { title: "Products" };

async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=194",  
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.products ?? [];
}

export default async function Products() {
  const products = await getProducts();
  return <ProductsComponent products={products} />;
}