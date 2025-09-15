import React from 'react';
import type {Room} from '../../types/hotel';
import { useNavigate } from 'react-router';



interface RoomCardProps{
    room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({room}) =>
    {
     const navigate=useNavigate();
  return (
    <div >
        <div
        onClick={() => {
            navigate(`/room/${room.id}`)
        }} className='bg-white p-4 hover:scale-105 cursor-pointer transition-all duration-300 rounded-xl shadow-md'>
            <img 
            src={room.image}
            alt={`Room${room.id}`}
            className='object-cover rounded-lg'
            onError={(e)=>
            {
                e.currentTarget.src = 'data:image/png;base64,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'
            }
            } />
            <div className='p-4'>
                <h3 className='font-medium text-xl mb-2'>Room {room.id}</h3>
                {room.discount ? (
                    <p className='text-gray-600'>
                        From <span className='text-blue-600'> {room.price}$ </span>
                    
                        <span className='text-blue-600 font-bold'> {room.discount}$ </span> Per Night
                    </p>
                ) : ( 
                    <p className='text-gray-600 font-medium'>
                        From <span className='text-blue-600 font-bold'> {room.price}$ </span>
                        Per Night
                    </p>
                )}
            </div>
        </div>
    </div>
    
  )
};
export default RoomCard;