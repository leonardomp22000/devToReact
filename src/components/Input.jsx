export default function Input({ type = "text", label = "" }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-lg font-medium text-gray-700">{label}</span>
      <input
        className="rounded-lg border border-gray-300 p-2 outline-0 focus-within:border-2 focus-within:border-blue-800"
        type={type}
      />
    </label>
  );
}
