import mercedes from "../../assets/images/mercedes.png";
import geely from "../../assets/images/geely.png";
import jeep from "../../assets/images/jeep.png";
import subaru from "../../assets/images/subaru.png";
import bmw from "../../assets/images/bmw.png";
import renault from "../../assets/images/renault.png";
import porsche from "../../assets/images/porsche.png";

export default function BrandList() {
    return (
        <div>
            <h2 className="text-2xl mb-4 font-semibold">Brands</h2>
            <div className="cards flex flex-wrap gap-4">
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl ">
                    <img
                        className="w-full object-contain h-full "
                        src={mercedes}
                    />
                </div>
                <div className="card w-40 shadow  border-2 border-gray-200 rounded-xl">
                    <img
                        className="w-full h-full object-contain "
                        src={geely}
                    />
                </div>
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
                    <img
                        className="w-full h-full  object-contain "
                        src={jeep}
                    />
                </div>
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
                    <img
                        className="w-full h-full  object-contain"
                        src={subaru}
                    />
                </div>
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
                    <img className="w-full h-full object-contain" src={bmw} />
                </div>
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
                    <img
                        className="w-full h-full object-contain"
                        src={renault}
                    />
                </div>
                <div className="card shadow w-40 p-4 border-2 border-gray-200 rounded-xl">
                    <img
                        className="w-full h-full object-contain"
                        src={porsche}
                    />
                </div>
            </div>
        </div>
    );
}
