export enum AppRoute {
  Catalog = '/catalog',
  Warranty = '/warranty',
  Delivery = '/delivery',
  About = '/about',
  Basket = '/basket',
  NotFound = '/*',
  ProductCard = '/catalog'
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

export const TIMEOUT_SHOW_ERROR = 5000;

export enum HttpCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}
