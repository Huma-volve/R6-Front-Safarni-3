import HotelCard from '@/components/HotelCard/HotelCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HotelCard2 from '@/components/HotelCard/HotelCard2';


export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  average_rating: number;

}

export default function HotelList() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shawAll , setShowAll]= useState(false);
  const [shawAll2 , setShowAll2]= useState(false);
  
  useEffect(() => {
      axios.get("https://round5-safarnia.huma-volve.com/api/hotels") 
        .then((res) => {
        console.log("Hotels API response:", res.data);

          if (Array.isArray(res.data.data)) {
        setHotels(res.data.data); 
      } else {
        setError("Unexpected API response format");
        console.error("Unexpected API response format", res.data);
      }
    })
    .catch((err) => {
      console.error("Error fetching hotels:", err);
      setError("Failed to fetch hotels");
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
  const displayHotles= shawAll ? hotels : hotels.slice(0,4);
  const displayHotles2= shawAll2 ? hotels : hotels.slice(0,4);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!hotels.length) return <p>No hotels found</p>;
  return (
    <>
    <div className='container w-4/5 m-auto pb-4 pt-4'>

     <div className='flex justify-between mb-2 items-center'>
            <h2 className='font-medium text-xl'>Recommendation</h2>
            {hotels.length > 4 && (
                <div className="mt-6">
                    <a href='#'
                    onClick={(e)=>{
                        e.preventDefault();
                        setShowAll(!shawAll);

                    }}
                    className='text-blue-600 cursor-pointer '>
                        {shawAll? "show less" : "View All"}
                    </a>
                    </div>
            )}
        </div>
     <div className="flex flex-wrap gap-6 ">
      {displayHotles.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
     <div className='flex justify-between mb-2 mt-2 items-center'>
            <h2 className='font-medium text-xl'>Nearby Hotel</h2>
            {hotels.length > 4 && (
                <div className="mt-6">
                    <a href='#'
                    onClick={(e)=>{
                        e.preventDefault();
                        setShowAll2(!shawAll2);

                    }}
                    className='text-blue-600 cursor-pointer '>
                        {shawAll2? "show less" : "View All"}
                    </a>
                    </div>
            )}
        </div>
     <div className="flex flex-wrap gap-6 ">
      {displayHotles2.map((hotel) => (
        <HotelCard2 key={hotel.id} hotel={hotel} />
      ))}
    </div>
    </div>
    </>

   
  )
}
