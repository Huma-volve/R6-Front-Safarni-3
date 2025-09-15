export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  average_rating: number;
}

export interface HotelListProps {
  hotels: Hotel[];
}

export interface Room {
  id : number;
  price : string;
  discount: string | null;
  image :string ;
}

export interface RoomDetailstype {
  id: number;
  description: string;
  price: string;
  area: number;
  capacity: number;
  bathroom_number: number;
  image: string;
  discount: string | null;
  average_rating: number;
  total_reviews: number;
}