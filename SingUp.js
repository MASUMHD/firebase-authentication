

// ............................

// ......... Authentication  registration page ........

// ...........................






import { Link, useLocation, useNavigate } from "react-router-dom";
import BackgroundImg from "../../../../public/image/Frame.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";




//  use react hook form and use sweet alert 2 for error message..................




const SingUp = () => {
  const { createUser } = UseAuth();
  const [passwordError, setPasswordError] = useState("");

  const { register, handleSubmit } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const onSubmit = (data) => {
    // console.log(data);

    const { email, password } = data;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }

        // sweet alert

        let timerInterval;
        Swal.fire({
          title: "User created successfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        setPasswordError(error.message);
      });

    
  };

  return (
    <div>
        {/* register from */}
    </div>
  );
};

export default SingUp;
