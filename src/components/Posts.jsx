import CardBase from "./CardBase";
import Post from "./Post";
import { useEffect, useState } from "react";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const endpoint = "http://localhost:8080/post";
        const response = await fetch(endpoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (!data.success) {
          console.error("Error en el fetch de la base de datos");
        }
        const posts = data.data.posts;
        setPosts(posts);
      } catch (error) {
        console.error("Error en el fetch" || error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {posts ? (
        posts.map((post, index) => {
          return (
            <CardBase key={index}>
              <Post
                creationDate={"Apr 3"}
                userPicture={
                  post.user.profilePic ||
                  "https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png"
                }
                userName={post.user.name}
                mainText={
                  post.title ||
                  "Announcing the Pulumi Deploy and Document Challenge: $3,000 in Prizes!"
                }
                body={post.body}
              ></Post>
            </CardBase>
          );
        })
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}
