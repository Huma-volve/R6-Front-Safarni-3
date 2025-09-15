



export type FuelType = "Gasoline" | "Diesel" | "Electric" | "Hybrid" | string ;
export type Transmission = "Automatic" | "Manual" | string ;

export interface CarCategory {
    id: number;
    name: string;
    description: string;
    image_url:string;
    created_at: string;
    updated_at:string;
}

export interface Car{
    id:number;
    model:
    string;
    brand:string;
    daily_rate?:string;
    seats:number;
    transmission:Transmission;
    fuel_type:FuelType;
    has_ac:number;
    category_id:number;
    created_at:string;
    updated_at:string;
    category:CarCategory;
}

export interface BrandCard{
    name:string;
    image:string;
    count:number;
}


// export const fetchBrands =async (api:string): Promise<BrandCard[]> =>{
//     const response= await axios.get<Car[]>(api);
//     const data = response.data;

//     const brandMap: { [key :string]: BrandCard} ={};
//     data.forEach(car => {
//         if(!brandMap[car.brand]){
//             brandMap[car.brand] = {
//                      name:car.brand,
//                      image: car.category.image_url,
//                      count:1,
//             };
//         }else{
//             brandMap[car.brand].count+=1;
//         }
//     });
//     return Object.values(brandMap);
// };

