import Banner from "../components/Banner";
import LatestVisa from "../components/LatestVisa";
import Subscribe from "../components/Subscribe";
import WhatPeopleSay from "../components/WhatPeopleSay";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-center mb-16">
        <Typewriter
          words={["Visa", "Travel", "Enojoy", "Repeat!"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <LatestVisa></LatestVisa>
      </div>
      <div>
        <Subscribe></Subscribe>
      </div>
      <div>
        <WhatPeopleSay></WhatPeopleSay>
      </div>
    </div>
  );
};

export default Home;
