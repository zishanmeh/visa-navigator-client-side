import { useLoaderData } from "react-router-dom";
import UpdateVisaForm from "../components/UpdateVisaForm";
import { useState } from "react";
import Loading from "./Loading";
import { ToastContainer } from "react-toastify";

const MyAddedVisa = () => {
  const visas = useLoaderData();
  const [selectedVisa, setSelectedVisa] = useState(null);
  if (visas.length < 1) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-center text-4xl font-bold ">No Data Found</h1>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">
        {visas.map((visa) => (
          <div key={visa._id}>
            <div>
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="h-48 w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-4">{visa.countryName}</h3>
              <hr className="my-4" />
              <ul className="list-disc list-inside">
                <li>{visa.selectedVisaType} visa.</li>
                <li>{visa.validity} month's validity.</li>
                <li>{visa.visaFee}$ visa fee.</li>
                <li>Take {visa.applicationMethod} application.</li>
                <li>{visa.processingTime} week's to process.</li>
              </ul>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                className="btn btn-neutral btn-outline text-white"
                onClick={() => {
                  setSelectedVisa(visa);
                  document.getElementById("my_modal_5").showModal();
                }}
              >
                Update
              </button>
              <button className="btn btn-warning btn-outline">Delete</button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middlev"
            >
              <div className="modal-box">
                {selectedVisa ? (
                  <UpdateVisaForm visa={selectedVisa}></UpdateVisaForm>
                ) : (
                  <Loading></Loading>
                )}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    );
  }
};

export default MyAddedVisa;
