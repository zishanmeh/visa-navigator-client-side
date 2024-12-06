import { useLoaderData } from "react-router-dom";

const MyVisaApplication = () => {
  const visas = useLoaderData();
  if (visas.length < 1) {
    return <h1 className="text-center text-4xl font-bold">No Data Found</h1>;
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        You have applied for {visas.length} visa{visas.length > 1 && "s"}.{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-8 mt-12">
        {visas.map((visa, idx) => (
          <div
            key={idx}
            className="border px-3 py-4 border-gray-700 rounded-md shadow-sm"
          >
            <div className="">
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="h-48 w-full rounded-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-4">{visa.countryName}</h3>
              <hr className="my-4" />
              <ul className="list-disc list-inside text-gray-400 flex flex-col gap-2">
                <li>
                  Application for {visa.firstName} {visa.lastName}
                </li>
                <li>Applied in {visa.appliedDate}</li>
                <li>Contact email {visa.email}</li>
                <li>{visa.selectedVisaType} visa.</li>
                <li>{visa.validity} month's validity.</li>
                <li>{visa.applicationFee}$ visa fee.</li>
                <li>Take {visa.applicationMethod} application.</li>
                <li>{visa.processingTime} week's to process.</li>
              </ul>
            </div>
            <button className="btn btn-sm btn-warning mt-3">Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
