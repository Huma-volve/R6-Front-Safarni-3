import { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Polyline,
    useMap,
    useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import type { Car } from "@/types/car";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import BrokenCar from "../../../src/assets/images/WhatsApp Image 2025-09-14 at 18.55.33_1ed5813f.jpg";

const carIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png",
    iconSize: [30, 30],
});

const fixedLocation: [number, number] = [31.4167, 31.8133]; // الموقع الثابت

type LocationState = {
    car: Car;
    userAddress?: string;
};
export default function CarMap() {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(
        null
    );
    const location = useLocation();
    const state = location.state as LocationState;
    const [distance, setDistance] = useState<number | null>(null);
    const [time, setTime] = useState<number | null>(null);
    const { id } = useParams();

    const { car, userAddress } = state;
    const price = parseFloat(car?.daily_rate || "0");
    const hourlyPrice = price / 24;

    function LocationSelector() {
        useMapEvents({
            click(e) {
                const loc: [number, number] = [e.latlng.lat, e.latlng.lng];
                setUserLocation(loc);

                const from = turf.point([fixedLocation[1], fixedLocation[0]]);
                const to = turf.point([loc[1], loc[0]]);
                const d = turf.distance(from, to, {
                    units: "kilometers" as const,
                });
                setDistance(d);

                setTime((d / 50) * 60);
            },
        });
        return null;
    }

    function FitBounds() {
        const map = useMap();
        useEffect(() => {
            if (userLocation) {
                const bounds = L.latLngBounds([fixedLocation, userLocation]);
                map.fitBounds(bounds, { padding: [50, 50] });
            }
        }, [userLocation]);
        return null;
    }

    // تحويل العنوان لإحداثيات
    useEffect(() => {
        if (userAddress) {
            fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    userAddress
                )}`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.length > 0) {
                        setUserLocation([
                            parseFloat(data[0].lat),
                            parseFloat(data[0].lon),
                        ]);
                    }
                })
                .catch((err) => console.error(err));
        }
    }, [userAddress]);

    if (!state) {
        return <p>No car or address passed</p>;
    }

    return (
        <>
            <div className="w-full h-[80vh] relative mb-30">
                <MapContainer
                    center={fixedLocation}
                    zoom={12}
                    style={{ height: "80vh", width: "100%" }}
                >
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        subdomains={["mt0", "mt1", "mt2", "mt3"]}
                    />

                    {/* Marker دمياط */}
                    <Marker position={fixedLocation} icon={carIcon} />

                    {/* Marker موقع المستخدم */}
                    {userLocation && (
                        <Marker position={userLocation} icon={carIcon} />
                    )}

                    {/* الخط بين دمياط وموقع المستخدم */}
                    {userLocation && (
                        <Polyline
                            positions={[fixedLocation, userLocation]}
                            color="blue"
                        />
                    )}
                </MapContainer>

                {/* {distance !== null && time !== null && (
        <div className="mt-4 p-4 border border-gray-200 rounded bg-white max-w-md mx-auto">
        <p><strong>Distance:</strong> {distance.toFixed(2)} km</p>
        <p><strong>Estimated time:</strong> {time.toFixed(1)} min</p>
        </div>
        )} */}

                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 p-4 shadow-md min-h-[260px] max-w-[600px]  rounded-lg z-[9999] bg-white ">
                    <div className="flex justify-between gap-5">
                        <h3 className="text-lg font-semibold flex items-end">
                            {car?.brand} {car?.model}
                        </h3>

                        <img
                            src={
                                car?.category.image_url ||
                                "https://via.placeholder.com/300x200?text=No+Image"
                            }
                            alt={`${car?.brand} ${car?.model}`}
                            onError={(e) => {
                                e.currentTarget.src = BrokenCar;
                            }}
                            className="w-50 h-24 object-cover rounded-xl"
                        />
                    </div>

                    <div className="pb-2">
                        <p className="text-xs  text-gray-500">
                            {car?.transmission} . {car?.seats} seats .{" "}
                            {car?.fuel_type}
                            {car?.has_ac ? ". A/C" : ""}
                        </p>
                        <div className="flex justify-between items-center pt-2">
                            <div className="p-3">
                                {car && (
                                    <h5 className="text-center font-semibold">
                                        ${hourlyPrice.toFixed(2)}
                                    </h5>
                                )}
                                <p className="text-gray-500 text-xs text-end">
                                    per hour
                                </p>
                            </div>
                            <div>
                                {car && (
                                    <h5 className=" text-center font-semibold">
                                        ${price.toFixed(2)}
                                    </h5>
                                )}
                                <p className="text-gray-500 text-xs text-end">
                                    per day
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="px-6 py-2 w-full rounded-xl bg-blue-700 border-blue-700 border-2 text-white hover:bg-white hover:text-blue-700 transition-all duration-200  cursor-pointer">
                        Confirm
                    </button>
                </div>
            </div>
        </>
    );
}
