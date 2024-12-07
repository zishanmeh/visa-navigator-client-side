import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Subscribe = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-16 py-12 px-8 bg-white rounded-lg">
      <h1 className="text-center text-4xl font-bold text-gray-700">
        Stay Updated!
      </h1>
      <p className="text-center text-sm text-gray-500 my-5">
        Subscribe to our Visa Newsletter for the latest updates, tips, and
        exclusive offers.
      </p>
      <div className="join flex justify-center">
        <input
          className="input input-bordered join-item border-neutral text-gray-700"
          placeholder="Email"
          value={user?.email}
        />
        <button
          className="btn join-item btn-neutral"
          onClick={() => {
            toast.success("Thank your for subscribe.");
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
