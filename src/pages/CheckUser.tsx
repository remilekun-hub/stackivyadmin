import { useEffect, useState } from "react";
import Thereisuser from "./Thereisuser";
import Signin from "./Signin";

function CheckUser() {
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    const newUser = localStorage.getItem("user");
    if (newUser) {
      setNewUser(newUser);
    }
  }, [newUser]);

  return <>{newUser ? <Thereisuser /> : <Signin />}</>;
}

export default CheckUser;
