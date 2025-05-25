import { useEffect, useState } from "react";

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
            `http://localhost:8080/post?title=${encodeURIComponent(query)}`,
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
      const endpoint = `http://localhost:8080/post/${id}`;
      if (confirm("¿Seguro que quieres eliminar el post?")) {
        // Code to execute if the user clicks "OK"
        const response = await fetch(endpoint, {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        });
        if (response.ok) {
          setResults((prev) => prev.filter((post) => post._id !== id));
        } else {
          console.error("Error al eliminar el post", await response.text());
        }
      }
    } catch (error) {
      console.error("Ocurrio un error inesperado", error);
    }
  };

  return { query, setQuery, results, onDelete };
};
