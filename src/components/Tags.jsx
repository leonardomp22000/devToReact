import Tag from "./Tag";
export default function Tags({ tags }) {
  return (
    <section>
      {tags.map((tag) => {
        return (
          <Tag
            key={tag.alt}
            icon={tag.icon}
            alt={tag.alt}
            text={tag.text}
          ></Tag>
        );
      })}
    </section>
  );
}
