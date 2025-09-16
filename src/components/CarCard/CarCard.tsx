import { Link } from 'react-router';
import type {Car} from '../../types/car';
import BrokenCar from '../../../src/assets/images/WhatsApp Image 2025-09-14 at 18.55.33_1ed5813f.jpg'

type Props={
    car: Car ;
    onRent?:(id: number) => void;

};

export default function CarCard({car,onRent}: Props) {
  return <>
 
  <div className='rounded-2xl border bg-white shadow-sm hover:scale-105 hover:shadow-md transation p-4'>
    <div className='flex justify-between gap-5'>
        <h3 className='text-lg font-semibold flex items-end'>
            {car.brand} {car.model}
        </h3>
        <img 
    src={car.category.image_url || "https://via.placeholder.com/300x200?text=No+Image"}
    alt={`${car.brand} ${car.model}`}
    className='w-50 h-44 object-cover rounded-xl'
     onError={(e) => {
      e.currentTarget.src =BrokenCar
     }} />



    </div>
    <div className='pb-2'>
        <p className='text-sm  text-gray-600'>
            {car.transmission} . {car.seats} seats . {car.fuel_type}
            {car.has_ac? ". A/C" : ""}
        </p>
    </div>
    <div className='flex gap-2'>
        <button
            onClick={()=> onRent?.(car.id)}
            className='px-4 py-2 w-full rounded-xl bg-blue-700 border-blue-700 border-2 text-white hover:bg-white hover:text-blue-700 transition-colors duration-200 cursor-pointer'>
                Rent Now
            </button>
            <Link className='w-full' to={`/cars/${car.id}`}>
            <button 
             className='px-6 py-2 w-full rounded-xl bg-white text-blue-700 hover:bg-blue-700 hover:text-white border-2 transition-all duration-200 border-blue-700 cursor-pointer' >
                Detail
             </button>
            </Link>

    </div>
  </div>
  </>
}
