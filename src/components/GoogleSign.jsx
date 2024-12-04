import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleSign = () => {
  const { signInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const userGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Google sign in Successfull");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="my-4">
      <button
        className="btn btn-neutral btn-outline"
        onClick={userGoogleSignIn}
      >
        <FcGoogle size={25}></FcGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default GoogleSign;
