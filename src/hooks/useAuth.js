import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [isLogged, setIsLog] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      return exp < now;
    } catch {
      return true;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token || isTokenExpired(token)) {
        localStorage.removeItem("authToken");
        setLoading(false);
        return;
      }

      try {
        const { id } = jwtDecode(token);
        if (!id) return setLoading(false);

        const res = await fetch(`https://apidevto.onrender.com/users/${id}`);
        const data = await res.json();

        if (!data.success) return;

        const userFound = data.data.userFound;
        setUser(userFound);
        localStorage.setItem("currentUser", JSON.stringify(userFound));
        setIsLog(true);
      } catch (err) {
        console.error("Error de autenticación", err);
        setIsLog(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, isLogged, loading };
};
