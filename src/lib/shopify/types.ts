export interface ShopifyProductImage {
  node: {
    url: string;
    altText?: string | null;
  };
}

export interface ShopifyProductVariant {
  availableForSale: boolean
  id: string;
  title: string;
  priceV2: {
    amount: string
  }
}

export interface ShopifyProductByHandle {
  id: string;
  title: string;
  descriptionHtml: string;
  images?: {
    edges: ShopifyProductImage[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  variants: {
    nodes: ShopifyProductVariant[];
  };
}

export interface ShopifyProductByHandleResponse {
  product: ShopifyProductByHandle
}

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    handle: string;
    featuredImage: {
      url: string;
      altText?: string | null;
    };
    collections: {
      nodes: Collection[]
    }
    priceRange: {
      minVariantPrice: {
        amount: string;
      }
      maxVariantPrice?: {
        amount: string;
      }
    }
  }
}

export interface Collection {
  handle: string
}

export interface ShopifyProductResponse {
  products: {
    edges: ShopifyProduct[];
  }
}

export interface ShopifyMenuItem {
  title: string;
  url: string;
  // add other fields as needed
}

export interface ShopifyMenuResponse {
  menu: {
    id: string;
    title: string;
    items: ShopifyMenuItem[];
  };
}

export interface ShopifyMetaobjectField {
  key: string;
  value: string;
}

export interface ShopifyMetaobjectNode {
  id: string;
  handle: string;
  type: string;
  fields: ShopifyMetaobjectField[];
}

export interface ShopifyMetaobjectsResponse {
  metaobjects: {
    edges: { node: ShopifyMetaobjectNode }[];
  };
}

export interface MetaFields {
  key: string;
  value: string;
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description?: string;
  metafields: MetaFields[]
  image?: {
    url: string;
    altText?: string;
  } | null;
}

export interface ShopifyCollectionsResponse {
  collections: {
    nodes: ShopifyCollection[];
  };
}

export interface ShopifyCollectionProduct {
  id: string;
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
    altText?: string | null;
  };
}

export interface ShopifyCollectionByHandleResponse {
  collection: {
    title: string;
    products: {
      nodes: ShopifyCollectionProduct[];
    };
  } | null;
}

export interface ShopifyRecommendedProduct {
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
    altText?: string | null;
  } | null;
}

export interface ShopifyRecommendedProductsResponse {
  productRecommendations: ShopifyRecommendedProduct[];
}