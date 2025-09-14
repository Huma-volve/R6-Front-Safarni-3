import Categories from "./Categories";
import HeroSec from "./HeroSec";
import Recommendation from "./Recommendation";
import AvailableTours from "./AvailableTours";

function Home() {
    return (
        <main className="p-3 lg:p-0 container mx-auto overflow-x-hidden w-100vw">
            <HeroSec />
            <Categories />
            <Recommendation />
            <AvailableTours />
        </main>
    );
}

export default Home;
