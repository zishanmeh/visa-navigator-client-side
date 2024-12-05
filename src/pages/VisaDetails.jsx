import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const VisaDetails = () => {
  const visa = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    countryImage,
    countryName,
    description,
    processingTime,
    ageRestriction,
    visaFee,
    validity,
    applicationMethod,
    selectedVisaType,
    selectedDocuments,
  } = visa;
  console.log(selectedDocuments);
  return (
    <div className="hero bg-base-200 min-h-screen text-gray-700">
      <div className="hero-content flex-col lg:flex-row">
        <img src={countryImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{countryName}</h1>
          <p className="py-6">{description}</p>
          <div>
            <p className="text-2xl font-bold">Info</p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                Type of visa: <strong>{selectedVisaType}</strong>
              </li>
              <li>{processingTime} week's of process time.</li>
              <li>Needs to be over {ageRestriction} years old.</li>
              <li>Total visa cost {visaFee}$.</li>
              <li>This visa will be validate for {validity} month's</li>
              <li>Application method: {applicationMethod}</li>
              {selectedDocuments.length > 0 && (
                <>
                  <p className="text-xl font-bold">Documents you may need: </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedDocuments.map((doc, idx) => (
                      <p
                        className="bg-green-200 p-2 text-sm rounded-full text-green-700"
                        key={idx}
                      >
                        #{doc}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </ul>
          </div>
          <button
            className="btn btn-neutral mt-4"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Apply for the visa!
          </button>
          {/* Modal start */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      name="email"
                      value={user.email}
                      disabled
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="input input-bordered"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered"
                      name="lastName"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Applied Date</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      name="appliedDate"
                      value={
                        new Date().getDate() +
                        "/" +
                        (new Date().getMonth() + 1) +
                        "/" +
                        new Date().getFullYear()
                      }
                      required
                      disabled
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Application Fee</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      name="applicationFee"
                      value={visaFee}
                      required
                      disabled
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-neutral btn-outline">
                      Apply
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* Modal End */}
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
