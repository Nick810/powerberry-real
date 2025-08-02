import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/collections/product-card";
import { getAllCollections, getCollectionByHandle } from "@/lib/shopify/api"
import { ShopifyCollectionsResponse } from "@/lib/shopify/types";

export async function generateStaticParams() {
  const { collections }: ShopifyCollectionsResponse = await getAllCollections();

  return collections.nodes.map(node  => ({
    slug: node.handle
  }))
}

export default async function Page({ 
  params,
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const { collection } = await getCollectionByHandle(slug);
  
  return (
    <main className="pt-16">
      <Breadcrumb path={slug} subPath={''} />
      <h1 className="text-4xl text-center mb-8!">{collection?.title}</h1>
      <ul className="flex flex-wrap space-y-4 md:space-y-8">
        {
          collection?.products?.nodes.map(( node ) => (
            <ProductCard product={ node } key={ node.id } slug={ slug } />
          ))
        }
      </ul>
    </main>
  )
}