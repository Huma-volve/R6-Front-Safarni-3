import { createContext, useState, ReactNode } from 'react';
import type { AxiosResponse } from 'axios';

import { toast } from 'sonner';
import { SquareCheckBig, X } from 'lucide-react';
import axios from 'axios';
import type { FavoriteContextType, FavoriteProviderProps } from '@/types';


const url = 'https://round5-safarnia.huma-volve.com/api';
const token = `Bearer 98|mkI1jzh8xwq6PySoa4RPE66HCCgDSNlY89IiZxvE692c509f`;



export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  getFavorites: async () => {},
  addToFavorites: async () => {},
  deleteFromFavorites: async () => {},
});



export default function FavoriteContextProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorite] = useState<Favorite[]>([]);

  async function getFavorites(): Promise<AxiosResponse<any> | void> {
    try {
      const response = await axios.get(`${url}/favorites`, {
        headers: {
          Authorization: token,
        },
      });
      setFavorite(response.data.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function addToFavorites(id: number): Promise<void> {
    try {
      const response = await axios.post(`${url}/favorites/add/${id}`, null, {
        headers: {
          Authorization: token,
        },
      });

      toast(response.data.message, {
        icon: <SquareCheckBig size={24} className="text-green-400" />,
      });
    } catch (error: any) {
      console.error(error);
      toast(error?.response?.data?.message || 'Something went wrong', {
        icon: <X size={24} className="text-red-400" />,
      });
    }
  }

  async function deleteFromFavorites(id: number): Promise<void> {
    try {
      const response = await axios.delete(`${url}/favorites/remove/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      setFavorite(response.data.data);
      toast(response.data.message, {
        icon: <SquareCheckBig size={24} className="text-green-400" />,
      });
    } catch (error: any) {
      console.error(error);
      toast(error?.response?.data?.message || 'Something went wrong', {
        icon: <X size={24} className="text-red-400" />,
      });
    }
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, getFavorites, addToFavorites, deleteFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
