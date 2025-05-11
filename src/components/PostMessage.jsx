export default function PostMessage({ isTitle = true }) {
  return (
    <section>
      {isTitle ? (
        <section>
          <h2 className="font-bold">Writing a Great Post Title</h2>
          <ul className="list-disc pl-5 text-black/80">
            <li>
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence.
            </li>
            <li>
              Use keywords where appropriate to help ensure people can find your
              post by search.
            </li>
          </ul>
        </section>
      ) : (
        <section>
          <h2 className="font-bold">Editor basics</h2>
          <ul className="list-disc pl-5 text-black/80">
            <li>
              Use Markdown to write and format posts. Commonly used syntax
            </li>
            <li>
              Embed rich content such as Tweets, YouTube videos, etc. Use the
              complete URL:
            </li>
            <li>
              In addition to images for the post's content, you can also drag
              and drop a cover image.
            </li>
          </ul>
        </section>
      )}
    </section>
  );
}
