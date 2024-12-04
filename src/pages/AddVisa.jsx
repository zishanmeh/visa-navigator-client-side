import AddVisaForm from "../components/AddVisaForm";

const AddVisa = () => {
  return (
    <div className="font-poppins">
      <div className="mb-6">
        <h1 className="text-center text-4xl font-bold">Let's Add your visa</h1>
      </div>
      <div className="md:w-1/2 mx-auto w-full">
        <AddVisaForm></AddVisaForm>
      </div>
    </div>
  );
};

export default AddVisa;
