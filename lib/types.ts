export interface Package {
  id: string;
  name: string;
  tagline: string;
  priceRange: string;
  image: string;
  inclusions: string[];
}

export interface GalleryItem {
  id: string;
  alt: string;
  url: string;
}
