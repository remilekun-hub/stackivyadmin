import { Navigate } from "react-router-dom";
type prop = {
  children: JSX.Element;
};

function ProtectedRoute({ children }: prop) {
  // const user = localStorage.getItem("user");
  const user = "remi";

  if (!user) {
    return (
      <>
        <Navigate to={"/sign-in"} />
      </>
    );
  }
  return children;
}

export default ProtectedRoute;
