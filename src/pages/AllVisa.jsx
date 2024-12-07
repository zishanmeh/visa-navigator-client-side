import { Link, useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const allVisas = useLoaderData();
  return (
    <div>
      <div className="flex justify-center mb-5">
        <details className="dropdown">
          <summary className="btn btn-outline text-xl text-white">
            All Visa
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] text-gray-700 w-52 p-2 shadow">
            <li>
              <Link>Student Visa</Link>
            </li>
            <li>
              <Link>Business Visa</Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4">
        {allVisas.map((visa) => (
          <div
            className="card card-compact bg-base-100 shadow-xl text-gray-700"
            key={visa._id}
          >
            <figure>
              <img
                src={visa.countryImage}
                alt={`Flag of ${visa.countryName} country`}
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
