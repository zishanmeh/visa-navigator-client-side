import { useLoaderData, useNavigate } from "react-router-dom";
import UpdateVisaForm from "../components/UpdateVisaForm";
import { useContext, useState } from "react";
import Loading from "./Loading";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const visas = useLoaderData();
  const [selectedVisa, setSelectedVisa] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`https://visa-navigator-nine.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(`/my-visa/${user.email}`);
          });
      }
    });
  };
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
              <button
                className="btn btn-warning btn-outline"
                onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
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
                    <button className="btn" id="updateModalClose">
                      Close
                    </button>
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
