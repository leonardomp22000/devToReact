import NavBar from "@/components/NavBar";
import CardLogIn from "@/components/CardLogIn";
export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <NavBar></NavBar>

      <div className="mt-2 p-4 sm:flex sm:gap-2.5">
        <aside className="hidden md:block md:grow md:basis-56">
          {/**Este aside es el menu hamburguesa */}
          <CardLogIn></CardLogIn>-
        </aside>
        <main className="flex-8/12 border border-amber-600 lg:flex-6/12">
          <h3>Este es mi main</h3>
        </main>

        <aside className="hidden border border-amber-600 lg:flex lg:basis-1/4">
          {" "}
          {/**Este aside si desaparece por completo */}
          <h2>Este es mi aside derecho</h2>
        </aside>
      </div>
    </div>
  );
}
