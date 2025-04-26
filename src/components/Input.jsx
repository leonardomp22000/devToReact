import { useField } from "formik";
export default function Input({ type = "text", label = "", ...props }) {
  const [field, meta] = useField(props);
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-lg font-medium text-gray-700">{label}</span>
      <input
        className="rounded-lg border border-gray-300 p-2 outline-0 focus-within:border-2 focus-within:border-blue-800"
        type={type}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </label>
  );
}
