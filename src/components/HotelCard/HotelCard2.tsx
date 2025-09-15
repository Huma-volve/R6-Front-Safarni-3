import type { Hotel } from '@/types/hotel';
import { MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router';



interface HotelCardProps {
    hotel: Hotel;
}

export default function HotelCard2({ hotel }: HotelCardProps) {
          const navigate = useNavigate();

  return <>
    <div>
        <div onClick={
            () => {
                navigate(`/hotel/rooms/${hotel.id}`)
            }
        } className='bg-white p-4 hover:scale-105 flex cursor-pointer  gap-4 items-center  transition-all duration-300 rounded-lg shadow-md w-[560px] h-[180px]'> 
            <img src={hotel.image} alt={hotel.name} className='w-50' />
            <div >
                <div className='flex mt-3 mb-3 justify-between items-center'>
                   <div>
                    <div className='px-4 py-1 bg-blue-50 border-1 text-xs text-blue-700 border-blue-50 rounded-xl'><p>10%Off</p></div>
                   </div>
                  <div className='flex items-center'>
                    <div className='flex items-center gap-1'>
                        <Star className='text-yellow-500 fill-yellow-500' />
                        <p>{hotel.average_rating.toFixed(1)}</p>
                    </div>
                  </div>
                </div>
            <h3 className=' font-poppins'>{hotel.name}</h3>
            <div className='flex items-center font-normal mt-4 text-gray-400 gap-1'>
                <MapPin className='font-normal'/>
                <p> New York,USA</p>
            </div>

            </div>
           
        </div>
    </div>
  </>
  
}
