export type CameraType = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  rating: number;
  price: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  reviewCount: number;
};

export type CamerasType = CameraType [];

export type Review = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
};

export type Promo = {
  id: number;
  name: number;
  previewImg: number;
  previewImg2x: number;
  previewImgWebp: number;
  previewImgWebp2x: number;
};
