export default function CardBase({ children, className = "" }) {
  return (
    <section className={`w-full rounded-md bg-white p-4 ${className}`}>
      {children}
    </section>
  );
}
