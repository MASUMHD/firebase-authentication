import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = UseAuth();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handelSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if(result.user){
          navigate(from)
      }
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <>
        <button
          onClick={() => handelSocialLogin(googleLogin)}
          className="w-full btn btn-outline btn-info  text-xl"
        >
          <FaGoogle />
          Login with Google
        </button>
      </>
    </div>
  );
};

export default SocialLogin;
