import type { Dispatch, SetStateAction } from "react";

export type INewUser = {
    name: string;
    email: string;
    password: string;
};

export type IUserCredentials = {
    email: string;
    password: string;
};

export type IUserInfo = {
    name: string;
    email: string;
    phone: string;
    country: string;
    image: string;
};

export type IContextType = {
    token: string | null;
    setToken: Dispatch<SetStateAction<null>>;
    user: IUserInfo;
    setUser: Dispatch<SetStateAction<IUserInfo>>;
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
