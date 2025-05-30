import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const usePosts = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    }

    const delayDebounce = setTimeout(() => {
      const fetchResults = async () => {
        try {
          const response = await fetch(
            `https://apidevto.onrender.com/post?title=${encodeURIComponent(query)}`,
          );
          const data = await response.json();

          if (data.success) {
            setResults(data.data.posts);
          } else {
            setResults([]);
          }
        } catch (error) {
          console.error("Error al cargar los posts", error);
        }
      };
      fetchResults();
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const onDelete = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      const endpoint = `https://apidevto.onrender.com/post/${id}`;

      // Code to execute if the user clicks "OK"
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        setResults((prev) => prev.filter((post) => post._id !== id));
        toast.success("Post eliminado correctamente");
      } else {
        console.error("Error al eliminar el post", await response.text());
        toast.error("No eres el dueño del post");
      }
    } catch (error) {
      console.error("Ocurrio un error inesperado", error);
    }
  };

  return { query, setQuery, results, onDelete };
};
