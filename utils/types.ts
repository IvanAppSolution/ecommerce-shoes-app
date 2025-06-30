export type RootStackParamList = {
  // No parameters for the Home screen
  Home: undefined; // Home screen does not require parameters
  ItemDetails: ProductItem; // Details screen expects ProductItem  
  Register: undefined; // Register screen does not require parameters
  Signin: undefined; // Signin screen does not require parameters
  Profile: undefined; // Profile screen does not require parameters
  CartScreen: undefined; // Cart screen does not require parameters
  Notifications: undefined; // Notifications screen does not require parameters
  Checkout: undefined; // Checkout screen does not require parameters

};

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional, as it may not be needed in all contexts
  image?: string; // Optional, for user profile images

}

export interface ProductItem {
  url: any;
  name: string;
  price: string;
  id: string; // Unique identifier for the product
  description?: string; // Optional, for product descriptions
  category?: string; // Optional, for product categories
  rating?: number; // Optional, for product ratings
  stock?: number; // Optional, for product stock availability
  images?: string[]; // Optional, for product images if multiple are available
 
}