import ProductCard from "@/components/all-products/product-card";
import Breadcrumb from "@/components/breadcrumb";;
import { getAllProducts } from "@/lib/shopify/api";

export default async function Page() {
  const { products } = await getAllProducts();
  // Must ensure all products has collection or this code needs a fix later.
  
  return (
    <main className="pt-16">
      <Breadcrumb path={ 'all products' } subPath={''} />
      <div className="mt-8 px-1">
        <h1 className="text-4xl mb-8! text-center">All Products</h1>

        <ul className="flex flex-wrap gap-y-8">
          {
            products.edges.map(product => (
              <ProductCard product={ product } key={product.node.id} />
            ))
          }
        </ul>
      </div>
    </main>
  )
}