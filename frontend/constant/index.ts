export const PRODUCT_AVAILABILITY = {
  AVAILABLE: "AVAILABLE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  LOW_STOCK: "LOW_STOCK",
} as const;

export const PRODUCT_AVAILABILITY_LABELS = {
  AVAILABLE: "Available",
  OUT_OF_STOCK: "Out of stock",
  LOW_STOCK: "Low stock",
};

export const PRODUCT_LOW_STOCK_THRESHOLD = 10;

export const API_QUERY_KEY = {
  SESSION: "SESSION",
  PRODUCT_CATEGORIES: "PRODUCT_CATEGORIES",
  REGIONS: "REGIONS",
  CUSTOMER: "CUSTOMER",
  PRODUCTS: "PRODUCTS",
  WISHLIST: "WISHLIST",
  CART: "CART",
  ALL: "ALL",
} as const;

export const LOCAL_STORAGE_KEY = {
  CART_ID: "CART_ID",
  WISHLIST_ID: "WISHLIST_ID",
} as const;
