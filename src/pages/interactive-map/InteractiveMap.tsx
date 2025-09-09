import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home, Utensils, Landmark, Hotel, Search, X } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

const places = [
  { id: 1, name: "My Home", position: [30.0444, 31.2357], category: "home" },
  {
    id: 2,
    name: "Pizza Place",
    position: [30.048, 31.233],
    category: "restaurants",
  },
  {
    id: 3,
    name: "Tourist Museum",
    position: [30.05, 31.24],
    category: "tourist",
  },
  {
    id: 4,
    name: "Luxury Hotel",
    position: [30.046, 31.23],
    category: "hotels",
  },
];

const categories = [
  { key: "home", label: "Set Home", icon: <Home className="w-4 h-4" /> },
  {
    key: "restaurants",
    label: "Restaurants",
    icon: <Utensils className="w-4 h-4" />,
  },
  {
    key: "tourist",
    label: "Tourist Places",
    icon: <Landmark className="w-4 h-4" />,
  },
  { key: "hotels", label: "Hotels", icon: <Hotel className="w-4 h-4" /> },
];

const createCustomIcon = (icon: JSX.Element) => {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(icon)
      .replace(/stroke=".*?"/g, 'stroke="white"')
      .replace(/fill=".*?"/g, 'fill="white"')
  );

  return L.divIcon({
    className: "custom-icon",
    html: `
      <div style="background: var(--destructive); width: 34px; height: 34px; border-radius: 50%; display:flex; align-items:center; justify-content:center;">
        <img src="data:image/svg+xml,${svgString}" width="18" height="18" />
      </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34],
  });
};

function FlyToLocation({ position }: { position: [number, number] | null }) {
  const map = useMap();
  if (position) {
    map.setView(position, 15, { animate: true });
  }
  return null;
}

export default function InteractiveMap() {
  const [activeCategory, setActiveCategory] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number] | null
  >(null);

  const filteredPlaces = places.filter(
    (place) =>
      place.category === activeCategory &&
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestions = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "home":
        return <Home size={18} />;
      case "restaurants":
        return <Utensils size={18} />;
      case "tourist":
        return <Landmark size={18} />;
      case "hotels":
        return <Hotel size={18} />;
      default:
        return <Home size={18} />;
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-4/5">
        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10 w-full rounded-xl bg-white shadow-md shadow-sky-200 border border-gray-200 focus:ring-2 focus:ring-sky-400"
          />
          {searchTerm && (
            <X
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={() => setSearchTerm("")}
            />
          )}

          {searchTerm && (
            <ul className="absolute top-12 left-0 w-full bg-white shadow-md shadow-sky-200 border border-gray-200 rounded-xl z-[2000]">
              {suggestions.map((place) => (
                <li
                  key={place.id}
                  onClick={() => {
                    setSearchTerm(place.name);
                    setSelectedPosition(place.position as [number, number]);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-sky-100"
                >
                  {place.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-3 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors cursor-pointer
    focus:outline-none focus:ring-0
    active:bg-sky-100 active:text-sky-600
    ${
      activeCategory === cat.key
        ? "bg-sky-100 text-sky-600 border-sky-300"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
    }
  `}
              style={{
                WebkitTapHighlightColor: "transparent",
                outline: "none",
                boxShadow: "none",
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={13}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredPlaces.map((place) => (
          <Marker
            key={place.id}
            position={place.position}
            icon={createCustomIcon(getCategoryIcon(place.category))}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}

        <FlyToLocation position={selectedPosition} />
      </MapContainer>
    </div>
  );
}
