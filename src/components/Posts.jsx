import CardBase from "./CardBase";
import Post from "./Post";
export default function Posts() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <CardBase>
        <Post
          creationDate={"Apr 3"}
          userPicture={
            "https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png"
          }
          userName={"Jeongho Nam"}
          mainText={
            "Announcing the Pulumi Deploy and Document Challenge: $3,000 in Prizes!"
          }
        ></Post>
      </CardBase>
      <CardBase>
        <Post
          creationDate={"Apr 3"}
          userPicture={
            "https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png"
          }
          userName={"Jeongho Nam"}
          mainText={
            "Announcing the Pulumi Deploy and Document Challenge: $3,000 in Prizes!"
          }
        ></Post>
      </CardBase>
    </div>
  );
}
