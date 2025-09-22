import FlightImg from "./FlightImg";
import planeIcon from "@/assets/icons/plane.svg";
import userImg from "@/assets/images/userimg.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import QRCode from "react-qr-code";
import GoBackButton from "@/components/shared/GoBackButton";
import { useContext } from "react";
import { UserContext } from "@/context/UserContextProvider";
import { useLocation } from "react-router";

type User = {
  id: number;
  name: string;
  email: string;
  phone: null;
  country: null;
  image: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
};

const data = {
  id: 1,
  category_id: 1,
  airline: "Orn, Brakus and Dare",
  from: "South Tanyaville",
  to: "Nienowborough",
  departure_time: "2025-11-26 06:12:17",
  arrival_time: "2027-05-11 05:27:48",
  price: 2153,
  created_at: "2025-08-20T17:19:10.000000Z",
  updated_at: "2025-08-20T17:19:10.000000Z",
};

const ConfirmFlightPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function confirmFlightHandler() {
    navigate("/checkout?booking_type=flight", {
      state: { price: location.state.price, type: "flight" },
    });
  }

  const currentUrl = window.location.href;

  return (
    <div className="m-auto w-full max-w-[1272px] px-4 ">
      <GoBackButton />
      <div className="mb-[72px] grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <FlightImg />

        <div className="w-full max-w-[510px] mx-auto ">
          <h2 className="text-gray-900 text-[26px] mb-8 font-medium text-center">
            Barding pass
          </h2>
          <div className="flex flex-col">
            <div className="mb-4 flex flex-wrap gap-8">
              <p className="font-medium text-lg">Air Canada</p>
              <p className="text-center text-xl">December 16h, 2022</p>
            </div>

            <div className="relative pb-1 border-b-gray-300 border-b-[1px]">
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
                <img src={planeIcon} alt="a plane" />
                <p className="text-gray-500 text-sm">13h00</p>
              </div>
              <p className="flex justify-between font-medium text-xl text-gray-900 mb-1">
                <span>07h05</span>
                <span>20h05</span>
              </p>

              <p className="flex justify-between font-semibold text-base text-gray-500">
                <span>YUL</span>
                <span>NRT</span>
              </p>
            </div>

            <ul className="flex justify-between pt-3 pb-1 border-b-gray-300 border-b-[1px]">
              <li className="flex flex-col items-center">
                <p className="text-gray-500 text-xl">8</p>
                <p className="text-gray-900 text-base font-medium">Gate</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="text-gray-500 text-xl">{location.state.seatNo}</p>
                <p className="text-gray-900 text-base font-medium">Seat</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="text-gray-500 text-xl">3</p>
                <p className="text-gray-900 text-base font-medium">Terminal</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="text-gray-500 text-xl">AC006</p>
                <p className="text-gray-900 text-base font-medium">Flight</p>
              </li>
            </ul>

            <div className="flex gap-1 pt-5 pb-3.5 border-b-[1px] border-b-gray-300 border-dashed">
              {userInfo ? (
                <>
                  <img
                    className="rounded-full h-12 w-12"
                    src={userInfo?.user.image}
                    alt="user's image"
                  />{" "}
                  <div className="flex flex-col">
                    <p className="text-base text-gray-900">
                      {userInfo?.user.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {userInfo?.user.email}
                    </p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="mt-5 mb-10 mx-auto">
              <QRCode value={currentUrl} size={256} />
            </div>

            <Button size="full" onClick={confirmFlightHandler}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmFlightPage;
