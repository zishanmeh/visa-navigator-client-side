import { useLoaderData } from "react-router-dom";

const MyAddedVisa = () => {
  const visas = useLoaderData();
  console.log(visas);
  if (visas.length < 1) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-center text-4xl font-bold ">No Data Found</h1>
      </div>
    );
  } else {
    return (
      <div>
        {visas.map((visa) => (
          <div key={visa._id}>
            <div>
              <img src={visa.countryImage} alt="" />
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default MyAddedVisa;
