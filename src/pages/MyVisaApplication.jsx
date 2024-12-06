import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyVisaApplication = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to trac anymore!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your application file has been deleted.",
          icon: "success",
        });
        fetch(`http://localhost:3000/application/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(`/visa/application/${user.email}`);
          });
      }
    });
  };
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
            <button
              className="btn btn-sm btn-warning mt-3"
              onClick={() => handleCancel(visa._id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
