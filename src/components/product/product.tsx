'use client';

import { useCartStore } from "@/lib/shopify/cart/cart-store";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import ProductImages from "./product-images";
import ProductDrawer from "./product-drawer";
import VariantSelector from "./variant-selector";

interface ProductProps {
  colorMap: Record<string, string>
  product: {
    title: string;
    descriptionHtml: string;
    images?: {
      edges: Array<{
        node: {
          url: string;
          altText?: string | null;
        };
      }>;
    };
    priceRange: {
      minVariantPrice: {
        amount: string
        currencyCode: string
      }
    }
    variants: {
      nodes: Array<{
        availableForSale: boolean;
        id: string;
        priceV2: {
          amount: string;
        };
        title: string;
      }>;
    };
  } | null;
}

const Product: React.FC<ProductProps> = ({ product, colorMap }) => {
  const images = product?.images?.edges?.map((edge) => edge.node) || []; 
  const variants = product?.variants?.nodes || [];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const addItem = useCartStore(state => state.addItem);
  const selected = variants[selectedIndex]
  const price = useMemo(
  () => selectedVariant?.priceV2?.amount || "0",
  [selectedVariant]
);
  // const handleVariantChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedIndex(Number(e.target.value));
  // }, []);
  // const handleAddToCart = useCallback(() => {
  //   if (!selected.availableForSale) return;
  //   addItem({
  //     variantId: selected.id,
  //     varaintTitle: selected.title,
  //     title: product!.title,
  //     price: Number(selected.priceV2.amount),
  //     image: product!.images?.edges[0]?.node.url,
  //     quantity,
  //   });
  // }, [addItem, selected, quantity, product]); 
  const handleAddToCart = useCallback(() => {
    if (!selectedVariant || !selectedVariant.availableForSale) return;
    addItem({
      variantId: selectedVariant.id,
      varaintTitle: selectedVariant.title,
      title: product!.title,
      price: Number(selectedVariant.priceV2.amount),
      image: product!.images?.edges[0]?.node.url,
      quantity,
    });
  }, [addItem, selectedVariant, quantity, product]);
  const hasOneVariantAndDefaultTitle = variants.length === 1 && variants[0].title === 'Default Title'
  
  return (
    <div className="md:flex">
      { product?.images?.edges[0] && (
        <ProductImages data={images}/>
      )}
      <div className="container mt-8 md:basis-[63%]">
        <div className="flex flex-row items-start gap-8 justify-between">
          <h1 className="text-4xl leading-8!">{product?.title}</h1>
          <p className="text-xl"><span className="mr-1">฿</span>{(Number(price) * 1).toLocaleString()}</p>
        </div>

        {
          !hasOneVariantAndDefaultTitle && 
          (
            <VariantSelector
              variants={variants}
              colorMap={colorMap}
              onSelect={(variant) => setSelectedVariant(variant)}
            />
          )
        }

        <label className="block my-4 text-black">
          Quantity:
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </label>

        <button
          className="btn cursor-pointer m-auto"
          onClick={handleAddToCart}
          disabled={!selected.availableForSale}
        >
          {selected.availableForSale ? 'Add to Cart' : 'Sold Out'}
        </button>

        <div className="mt-8">
          <ProductDrawer data={{ title: 'Details', details: product?.descriptionHtml, html: true }} />
          <ProductDrawer data={{ title: 'Size & Fit', details: 'Info', html: false }} />
          <ProductDrawer data={{ title: 'Shipping & Returns', details: 'Info', html: false }} />
        </div>

      </div>
    </div>
  )
}
export default Product;