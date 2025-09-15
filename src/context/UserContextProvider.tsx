import { createContext, useEffect, useState, ReactNode } from 'react';
import axios, { type AxiosResponse } from 'axios';
import { toast } from 'sonner';
import { SquareCheckBig, X } from 'lucide-react';
import type { IUserContext, IUserInfo, IUserUpdateData } from '@/types'; 

const url = 'https://round5-safarnia.huma-volve.com/api';
const token = `Bearer 228|r8QzkmooxxQVR8XVyc0WesaNQLcx099bqA6BPOdu43d3584d`;


export const UserContext = createContext<IUserContext>({
  userInfo: null,
  getUserInfo: async () => {},
  UpdateUserInfo: async () => {},
  deleteAccount: async () => {},
  getBookingHistory: async () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);


  async function getUserInfo():  Promise<AxiosResponse<any> | void>{
    try {
      const response = await axios.get<{ data: IUserInfo }>(`${url}/profile`, {
        headers: {
          Authorization: token,
        },
      });
      setUserInfo(response.data.data);
      return response
    } catch (error: any) {
      return error
    }
  }

  async function UpdateUserInfo(data: IUserUpdateData): Promise<void> {
    try {
      const response = await axios.post<{ data: IUserInfo }>(`${url}/profile`, data, {
        headers: {
          Authorization: token,
        },
      });
      setUserInfo(response.data.data);
      toast("Changes have been saved!", {
        icon: <SquareCheckBig size={24} className="text-green-400" />,
      });
    } catch (error: any) {
      toast(error?.response?.data?.message || "Update failed", {
        icon: <X size={24} className="text-red-400" />,
      });
    }
  }

  async function deleteAccount(): Promise<void> {
    try {
      const response = await axios.post(`${url}/profile/delete-account`, null, {
        headers: {
          Authorization: token,
        },
      });
      toast(response.data.message, {
        icon: <SquareCheckBig size={24} className="text-green-400" />,
      });
      return response
    } catch (error: any) {
      toast(error?.response?.data?.message || "Failed to delete account", {
        icon: <X size={24} className="text-red-400" />,
      });
      return error
    }
  }



  //--------------------------------------------------------------------------------------

  async function getMyFlightBookings(): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/my-bookings/flight`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }



    async function getMyCarBookings(): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/bookings/my`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }



      async function getMyRoomBookings(): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/my/room/bookings`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }




      async function getMyTourBookings(): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/my-tour-bookings`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }



  async function getTourDetails(id:number): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/tours/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }



    async function getAllTour(): Promise<AxiosResponse<any> | void>  {
    try {
      const response = await axios.get(`${url}/tours`, {
        headers: {
          Authorization: token,
        },
      });
      return response
    } catch (error) {
      return error
    }
  }



//   async function getTours(filter?: IFilterTour) {
//     try {
//         const params =
//             filter &&
//             Object.entries(filter)
//                 .filter((param) => {
//                     if (
//                         param[1] !== undefined &&
//                         param[1] !== "" &&
//                         param[1] !== "[]"
//                     )
//                         return param;
//                 })
//                 .map((param) => ${param[0]}=${param[1]});

//         let url = ${safarni}/tours;
//         if (params) url += ?${params.join("&")};

//         const res = await axios.get(url);

//         return res.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }


  return (
    <UserContext.Provider
      value={{
        userInfo,
        getUserInfo,
        UpdateUserInfo,
        deleteAccount,
        getMyFlightBookings,
        getMyCarBookings,
        getMyTourBookings,
        getMyRoomBookings,
        getTourDetails,
        getAllTour,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
