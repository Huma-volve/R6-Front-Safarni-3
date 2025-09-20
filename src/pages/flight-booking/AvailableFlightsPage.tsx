import { BackBtn } from "@/components/shared";
import { format, parse } from "date-fns";
import { useNavigate } from "react-router";

const data = [
  {
    id: 1,
    from: "Caspertown",
    to: "Violaville",
    departure_time: "2026-08-04 01:15:57",
    arrival_time: "2026-09-28 05:22:24",
    price: 2683,
  },
];

function formatTime(time: string) {
  // Parse using the matching format string
  const parsedDate = parse(time, "yyyy-MM-dd HH:mm:ss", new Date());

  // Format to 12-hour clock with AM/PM
  return format(parsedDate, "h:mm a");
}

const AvailableFlightsPage = () => {
  const navigate = useNavigate();
  function bookHandler() {
    navigate("/available-seats");
  }
  return (
    <div className="m-auto w-full max-w-[1272px] px-4">
      <BackBtn />
      <div className="grid grid-cols-2 gap-4 md:gap-12 mb-10">
        <p className="rounded-lg py-7 w-full text-center shadow-[0_2px_8px_0_rgba(131,139,180,0.22)]">
          {format(
            new Date(data[0].departure_time.replace(" ", "T")),
            "MMM do, yyyy"
          )}
        </p>
        <p className="rounded-lg py-7 w-full text-center shadow-[0_2px_8px_0_rgba(131,139,180,0.22)]">
          {format(
            new Date(data[0].arrival_time.replace(" ", "T")),
            "MMM do, yyyy"
          )}
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((obj) => (
          <li key={obj.id}>
            <button
              onClick={bookHandler}
              className="py-4 w-full px-8 rounded-lg flex flex-col gap-4 shadow-[0_2px_8px_0_rgba(131,139,180,0.12)]"
            >
              <p className="flex justify-between font-medium text-gray-900 text-2xl">
                <span>{formatTime(obj.departure_time)}</span>
                <span>{formatTime(obj.arrival_time)}</span>
              </p>
              <p className="flex justify-between  font-medium text-gray-500 text-2xl">
                <span>{obj.from.slice(0, 3).toUpperCase()}</span>
                <span>{obj.to.slice(0, 3).toUpperCase()}</span>
              </p>
              <p className="flex justify-between font-medium text-gray-900 text-2xl">
                <span>Scoot</span>
                <span>${obj.price}</span>
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableFlightsPage;
