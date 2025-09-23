import { createContext, useState } from "react";
import type { AxiosResponse } from "axios";

import { toast } from "sonner";
import { SquareCheckBig, X } from "lucide-react";
import axios from "axios";
import type {
    Favorite,
    FavoriteContextType,
    FavoriteProviderProps,
} from "@/types";
import { useAuthContext } from "./AuthContext";

const url = "https://round5-safarnia.huma-volve.com/api";
// const token = `Bearer wOe8RL3p0vnZhTg9nRBeojpI8X5K0ZX7Jpn412rM6356533b`;

export const FavoriteContext = createContext<FavoriteContextType>({
    favorites: [],
    getFavorites: async () => {},
    addToFavorites: async () => {},
    deleteFromFavorites: async () => {},
});

export default function FavoriteContextProvider({
    children,
}: FavoriteProviderProps) {
    const [favorites, setFavorite] = useState<Favorite[]>([]);
    const { token } = useAuthContext();

    async function getFavorites(): Promise<AxiosResponse<any> | void> {
        try {
            const response = await axios.get(`${url}/favorites`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setFavorite(response.data.data);
            return response;
        } catch (error) {
            return error;
        }
    }

    async function addToFavorites(id: number): Promise<void> {
        try {
            const response = await axios.post(
                `${url}/favorites/add/${id}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast(response.data.message, {
                icon: <SquareCheckBig size={24} className="text-green-400" />,
            });
        } catch (error: any) {
            toast(error?.response?.data?.message || "Something went wrong", {
                icon: <X size={24} className="text-red-400" />,
            });
        }
    }

    async function deleteFromFavorites(id: number): Promise<void> {
        try {
            const response = await axios.delete(
                `${url}/favorites/remove/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast(response.data.message, {
                icon: <SquareCheckBig size={24} className="text-green-400" />,
            });
        } catch (error: any) {
            console.error(error);
            toast(error?.response?.data?.message || "Something went wrong", {
                icon: <X size={24} className="text-red-400" />,
            });
        }
    }

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                getFavorites,
                addToFavorites,
                deleteFromFavorites,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}
