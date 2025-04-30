import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [isLogged, setIsLog] = useState(false);
  const [user, setUser] = useState(null);
  const decodeToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      return decoded.id;
    } catch (error) {
      console.error("Token inválido", error);
      localStorage.removeItem("authToken");
      return null;
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const userId = decodeToken();
      if (!userId) return;

      try {
        const res = await fetch(`http://localhost:8080/users/${userId}`);
        const data = await res.json();

        if (!data.success) {
          return;
        }

        const userFound = data.data.userFound;
        setUser(userFound);
        localStorage.setItem("currentUser", JSON.stringify(userFound));
        setIsLog(true);
      } catch (err) {
        console.error("Error  de autenticacion", err);
        setIsLog(false);
      }
    };

    fetchUser();
  }, []);
  return { user, isLogged };
};
