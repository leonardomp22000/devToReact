export default function InputTitlePost({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="border-none font-sans text-3xl font-semibold text-black/80 outline-0 placeholder:text-black/70 lg:text-5xl"
      {...props}
    />
  );
}
