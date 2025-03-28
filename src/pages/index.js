import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <NavBar></NavBar>

      <div className="mt-2 sm:flex sm:gap-2.5">
        <aside className="hidden border border-amber-600 md:block md:flex-1/3">
          {" "}
          {/**Este aside es el menu hamburguesa */}
          <h2>Este es mi aside izquierdo</h2>
        </aside>
        <main className="w-full border border-amber-600">
          <h3>Este es mi main</h3>
        </main>

        <aside className="hidden border border-amber-600 lg:flex lg:flex-1/3">
          {" "}
          {/**Este aside si desaparece por completo */}
          <h2>Este es mi aside derecho</h2>
        </aside>
      </div>
    </div>
  );
}
