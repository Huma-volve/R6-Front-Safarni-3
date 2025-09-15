// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
import {BrowserRouter as Router, Route, Routes } from 'react-router';
import CarList from './pages/car-booking/CarList';
import BrandList from './pages/car-booking/BrandList';
import CarID from './pages/car-booking/CarID';
import CarMap from './pages/car-booking/CarMap';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import type { Car } from './types/car';
import HotelList from './pages/hotel-booking/HotelList';
import RoomList from './pages/hotel-booking/RoomList';
import RoomDetails from './pages/hotel-booking/RoomDetails';





function App() {
    const [car, setCar] = useState<Car | null>(null);

    useEffect(() => {
  api.get('/cars/1')
    .then(res => setCar(res.data))
    .catch(console.error);
}, []);
    

    return (
        <Router>
           <Routes>
            {/* <Route path="/" element={<Navigate to={"/cars"} replace/>}/>
            <Route path='/' element={<BrandList/>}/> */}
            <Route path='/cars'
             element={
             <div className='container w-4/5 m-auto'>

                 <BrandList/>
                 <CarList/>
             </div>
             }
             
             />
             <Route path='/cars/:id'element = {<CarID/>}/>
             <Route path='/car-map' element={ <CarMap/>}/>
             <Route path='/hotels' element={<HotelList/>}/>
             <Route path='/hotel/rooms/:hotelId' element={<RoomList/>}/>
             <Route path='/room/:roomId' element={<RoomDetails/>}/>
           </Routes>
        </Router>
    );
}

export default App;
