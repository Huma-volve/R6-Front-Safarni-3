import CarCard from "../../components/CarCard/CarCard";
import api from "@/Services/api";
import { useEffect, useState } from "react";
import type { Car } from "@/types/car";

export default function CarList() {
  const [cars,setCars] = useState<Car[]>([]);
  console.log(cars[0])

  useEffect(() => {
    api.get('/cars')
    .then(res => {
      console.log('Cars API response:' , res.data);
 if (Array.isArray(res.data?.cars)) {
        setCars(res.data.cars as Car[]);
      } else {
        console.warn("Unexpected API format:", res.data);
        setCars([]);
      }
    })
    .catch(err =>console.error("Error fetching cars : ", err));
  },[]);

  return <>
  <div className="pt-4">
    <h2 className="text-2xl font-semibold mb-4">
      Popular Cars
    </h2>
    {cars.length===0? (
      <p>No cars available.</p>
    ):(
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onRent={() => console.log("Rent", car.id)}/>
      ))}
      </div>
    )}
  </div>
  </>
}
