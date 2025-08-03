import { ShopifyCollectionByHandleResponse, ShopifyMetaobjectsResponse } from '@/lib/shopify/types';
import { getCollectionByHandle, getMetaObjects } from "@/lib/shopify/api";
import Hero from "@/components/home/hero";
import ProductCard from '@/components/collections/product-card';

type Position = 'top' | 'middle' | 'bottom'

export const dynamic = 'force-dynamic'; // Optional: forces SSR

export default async function Home() { 
  const { collection }: ShopifyCollectionByHandleResponse = await getCollectionByHandle('all-products');
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

  return (
    <main className="flex flex-col items-center">
      <Hero data={heroData}/> 
      <ul className="flex flex-wrap space-y-4 md:space-y-8">
        {
          collection?.products?.nodes.map(( node ) => (
            <ProductCard product={ node } key={ node.id } slug={ 'all-products' } />
          ))
        }
      </ul>
    </main>
  );
}
