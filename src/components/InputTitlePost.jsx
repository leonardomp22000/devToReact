import CardBase from "./CardBase";
import Button from "./Button";
import { useField } from "formik";
export default function InputTitlePost({ type = "text", ...props }) {
  const [field] = useField(props);
  return (
    <CardBase className="!sm:p-2 flex flex-col gap-3 md:px-9 md:py-6">
      <div className="max-w-2xl">
        <Button
          className="w-full border-gray-400 text-black/80 sm:w-fit"
          variant="outlined"
        >
          Add a cover image
        </Button>
      </div>
      <input
        type={type}
        className="border-none font-sans text-xl font-semibold text-black/80 outline-0 placeholder:text-black/70 sm:text-2xl md:text-3xl lg:text-5xl"
        {...field}
        {...props}
      />
      <p className="text-black/60">Add up to 4 tags</p>
    </CardBase>
  );
}
