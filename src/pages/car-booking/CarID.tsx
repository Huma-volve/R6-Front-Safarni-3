import type { Car } from '@/types/car';
import { CalendarDays, ChevronLeft, Clock3 } from 'lucide-react';
import carphoto from '../../assets/images/e744f4cf979ec01abb63356b5a84a958a241a35d.png'
import { Link, useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '@/Services/api';

export default function CarID() {
    const { id } = useParams(); 
    const [car, setCar] = useState<Car | null>(null);
    const price =parseFloat(car?.daily_rate || "0");    
    const hourlyPrice=price/24
    const [selected, setSelected] = useState<"hourly" | "daily" | null>(null);

    // بتاع الخريطه
    const [locationInput, setLocationInput] = useState("");
    const navigate = useNavigate();

  const handleGoMap = () => {
  if (locationInput.trim() !== "" && car) {
    navigate("/car-map", { state: { car, userAddress: locationInput } });
  }
};
  useEffect(() => {
    if (!id) return;

    api.get(`/cars/${id}`)
      .then((res) => setCar(res.data as Car))
      .catch((err) => console.error("Error fetching car:", err));
  }, [id]);

  if (!car) return <p className='flex justify-center items-center p-50'>Loading car...</p>;

  return (
   <>
   <div className='container w-3/4 m-auto py-6'>
   <Link to={'/cars'}>
    <div className='p-2 rounded-full w-10 bg-gray-200 '>
            <ChevronLeft className='text-xs' />
    </div>
   </Link>
    <div className='lg:flex-row gap-7 flex-col flex mt-4  items-center'>

    {/* car image */}
    <div>
        <div className='card overflow-hidden bg-gray-200 rounded-lg w-[508px] h-[439px]  '>
            <img className='h-80  object-cover rounded-xl w-full' 
            src={carphoto}
             />
        </div>
    </div>
    {/* car details */}
    <div>
        <div>

        <h2 className='font-semibold mb-2'>Popular Cars</h2>
        <div className='cards flex flex-wrap gap-2 mb-3'>
            <div className='card border-1 w-[194px] h-[90px]  border-gray-300 rounded-xl p-2'>
                <h3 className='text-center font-medium'>Power</h3>
                <p className='text-xs text-gray-500 mt-5 text-center'>429 hp @ 6,100 rpm</p>
            </div>
            <div className='card border-1 text-center w-[194px] h-[90px]  border-gray-300 rounded-xl p-2'>
                <h3 className='font-medium' >Max speed</h3>
                <p className='text-xs text-gray-500 mt-5'>280 km/h</p>
            </div>
            <div className='card border-1 text-center w-[194px] h-[90px] border-gray-300 rounded-xl p-3'>
                <h3 className='font-medium'>Acceleration</h3>
                <p className='text-xs text-gray-500 mt-5'>4.9 sec 0-60 mph</p>
            </div>

        </div>
        </div>
        <div className='mb-3'>
            <h3 className='mb-2 font-medium'>Plan</h3>

            {/* card rent 1 */}
            <div onClick={()=> setSelected("daily")} className={`rent flex cursor-pointer border-1 overflow-hidden rounded-xl gap-4 mb-2 border-blue-500'
                ${selected==="daily" ? 'scale-105 border-gray-500':''}`}>
                <div className='bg-blue-200 text-center pt-5 w-[100px] min-h-[84px] overflow-hidden '>
                    <Clock3 className='text-blue-500 w-3 m-auto' />
                     {car && <h5 className='text-blue-500'>${hourlyPrice.toFixed(2)}</h5>}
                </div>
                <div className='p-1 pt-3'>
                    <h3>Hourly Rent</h3>
                    <p className='text-gray-400 text-sm mt-2'>Best for business appointments</p>
                </div>
            </div>
            {/* card r 2 */}
            <div onClick={()=> setSelected("hourly")} className={`rent flex cursor-pointer border-1 overflow-hidden rounded-xl gap-4 mb-2 border-blue-500'
                ${selected==="hourly" ? 'scale-105 border-gray-500':''}`}>
                <div className='bg-gray-200 text-center pt-5  w-[100px] min-h-[84px]  '>

                  <CalendarDays className='text-gray-400 w-3 m-auto' />
                 {car &&  <h5 className='text-gray-400 text-center '>${price.toFixed(2)}</h5>}
                </div>
                <div className='p-1 pt-3'>
                    <h3>Daily Rent</h3>
                    <p className='text-gray-400 text-sm mt-2'>Best for business appointments</p>
                </div>
            </div>
        </div>
        <div>
            <h5 className='text-sm mb-1'>Location</h5>
            <form onSubmit={(e) => { e.preventDefault(); handleGoMap(); }}>
                <input type='text' placeholder='200-298 Clipper St San Francisco' 
                className='p-1 px-2 py-2 border-2 rounded-lg text-sm w-full  border-gray-300 focus:border-blue-700'
                value={locationInput} 
                onChange={(e) => setLocationInput(e.target.value)}/>
                <br/>
                <button type='submit' className='bg-blue-700 mt-2 w-full rounded-lg py-2 cursor-pointer px-2 text-white hover:bg-white  hover:text-blue-700 border-2 border-blue-700 transition-all duration-200'>
                    Pick Up
                </button>
            </form>
        </div>

    </div>
    </div>

   </div>
   </>
  )
}
