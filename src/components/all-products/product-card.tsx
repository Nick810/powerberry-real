import Link from "next/link"
import ImageWithSkeleton from "../image-with-skeleton";


interface Collection {
  handle: string
}

interface ProductProps {
  product: {
    node: {
      id: string;
      title: string;
      handle: string;
      featuredImage: {
        url: string;
        altText?: string | null;
      };
      collections: {
          nodes: Collection[];
      };
      priceRange: {
        minVariantPrice: {
            amount: string;
        };
        maxVariantPrice?: {
            amount: string;
        };
      };
    }
  }
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  if (!product.node.collections.nodes[0]) return

  return (
    <li key={product.node.id} className="p-1 w-1/2 md:w-1/4">
      <Link href={`/collections/${product.node.collections.nodes[0].handle}/product/${product.node.handle}`}>
        <div className="relative aspect-[3/4]">
          <ImageWithSkeleton
            src={product.node.featuredImage.url} 
            alt={product.node.featuredImage.altText || 'Product Image'}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-md mt-4 leading-4.5! comic-rf">{product.node.title}</h3>
          <p className="mt-2 text-sm"><span className="mr-1">฿</span>{(Number(product.node.priceRange.minVariantPrice.amount) * 1).toLocaleString()}</p>
        </div>
      </Link>
    </li>
)
}
export default ProductCard
