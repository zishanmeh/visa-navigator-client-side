import Banner from "../components/Banner";
import LatestVisa from "../components/LatestVisa";
import Subscribe from "../components/Subscribe";
import WhatPeopleSay from "../components/WhatPeopleSay";

const Home = () => {
  return (
    <div>
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
