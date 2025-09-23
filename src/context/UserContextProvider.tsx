import { createContext, useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import { toast } from "sonner";
import { SquareCheckBig, X } from "lucide-react";
import type { IUserContext, IUserInfo, IUserUpdateData } from "@/types";
import { useAuthContext } from "./AuthContext";

const url = "https://round5-safarnia.huma-volve.com/api";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<IUserContext>({
    userInfo: null,
    getUserInfo: async () => {},
    UpdateUserInfo: async () => {},
    deleteAccount: async () => {},
    getMyFlightBookings: async () => {},
    getMyCarBookings: async () => {},
    getMyTourBookings: async () => {},
    getMyRoomBookings: async () => {},
    getTourDetails: async () => {},
    getAllTour: async () => {},
});

interface UserContextProviderProps {
    children: ReactNode;
}

export default function UserContextProvider({
    children,
}: UserContextProviderProps) {
    const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
    const { token, setToken } = useAuthContext();

    useEffect(() => {
        getUserInfo();
    }, []);

    async function getUserInfo() {
        try {
            const response = await axios.get<{ data: IUserInfo }>(
                `${url}/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUserInfo(response.data.data);
            return response;
        } catch (error: any) {
            return error;
        }
    }

    async function UpdateUserInfo(data: IUserUpdateData): Promise<void> {
        try {
            const response = await axios.post<{ data: IUserInfo }>(
                `${url}/profile`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
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

    async function deleteAccount() {
        try {
            const response = await axios.post(
                `${url}/profile/delete-account`,
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

            setToken(null);
            localStorage.removeItem("token");
            return response;
        } catch (error: any) {
            toast(
                error?.response?.data?.message || "Failed to delete account",
                {
                    icon: <X size={24} className="text-red-400" />,
                }
            );
            return error;
        }
    }

    //--------------------------------------------------------------------------------------

    async function getMyFlightBookings() {
        try {
            const response = await axios.get(`${url}/my-bookings/flight`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getMyCarBookings() {
        try {
            const response = await axios.get(`${url}/bookings/my`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getMyRoomBookings() {
        try {
            const response = await axios.get(`${url}/my/room/bookings`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getMyTourBookings() {
        try {
            const response = await axios.get(`${url}/my-tour-bookings`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getTourDetails(id: number) {
        try {
            const response = await axios.get(`${url}/tours/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getAllTour() {
        try {
            const response = await axios.get(`${url}/tours`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    }

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
