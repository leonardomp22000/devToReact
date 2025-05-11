import { useRef, useEffect } from "react";
import CardBase from "./CardBase";
import { Field, useField } from "formik";

export default function BodyPostInput({ type = "text", ...props }) {
  const [field] = useField(props);
  const textareaRef = useRef(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto"; // Reinicia la altura
      el.style.height = `${el.scrollHeight}px`; // Ajusta a contenido
    }
  };

  useEffect(() => {
    handleInput(); // Ajusta al montarse con contenido inicial
  }, []);

  return (
    <CardBase className="!sm:p-2 h-48 md:px-9 md:py-6">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        className="w-full resize-none overflow-hidden border-none font-sans text-xl text-black/80 outline-0 placeholder:text-black/70 lg:text-2xl"
        {...field}
        {...props}
      />
    </CardBase>
  );
}
