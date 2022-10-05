export enum AppRoute {
  Catalog = '/catalog',
  Warranty = '/warranty',
  Delivery = '/delivery',
  About = '/about',
  Basket = '/basket',
  NotFound = '/*',
  ProductCard = '/catalog/:id'
}


export enum ApiRoute {
  CamerasList = '/cameras',
  Camera = '/cameras/{id}',
  CameraReviews = '/cameras/{id}/reviews',
  SimilarList = '/cameras/{id}/similar',
  Promo = '/promo',
  Review = '/reviews',
  Coupon = '/coupons',
  Order = '/orders',
}
