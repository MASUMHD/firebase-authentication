// ...............................................


// use react hook form and use sweet alert 2 for error message


// .......................................


// ......Log In Page...........



import { Link, useLocation, useNavigate } from "react-router-dom";
import BackgroundImg from "../../../../public/image/Frame.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";



const SignIn = () => {
  const [Error, setError] = useState("");
  const { loginUser } = UseAuth();


  const { register, handleSubmit } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    // console.log(data);

    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        if(result.user){
            navigate(from)
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
      });
        // console.log(result.user);
      })
      .catch((error) => {
        // console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password or Email is not correct. Please register first!",
          footer: '<a href="#">Why do I have this issue?</a>'
      });
        setError(error.message);
      });

  };

  return (
    <div>
        {/* from design */}
    </div>
  );
};

export default SignIn;
