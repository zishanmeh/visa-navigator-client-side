import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../pages/Loading";
import { Fade } from "react-awesome-reveal";

const LatestVisa = () => {
  const [latestVisa, setLatestVisa] = useState(null);
  useEffect(() => {
    fetch("https://visa-navigator-nine.vercel.app/latestVisa")
      .then((res) => res.json())
      .then((data) => setLatestVisa(data));
  }, []);

  console.log(latestVisa);
  return (
    <div className="my-16">
      <Fade>
        <h1 className="text-center font-bold text-4xl mb-12">Latest Visa</h1>
        {!latestVisa ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4">
            {latestVisa.map((visa) => (
              <div
                className="card card-compact bg-base-100 shadow-xl text-gray-700"
                key={visa._id}
              >
                <figure className="h-36">
                  <img
                    src={visa.countryImage}
                    alt={`Flag of ${visa.countryName} country`}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{visa.countryName}</h2>
                  <p>Type: {visa.selectedVisaType} Visa</p>
                  <p>Process time: {visa.processingTime} week's</p>
                  <p>Application method: {visa.applicationMethod}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/visa/${visa._id}`} className="btn btn-neutral">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Fade>
    </div>
  );
};

export default LatestVisa;
