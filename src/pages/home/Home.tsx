import Categories from "./Categories";
import HeroSec from "./HeroSec";
import Recommendation from "./Recommendation";
import AvailableTours from "./AvailableTours";

function Home() {
  return (
    <>
      <HeroSec />
      <Categories />
      <Recommendation />
      <AvailableTours />
    </>
  );
}

export default Home;
