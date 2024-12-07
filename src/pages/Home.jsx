import Banner from "../components/Banner";
import LatestVisa from "../components/LatestVisa";
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
        <WhatPeopleSay></WhatPeopleSay>
      </div>
    </div>
  );
};

export default Home;
