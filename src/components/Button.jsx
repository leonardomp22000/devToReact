import clsx from "clsx";
export default function Button({
  children,
  variant = "",
  className = "",
  props,
}) {
  const baseStyles = "rounded-lg px-4 py-2 font-sans hover:underline";
  const variants = {
    outlined:
      "border border-[#3B49DF]  hover:bg-blue-700 hover:text-white text-[#3B49DF]",
    text: "hover:bg-blue-50 hover:text-blue-700",
    textCard: "text-lg hover:bg-white hover:text-blue-700 hover:no-underline",
  };
  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
