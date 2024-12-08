import { Link, useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const allVisas = useLoaderData();
  return (
    <div>
      <div className="flex justify-center mb-5">
        <h1 className="text-center text-4xl font-bold mb-16">All Visa</h1>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 lg:grid-cols-4 justify-between items-start gap-4">
        {allVisas.map((visa) => (
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
              <p>Process time: {visa.processingTime} weeks</p>
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
    </div>
  );
};

export default AllVisa;
