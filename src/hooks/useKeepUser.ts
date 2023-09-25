import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useKeepUser() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.fullname === "Gabriel Barbosa") {
      const recoverData = JSON.parse(sessionStorage.getItem("user") || "{}");
      if (Object.keys(recoverData).length) {
        setUser(recoverData);
      }
    }
  }, [user]);

  return { user, setUser };
}
