import mercedes from '../../assets/images/mercedes.png';
import geely from '../../assets/images/geely.png';
import jeep from '../../assets/images/jeep.png';
import subaru from '../../assets/images/subaru.png';
import bmw from '../../assets/images/bmw.png';
import renault from '../../assets/images/renault.png';
import porsche from '../../assets/images/porsche.png';
import {Search, ChevronLeft} from 'lucide-react';


export default function BrandList() {
  return (
    <>
    <div className='container '>
        <div className='flex gap-4 py-4'>
        <div className='p-2 w-10 rounded-full  bg-gray-200 '>
            <ChevronLeft className='text-xs' />
        </div>
        </div>
        <h2 className='text-2xl mb-4 font-semibold'>Brands</h2>
       <div className="cards flex flex-wrap gap-4">
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl ">
            <img className='w-full object-contain h-full ' src={mercedes} />
            
           </div>
           <div className="card w-40 shadow  border-2 border-gray-200 rounded-xl">
            <img  className='w-full h-full object-contain ' src={geely} />
           </div>
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
            <img className='w-full h-full  object-contain '  src={jeep} />
           </div>
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
            <img className='w-full h-full  object-contain'  src={subaru} />
           </div>
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
            <img className='w-full h-full object-contain'  src={bmw} />
           </div>
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
            <img className='w-full h-full object-contain'  src={renault} />
           </div>
           <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
            <img className='w-full h-full object-contain'  src={porsche} />
           </div>
       </div>
    </div>
    </>
  )
}

// const BrandList: React.FC = () => {
//     const [brands,setBrands]= useState<BrandCard[]>([]);

//     useEffect(()=>{
//         fetchBrands("https://round5-safarnia.huma-volve.com/api/cars")
//         .then(setBrands)
//         .catch(console.error);
//     },[]);
//     return(
//         <div>
//             <h2 className='text-2xl mb-4 font-semibold '>Brands</h2>

//         <div className='flex  gap-5 flex-wrap'>
//             {brands.map((brand,index) => (
//               <div 
//               key={index}
//               className=' border-2 border-gray-200 rounded-xl p-10 text-center shadow'
//             >
//             <img 
//             src={brand.image}
//             alt={brand.name}
//             className='w-full rounded-xl'/>
//             <h3>{brand.name}</h3>
//             <p className='text-blue-500'>+{brand.count}</p>
//         </div>
//             ))}
//             </div>
//         </div>
//     );
// };
// export default BrandList;
 