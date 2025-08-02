import { gql } from 'graphql-request';

export const GET_PRODUCT_BY_HANDLE_QUERY = gql`
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      title
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        nodes {
          availableForSale
          id
          image {
            altText
            id
            src
            url
          }
          priceV2 {
            amount
          }
          title
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS_QUERY = gql`
  query getAllProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          collections(first: 10) {
            nodes {
              handle
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;

export const GET_MENU_QUERY = gql`
  query getMainMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;

export const GET_METAFIELD_QUERY = gql`
  query GetHeroMetaobjects($type: String!, $first: Int!) {
    metaobjects(type: $type, first: $first) {
      edges {
        node {
          id
          handle
          type
          fields {
            key
            value
          }
        }
      }
    }
  }
`;

export const GET_ALL_COLLECTIONS_QUERY = gql`
  query getAllCollections($first: Int = 10) {
    collections(first: $first) {
      nodes {
        id
        handle
        title
        metafields(identifiers: [{ namespace: "custom", key: "button_color_for_home_page" }]) {
          key
          value
        }
        image {
          altText
          url
        }
      }
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE_QUERY = gql`
  query getCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      title
      products(first: 10) {
        nodes {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;

export const GET_RECOMMENDED_PRODUCTS_QUERY = gql`
  query getRecommendedProducts($productHandle: String!) {
    productRecommendations(productHandle: $productHandle) {
      availableForSale
      title
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
        altText
      }
    }
  }
`;  