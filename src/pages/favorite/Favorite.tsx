import { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '@/context/FavoriteContextProvider';
import TourCard from '@/components/shared/TourCard';
import Loader from '@/components/shared/Loader';
import type { ITour } from '@/types';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export default function Favorite() {
  const [favList, setFavList] = useState<ITour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getFavorites } = useContext(FavoriteContext);

  useEffect(() => {
    getFavList();
  }, []);

  async function getFavList(): Promise<void> {
    setIsLoading(true);
    try {
      const response = await getFavorites();
      if (response && response.data && response.data.data) {
        setFavList(response.data.data);
        console.log(response);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>

    <div className="container lg:w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <Link to='/'>
        <div className="w-14 h-14 bg-gray-100 rounded-full my-10 flex justify-center items-center"><ChevronLeft/></div>
        </Link>
        <h1 className='font-medium text-xl'>Favorite</h1>
        <span></span>
      </div>
      {!favList.length && !isLoading && (
        <div className="text-center p-10 text-red-400 font-medium">
          Not added to your favorites yet
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
            {favList.map((tour: ITour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
      )}
       </div>
    </>
  );
}
