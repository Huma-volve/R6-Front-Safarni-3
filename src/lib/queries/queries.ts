import { useQuery } from "@tanstack/react-query";

import {
    getRecommendedTours,
    getSearchLocations,
    getTours,
    getTrendingTours,
} from "../api/api";
import { QUERY_KEYS } from "./queryKeys";
import type { IFilterTour } from "@/types";

export function useGetRecommendedTours() {
    const { isPending, data, error } = useQuery({
        queryKey: [QUERY_KEYS.GET_RECOMMENDED_TOURS],
        queryFn: getRecommendedTours,
        retry: false,
    });

    return { isPending, data, error };
}

export function useGetTours(filter: IFilterTour) {
    const { isPending, data, error } = useQuery({
        queryKey: [filter, QUERY_KEYS.GET_TOURS],
        queryFn: () => getTours(filter),
        retry: false,
    });

    return { isPending, data, error };
}

export function useGetTrendingTours() {
    const { isPending, data, error } = useQuery({
        queryKey: [QUERY_KEYS.GET_TRENDING_TOURS],
        queryFn: getTrendingTours,
        retry: false,
    });

    return { isPending, data, error };
}

export function useGetSearchLocation(key: string) {
    const { isPending, data, error } = useQuery({
        queryKey: [key, QUERY_KEYS.GET_SEARCH_LOCATIONS],
        queryFn: () => getSearchLocations(key),
        retry: false,
    });

    return { isPending, data, error };
}
