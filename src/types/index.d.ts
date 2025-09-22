// user & profile

export interface LikeButtonProps {
  id: number;
}

export type IUserContext = {
  getUserInfo: () => Promise<void>;
  UpdateUserInfo: (data: any) => Promise<void>;
  deleteAccount: () => Promise<void>;
};
export interface IUserInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IUserUpdateData {
  name: string;
  email: string;
  phone: string;
}

export interface IUserContext {
  num: number;
  userInfo: IUserInfo | null;
  getUserInfo: () => Promise<void>;
  UpdateUserInfo: (data: IUserUpdateData) => Promise<void>;
  deleteAccount: () => Promise<void>;
  getBookingHistory: () => Promise<void>;
}

//favorite

export type ITour = {
  id: number;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
  views: number;
  is_recommended: boolean;
  is_favorite: boolean;
  rating: number;
};

export interface FavoriteContextType {
  favorites: Favorite[];
  getFavorites: () => Promise<AxiosResponse<any> | void>;
  addToFavorites: (id: number) => Promise<void>;
  deleteFromFavorites: (id: number) => Promise<void>;
}

export interface FavoriteProviderProps {
  children: ReactNode;
}

export interface Favorite {
  id: number;
}

//--------------------------------------------------------

export interface FlightBooking {
  id: number;
  booking_date: string;
  flight_id: string;
  seat_id: string;
}

export interface CarCategory {
  name: string;
  image_url: string;
}

export interface CarData {
  model: string;
  transmission: string;
  seats: number;
  fuel_type: string;
  category: CarCategory;
}

export interface CarBooking {
  id: number;
  car: CarData;
}

export interface TourBooking {
  id: number;
  tour_id: number;
  tour_title: string;
  total_price: number;
  seats_count: number;
}

export interface RoomBooking {
  id: number;
  check_in_date: string;
  check_out_date: string;
}

export interface TourImageMap {
  [tourId: number]: string;
}
