import type { AxiosResponse } from "axios";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type INewUser = {
    name: string;
    email: string;
    password: string;
};

export type IUserCredentials = {
    email: string;
    password: string;
};

export type IContextType = {
    token: string | null;
    setToken: Dispatch<SetStateAction<null>>;
};

export type ICategory = {
    id: number;
    title: string;
    image: string;
    path: string;
};

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

export type IFilterTour = {
    search?: string | null;
    category_id?: number;
    min_price?: number;
    max_price?: number;
    min_rating?: number;
    location?: string;
    sort_by?: string;
    sort_order?: string;
    per_age?: number;
};

export type IToursResponse = {
    data: ITour[];
    links: Links;
    meta: Meta;
};

export type Links = {
    first: string;
    last: string;
    prev: null;
    next: null;
};

export type Meta = {
    current_page: number;
    from: null;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: null;
    total: number;
};

export type Link = {
    url: null | string;
    label: string;
    page: number | null;
    active: boolean;
};

// user & profile

export interface LikeButtonProps {
    id: number;
}

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
    userInfo: IUserInfo | null;
    getUserInfo: () => Promise<void>;
    UpdateUserInfo: (data: IUserUpdateData) => Promise<void>;
    deleteAccount: () => Promise<void>;
    getBookingHistory: () => Promise<void>;
}

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
