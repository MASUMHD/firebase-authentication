import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "./UseAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center text-7xl ml-40 md:ml-60 lg:ml-[700px] mt-20 ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
