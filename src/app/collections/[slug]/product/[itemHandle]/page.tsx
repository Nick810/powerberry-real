import Breadcrumb from "@/components/breadcrumb";
import Product from "@/components/product/product";
import RecommendedProducts from "@/components/product/recommended-products";
import { getAllProducts, getMetaObjects, getProductByHandle, getRecommendedProducts } from "@/lib/shopify/api";
import { ShopifyMetaobjectsResponse, ShopifyProductResponse } from "@/lib/shopify/types";

export async function generateStaticParams() {
  const { products }: ShopifyProductResponse = await getAllProducts();
  const params = products.edges.flatMap(({ node }) =>
    node.collections.nodes.map(collection => ({
      slug: collection.handle,
      itemHandle: node.handle,
    }))
  );

  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; itemHandle: string }>
}) {
  const { slug, itemHandle } = await params;
  const { product } = await getProductByHandle(itemHandle);
  const { productRecommendations } = await getRecommendedProducts(itemHandle);
  const { metaobjects }: ShopifyMetaobjectsResponse = await getMetaObjects('color_map');
  
  const colorMap = JSON.parse(metaobjects.edges[0].node.fields[0].value);
  
  return (
    <main className="pt-16">
      <Breadcrumb path={slug} subPath={product?.title} />
      <Product product={product} colorMap={colorMap} />

      <div className="pt-24 px-1">
        <h2 className="text-4xl mb-8! pl-[5%]">Let&apos;s pair up</h2>
        <RecommendedProducts products={productRecommendations} collectionHandle={slug} />
      </div>
    </main>
  )
}
