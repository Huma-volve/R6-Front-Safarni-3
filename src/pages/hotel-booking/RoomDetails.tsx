import api from "@/Services/api";
import type { RoomDetailstype } from "@/types/hotel";
import {
    Bath,
    Bed,
    Camera,
    Frame,
    Search,
    SquarePen,
    Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const RoomDetails: React.FC = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const [room, setRoom] = useState<RoomDetailstype | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<
        "about" | "gallery" | "review" | "add review" | "book now"
    >("about");
    const [activeCheckIn, setActiveCheckIn] = useState<
        "card1" | "card2" | "card3" | "card4" | null
    >(null);
    const [activeCheckOut, setActiveCheckOut] = useState<
        "card1" | "card2" | "card3" | "card4" | null
    >(null);
    const [reviewRating, setReviewRating] = useState(0);
    const [hoverReview, setHoverReview] = useState(0);

    useEffect(() => {
        if (!roomId) return;

        api.get(`/room/details/${roomId}`)
            .then((res) => {
                setRoom(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load room details");
                setLoading(false);
            });
    }, [roomId]);

    if (loading) return <p className="text-center py-6">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!room) return <p>No room details found</p>;

    return (
        <div>
            <div className="container flex gap-14 items-center w-4/5 m-auto pt-3 pb-3 ">
                <img
                    src={room.image}
                    alt="Room"
                    className="w-[500px] h-[500px] object-cover rounded-lg"
                />
                <div className="">
                    <div className="flex justify-between items-center mt-4 mb-4">
                        {room.discount && (
                            <div className="px-4 py-2 bg-blue-200 text-blue-700 rounded-lg ">
                                <p>{room.discount}</p>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Star className="text-yellow-500 fill-yellow-500 " />
                            <p className="text-gray-500">
                                {" "}
                                {room.average_rating}({room.total_reviews}{" "}
                                Reviews)
                            </p>
                        </div>
                    </div>
                    <h2 className="font-semibold mb-2">Room {room.id}</h2>
                    <p className="text-gray-500 mb-4">
                        1012 oscean avanue, New Yourk ,USA
                    </p>
                    {activeTab !== "book now" && (
                        <div className="flex w-full gap-4 items-center justify-between border-b-1 focus:text-blue-700 focus:underline">
                            <button
                                onClick={() => {
                                    setActiveTab("about");
                                }}
                                className={
                                    activeTab === "about"
                                        ? "text-blue-700 font-medium border-b-2 cursor-pointer border-blue-700"
                                        : "text-gray-900 cursor-pointer font-normal"
                                }
                            >
                                About
                            </button>

                            <button
                                onClick={() => {
                                    setActiveTab("gallery");
                                }}
                                className={
                                    activeTab === "gallery"
                                        ? "text-blue-700 cursor-pointer font-medium border-b-2 border-blue-700"
                                        : "text-gray-900 cursor-pointer font-normal"
                                }
                            >
                                Gallery
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab("review");
                                }}
                                className={
                                    activeTab === "review"
                                        ? "text-blue-700 font-medium border-b-2 cursor-pointer border-blue-700"
                                        : "text-gray-900 cursor-pointer font-normal"
                                }
                            >
                                Review
                            </button>
                        </div>
                    )}
                    <div className="mt-4">
                        {activeTab === "about" && (
                            <>
                                <div className="flex mb-2 justify-between items-center">
                                    <div className="flex items-center">
                                        <Bed className="text-blue-500" />
                                        <p> {room.capacity} Beds</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="text-blue-500" />
                                        <p>{room.bathroom_number} Bath</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Frame className="text-blue-500" />
                                        <p>{room.area} Sqrt</p>
                                    </div>
                                </div>
                                <h2>Description</h2>
                                <p className="text-gray-600 mt-2">
                                    {room.description}
                                </p>
                            </>
                        )}
                        {activeTab === "gallery" && (
                            <>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3>
                                            Gallary{" "}
                                            <span className="text-blue-700">
                                                (0)
                                            </span>
                                        </h3>
                                        <div className="flex gap-2 items-center cursor-pointer">
                                            <Camera className="text-blue-700" />
                                            <h3 className="text-blue-700">
                                                add photo
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === "review" && (
                            <>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3>Review</h3>
                                        <div className="flex gap-2 items-center cursor-pointer">
                                            <SquarePen className="text-blue-700" />
                                            <button
                                                onClick={() =>
                                                    setActiveTab("add review")
                                                }
                                                className="text-blue-700 cursor-pointer"
                                            >
                                                add review
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative mt-4">
                                        <Search className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            placeholder="Search ..."
                                            className="border-2 border-gray-300 rounded-lg px-8 py-2 w-full focus:outline-blue-700 "
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === "add review" && (
                            <>
                                <p className="text-gray-500 mt-2 text-center">
                                    Your Over Rating Of This Product
                                </p>
                                <div className="flex gap-2 justify-center items-center mt-2 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={28}
                                            className={`cursor-pointer ${
                                                star <=
                                                (hoverReview || reviewRating)
                                                    ? "text-yellow-500 fill-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                            onClick={() =>
                                                setReviewRating(star)
                                            }
                                            onMouseEnter={() =>
                                                setHoverReview(star)
                                            }
                                            onMouseLeave={() =>
                                                setHoverReview(0)
                                            }
                                        />
                                    ))}
                                </div>

                                <h3 className="text-sm">
                                    Add detailed review{" "}
                                </h3>
                                <textarea
                                    name="review"
                                    id="review"
                                    className="w-full border-2 text-sm bg-gray-100 border-gray-100 rounded-lg p-2 focus:outline-blue-700 "
                                    rows={6}
                                    cols={12}
                                    placeholder="Enter here "
                                ></textarea>
                                <div className="flex mb-4 mt-2 items-center cursor-pointer gap-2">
                                    <Camera className="text-blue-700" />
                                    <p className="text-blue-700">add photo</p>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 cursor-pointer w-full bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-2 border-blue-700 px-6 py-2 rounded-lg transition-all duration-200"
                                >
                                    submit
                                </button>
                            </>
                        )}
                    </div>

                    {activeTab !== "add review" && activeTab !== "book now" && (
                        <>
                            <h2 className="font-semibold mt-6 ">
                                Total price :{" "}
                                <span className="text-blue-700 font-bold">
                                    ${room.price}
                                </span>{" "}
                                <span className="text-gray-500">/night</span>
                            </h2>
                            <button
                                onClick={() => {
                                    setActiveTab("book now");
                                }}
                                type="submit"
                                className="mt-4 w-full cursor-pointer bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-2 border-blue-700 px-6 py-2 rounded-lg transition-all duration-200 "
                            >
                                Book Now
                            </button>
                        </>
                    )}
                    {activeTab === "book now" && (
                        <>
                            <h2 className="text-blue-700 font-medium border-t-2  text-center text-xl mt-4 mb-4">
                                Book hotel
                            </h2>
                            <h3 className="font-semibold">Check In</h3>
                            <div className="flex gap-4 mt-2 items-center ">
                                <div
                                    onClick={() => {
                                        setActiveCheckIn("card1");
                                    }}
                                    className={
                                        activeCheckIn === "card1"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs ">Today</p>
                                        <h3 className="text-sm ">4 Oct</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckIn("card2");
                                    }}
                                    className={
                                        activeCheckIn === "card2"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs  ">Tue</p>
                                        <h3 className="text-sm ">6 Oct</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckIn("card3");
                                    }}
                                    className={
                                        activeCheckIn === "card3"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs  ">Wed</p>
                                        <h3 className="text-sm ">7 Oct</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckIn("card4");
                                    }}
                                    className={
                                        activeCheckIn === "card4"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs  ">Wed</p>
                                        <h3 className="text-sm ">7 Oct</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Check Out</h3>
                            <div className="flex gap-4 mt-2 items-center ">
                                <div
                                    onClick={() => {
                                        setActiveCheckOut("card1");
                                    }}
                                    className={
                                        activeCheckOut === "card1"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    <div className="">
                                        <p className="text-xs">Sun</p>
                                        <h3 className="text-sm ">3 Nov</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckOut("card2");
                                    }}
                                    className={
                                        activeCheckOut === "card2"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    <div className="">
                                        <p className="text-xs ">Mon</p>
                                        <h3 className="text-sm">4 Nov</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckOut("card3");
                                    }}
                                    className={
                                        activeCheckOut === "card3"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs ">Wed</p>
                                        <h3 className="text-sm">5 Nov</h3>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveCheckOut("card4");
                                    }}
                                    className={
                                        activeCheckOut === "card4"
                                            ? "bg-blue-700 text-white border-blue-700 p-4 px-6 cursor-pointer text-center rounded-xl"
                                            : "bg-gray-100 border-gray-100 rounded-xl p-4 px-6 cursor-pointer text-center"
                                    }
                                >
                                    {" "}
                                    <div className="">
                                        <p className="text-xs ">Wed</p>
                                        <h3 className="text-sm ">5 Nov</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl mt-2 mb-2">Note To Owner</h3>
                            <textarea
                                name="note"
                                id="note"
                                className="w-full border-2 text-sm bg-gray-100 border-gray-100 rounded-lg p-2 focus:outline-blue-700 "
                                rows={6}
                                cols={12}
                                placeholder="Enter here "
                            ></textarea>

                            <button
                                type="submit"
                                className="mt-4 cursor-pointer w-full bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-2 border-blue-700 px-6 py-2 rounded-lg transition-all duration-200"
                            >
                                Submit
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default RoomDetails;
