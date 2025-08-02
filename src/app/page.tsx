import { ShopifyCollectionsResponse, ShopifyMetaobjectsResponse, ShopifyProductResponse } from '@/lib/shopify/types';
import { getAllCollections, getAllProducts, getMetaObjects } from "@/lib/shopify/api";
import Hero from "@/components/home/hero";
import AllCollections from '@/components/home/all-collections';
import AllProducts from '@/components/home/all-products';

type Position = 'top' | 'middle' | 'bottom'

export const dynamic = 'force-dynamic'; // Optional: forces SSR

export default async function Home() {
  const { collections }: ShopifyCollectionsResponse = await getAllCollections();
  const { products } : ShopifyProductResponse = await getAllProducts();
  const { metaobjects }: ShopifyMetaobjectsResponse = await getMetaObjects('custom');
  const heroRaw: Record<string, string> = metaobjects.edges[0].node.fields.reduce(
    (obj, item) => {
      obj[item.key] = item.value
      return obj
    },
    {} as Record<string, string>
  )
  // Build a strictly typed HeroData
  const heroData = {
    text:     heroRaw.text ?? '',
    heading:  heroRaw.heading ?? '',
    position: (heroRaw.position as Position) ?? 'middle',
  }
  const hasCollections = !collections.nodes;

  return (
    <main className="flex flex-col items-center">
      <Hero data={heroData}/> 
      {
        (hasCollections) ?? <AllCollections data={ collections.nodes } />
      }
      <AllProducts data={products.edges}/>  
    </main>
  );
}
