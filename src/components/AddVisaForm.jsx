import { useState } from "react";

const AddVisaForm = () => {
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const handleVisaTypeChange = (event) => {
    setSelectedVisaType(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedDocuments((prevSelected) => {
      if (checked) {
        // Add to the array if checked
        return [...prevSelected, value];
      } else {
        // Remove from the array if unchecked
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const visaFee = form.visaFee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const newVisa = {
      countryImage,
      countryName,
      processingTime,
      description,
      ageRestriction,
      visaFee,
      validity,
      applicationMethod,
      selectedVisaType,
      selectedDocuments,
    };
    console.log(newVisa);
    fetch("http://localhost:3000/addVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <form className="card-body text-black" onSubmit={handleSubmit}>
        {/* Here is column 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country image</span>
            </label>
            <input
              type="text"
              placeholder="Country Image URL"
              className="input input-bordered"
              name="countryImage"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country name</span>
            </label>
            <input
              type="text"
              placeholder="Country name"
              className="input input-bordered"
              name="countryName"
              required
            />
          </div>
        </div>

        {/* Here is column 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs text-black"
              value={selectedVisaType}
              onChange={handleVisaTypeChange}
            >
              <option value="" disabled>
                Your visa type?
              </option>
              <option value="Student">Student</option>
              <option value="Tourist">Tourist</option>
              <option value="Business">Business</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              placeholder="Processing Time"
              className="input input-bordered"
              name="processingTime"
              required
            />
          </div>
        </div>

        {/* Here is column 3 */}
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Required Documents</span>
            </label>
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                value={"Valid passport"}
                className="checkbox"
                onChange={handleCheckboxChange}
              />
              <span className="label-text">Valid passport</span>
            </label>
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox"
                value={"Visa application form"}
                onChange={handleCheckboxChange}
              />
              <span className="label-text">Visa application form</span>
            </label>
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox"
                value={"Recent passport-sized photograph"}
                onChange={handleCheckboxChange}
              />
              <span className="label-text">
                Recent passport-sized photograph
              </span>
            </label>
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleCheckboxChange}
                value={"Bank statement"}
              />
              <span className="label-text">Bank statement</span>
            </label>
          </div>
        </div>

        {/* Here is column 4 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Description"
            className="input input-bordered"
            required
          ></textarea>
        </div>

        {/* Here is column 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age Restriction</span>
            </label>
            <input
              type="number"
              placeholder="Age_restriction"
              className="input input-bordered"
              name="ageRestriction"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visa Fee</span>
            </label>
            <input
              type="number"
              placeholder="Visa Fee"
              className="input input-bordered"
              name="visaFee"
              required
            />
          </div>
        </div>

        {/* Here is column 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Validity</span>
            </label>
            <input
              type="text"
              placeholder="Validity"
              className="input input-bordered"
              name="validity"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application method</span>
            </label>
            <input
              type="text"
              placeholder="Application method"
              className="input input-bordered"
              name="applicationMethod"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Add Visa</button>
        </div>
      </form>
    </div>
  );
};

export default AddVisaForm;
