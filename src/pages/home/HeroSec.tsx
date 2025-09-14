import beachView from "@/assets/images/beach-view.jpg";
import longBay from "@/assets/images/long-bay.jpg";
import bridge from "@/assets/images/bridge.jpg";
import roadOnSea from "@/assets/images/road-on-sea.jpg";
import lake from "@/assets/images/lake.jpg";
import curlyArrow from "@/assets/icons/curly-arrow.svg";
import heroImgMobile from "@/assets/images/hero-img-mobile.jpg";
import HeroImg from "./components/HeroImg";

function HeroSec() {
    return (
        <>
            <section className="max-h-80 overflow-hidden rounded-md">
                <img
                    src={heroImgMobile}
                    alt="Adventure mountain view"
                    className="block sm:hidden object-contain object-center size-full"
                />
            </section>
            <section className="hidden sm:grid grid-cols-2 p-8 justify-center items-center gap-4 max-w-8xl mx-auto">
                <div className="max-w-96">
                    <h1 className="font-semibold text-4xl mb-4 relative">
                        Visit The Most
                        <br />
                        <span className="text-blue-700">
                            Beautiful Places
                        </span>{" "}
                        In The World
                        <img
                            src={curlyArrow}
                            alt="Curly arrow"
                            className="w-18 absolute right-0 top-16"
                        />
                    </h1>
                    <p className="text-gray-600">
                        "Explore stunning destinations around the globe. Find
                        travel inspiration, top attractions, and plan your next
                        adventure—all from one platform."
                    </p>
                </div>
                <div className="grid grid-cols-5 grid-rows-4 h-[calc(100vh-4rem)] gap-6 max-w-4xl">
                    <HeroImg
                        imgSrc={beachView}
                        imgAlt="Beach view"
                        styles="row-start-1 row-end-3 col-start-1 col-end-3 rounded-tl-xl"
                    />
                    <HeroImg
                        imgSrc={longBay}
                        imgAlt="Long Bay view"
                        styles="row-start-3 row-end-5 col-start-1 col-end-3 rounded-xl"
                    />
                    <HeroImg
                        imgSrc={bridge}
                        imgAlt="Bridge view"
                        styles="row-start-2 row-end-4 col-start-3 col-end-5 rounded-xl rounded-tl-none"
                    />
                    <HeroImg
                        imgSrc={roadOnSea}
                        imgAlt="Road on sea view"
                        styles="row-start-4 row-end-5 col-start-3 col-end-5 rounded-xl"
                    />
                    <HeroImg
                        imgSrc={lake}
                        imgAlt="Lake view"
                        styles="row-start-3 row-end-5 col-start-5 col-end-6 rounded-tr-xl rounded-br-xl"
                    />
                </div>
            </section>
        </>
    );
}

export default HeroSec;
