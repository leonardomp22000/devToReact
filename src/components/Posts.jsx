import Post from "./Post";

export default function Posts({ results, onDelete }) {
  return (
    <div className="flex flex-col gap-4">
      {results ? (
        results.map((post, index) => {
          return (
            <Post
              onDelete={onDelete}
              postID={post._id}
              key={index}
              creationDate={new Date(post.created_at).toLocaleDateString(
                "es-ES",
                {
                  day: "numeric",
                  month: "short",
                },
              )}
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
          );
        })
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}
