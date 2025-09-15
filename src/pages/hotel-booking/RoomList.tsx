import React, { useEffect, useState } from 'react'
import type { Room } from '@/types/hotel';
import RoomCard from '@/components/RoomCard/RoomCard';
import axios from 'axios';
import api from '@/Services/api';
import { useParams } from 'react-router';


const RoomList: React.FC =() =>  {
 const { hotelId } = useParams<{ hotelId: string }>();
 const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 const [showAllRooms,setShowAllRooms]=useState(false);
 const displayRooms = showAllRooms ? rooms : (rooms || []).slice(0,4);

  useEffect(() => {
    api
      .get(`hotel/rooms/${hotelId}`) 
      .then((res) => {
        console.log("API response:", res.data);
        setRooms(res.data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load rooms");
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p className="text-center py-6">Loading rooms...</p>;
  }

  if (error) {
    return <p className="text-center py-6 text-red-500">{error}</p>;
  }



  return (
   <div className='container w-4/5 m-auto pb-4 pt-4'>
    <div className='flex justify-between mb-2 items-center'>
       <h2 className='font-medium text-xl mb-4' >Available Rooms</h2>
       <a 
       onClick={(e)=>{
        e.preventDefault();
        setShowAllRooms(!showAllRooms);
       }}
       href='#'
       className='text-blue-600 cursor-pointer'
       
       >{showAllRooms ? 'Show less' : 'View all' }</a>
    </div>
    {rooms.length ===0 ? (
        <p className='text-gray-600 pt-4 text-center'>No rooms available for this hotel .</p>
    ):
    (

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {displayRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
        ))}
    </div>
    )}
   </div>
  )

}
export default RoomList;