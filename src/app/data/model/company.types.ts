export interface Company {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  distance: string;
  image: string;
  description: string;
  phone: string;
  hours: string;
  verified: boolean;
  featured?: boolean;
}
