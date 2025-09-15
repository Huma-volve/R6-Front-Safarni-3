import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import tourImg from "../../assets/images/arcticons_kerala-tourism.png";
import { Bed, Car, ChevronLeft, Plane,Star } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContextProvider";
import { Link } from "react-router";
import type {CarBooking, FlightBooking, RoomBooking, TourBooking, TourImageMap } from "@/types";


export default function UserBooking() {
  const {
    getMyFlightBookings,
    getMyCarBookings,
    getMyTourBookings,
    getMyRoomBookings,
    getTourDetails,
    getAllTour,
  } = useContext(UserContext);

  const [flightBooking, setFlightBooking] = useState<FlightBooking[]>([]);
  const [carBooking, setCarBooking] = useState<CarBooking[]>([]);
  const [tourBooking, setTourBooking] = useState<TourBooking[]>([]);
  const [roomBooking, setRoomBooking] = useState<RoomBooking[]>([]);
  const [filteredTours, setFilteredTours] = useState<TourImageMap>([]);

  useEffect(() => {
    (async () => {
      const response = await getMyFlightBookings();
      setFlightBooking(response.data.data);
    })();
    getAllUserBooking();
  }, []);


  useEffect(()=>{
    if(tourBooking.length>0){
          filterTour()
    }
  },[tourBooking])

  async function getAllUserBooking() {
    const response1 = await getMyCarBookings();
    setCarBooking(response1?.data || []);

    const response2 = await getMyTourBookings();
    const tours: TourBooking[] = response2?.data.data || [];
    setTourBooking(tours);

    const response3 = await getMyRoomBookings();
    setRoomBooking(response3?.data.data || []);
  }


  async function filterTour(){
   let response= await  getAllTour()
   let tours =response?.data.data
   let filtered=tourBooking.map((booking)=>(
       tours.find((tour)=>(tour.id === booking.tour_id))
   ))
   setFilteredTours(filtered)
  }


  return (
    <div className="container mx-auto px-3 lg:px-20">
      <Link to="/profile">
        <div className="w-14 h-14 bg-gray-100 rounded-full my-10 flex justify-center items-center">
          <ChevronLeft />
        </div>
      </Link>
      <h2 className="font-medium text-2xl text-center">My Booking</h2>
      <Tabs defaultValue="flight">
        <TabsList className="bg-white py-10 flex flex-wrap justify-between w-full gap-10">
          <TabsTrigger
            value="flight"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 text-xl py-6 border border-gray-200 rounded-full"
          >
            <Plane /> Flight
          </TabsTrigger>
          <TabsTrigger
            value="cars"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 text-xl py-6 border border-gray-200 rounded-full"
          >
            <Car /> Cars
          </TabsTrigger>
          <TabsTrigger
            value="tours"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 text-xl py-6 border border-gray-200 rounded-full"
          >
            <img src={tourImg} alt="tour icon" className="w-5 h-5 mr-2" /> Tours
          </TabsTrigger>
          <TabsTrigger
            value="hotel"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 text-xl py-6 border border-gray-200 rounded-full"
          >
            <Bed /> Hotel
          </TabsTrigger>
        </TabsList>

        <div className="border-gradient p-[1px] rounded-md mt-6">
          <div className="bg-white p-8 rounded-md">
            {/* FLIGHT */}
            <TabsContent value="flight">
              {!flightBooking.length && (
                <div><p className="text-red-400 text-center">No reservation</p></div>
              )}
              {flightBooking.map((booking) => (
                <div key={booking.id} className="py-4">
                  <p className="py-2">{booking.booking_date}</p>
                  <div className="flex justify-between py-3 border-t-1">
                    <div>
                      <span className="text-gray-500">{booking.flight_id}</span>
                      <p>Flight</p>
                    </div>
                    <div>
                      <span className="text-gray-500">{booking.seat_id}</span>
                      <p>Seat</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* CARS */}
            <TabsContent value="cars">
              {!carBooking.length && (
                <div><p className="text-red-400 text-center">No reservation</p></div>
              )}
              {carBooking.map((booking) => (
                <div key={booking.id} className="py-4">
                  <div className="flex justify-between">
                    <p>
                      {booking.car.model} {booking.car.category.name}
                    </p>
                    <img
                      src={booking.car.category.image_url}
                      alt="car"
                      className="w-40  object-cover"
                    />
                  </div>
                  <div className="flex justify-between text-gray-500 py-4">
                    <p>{booking.car.transmission}</p>
                    <p className="border-l pl-1">{booking.car.seats} Seats</p>
                    <p className="border-l pl-1">{booking.car.fuel_type}</p>
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* TOURS */}
            <TabsContent value="tours">
              {!tourBooking.length && (
                <div><p className="text-red-400 text-center">No reservation</p></div>
              )}
              {filteredTours?.map((booking) => (
                <div key={booking.id} className="flex gap-4 items-center justify-between mb-6">
                  <div className="w-40">
                    <img src={booking?.image} alt={booking?.tour_title} className="rounded-md" />
                  </div>
                  <div>
                    <span className="text-gray-500 font-semibold">
                      Full Day Tour
                    </span>
                    <p className="text-lg font-medium py-2">{booking.title}</p>
                    <p className="text-gray-500 font-semibold">
                      From{" "}
                      <span className="text-blue-500">
                        {booking.price} $
                      </span>{" "}
                      Per Person
                    </p>
                  </div>
                  <div className="">
                    <span><Star className="fill-amber-200 stroke-amber-200 inline pr-2"/>{booking.rating}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* HOTELS */}
            <TabsContent value="hotel">
              {!roomBooking.length && (
                <div><p className="text-red-400 text-center">No reservation</p></div>
              )}
              {roomBooking.map((booking) => (
                <div key={booking.id} className="mb-4">
                  <p>
                    Check-in:
                    <span className="border-l text-gray-500 pl-2">
                      {booking.check_in_date}
                    </span>
                  </p>
                  <p>
                    Check-out:
                    <span className="border-l text-gray-500 pl-2">
                      {booking.check_out_date}
                    </span>
                  </p>
                </div>
              ))}
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}