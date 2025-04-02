import Tag from "./Tag";
export default function Tags({ tags }) {
  return (
    <section>
      {tags.map((tag, index) => {
        return <Tag key={tag - index} icon={tag.icon} text={tag.text}></Tag>;
      })}
    </section>
  );
}
