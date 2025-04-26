export default function Checkbox({ value = "", label = "" }) {
  return (
    <div>
      <input
        className="rounded-lg"
        type="checkbox"
        name="remember"
        id="remember"
        value={value}
      />
      <label className="ml-2 font-sans" htmlFor="remember">
        {label}
      </label>
    </div>
  );
}
