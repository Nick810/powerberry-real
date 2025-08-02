import Link from "next/link"
import ImageWithSkeleton from "../image-with-skeleton"

interface ProductProps {
  product: {
    id: string
    title: string
    handle: string
    priceRange: {
      minVariantPrice: {
          amount: number;
      };
      maxVariantPrice?: {
          amount: number;
      };
    };
    featuredImage: {
      url: string;
      altText?: string | null;
    };
  }
  slug: string
}

const ProductCard: React.FC<ProductProps> = ({ product, slug }) => {

  return (
    <li key={product.id} className="p-1 w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={`/collections/${slug}/product/${product.handle}`}>
        {product.featuredImage && (
          <div className="relative aspect-[3/4]">
            <ImageWithSkeleton 
              src={product.featuredImage.url} 
              alt={product.featuredImage.altText || ''}
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="text-xl mt-4">{product.title}</h3>
          <p className="mt-2 text-sm">
            from ฿{(Number(product.priceRange.minVariantPrice.amount) * 1).toLocaleString()} - ฿{(Number(product?.priceRange?.maxVariantPrice?.amount) * 1).toLocaleString()}
          </p>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard