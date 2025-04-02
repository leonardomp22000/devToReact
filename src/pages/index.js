import NavBar from "@/components/NavBar";
import CardLogIn from "@/components/CardLogIn";
import Categories from "@/components/Categories";
import OtherCard from "@/components/OtherCard";
import SocialMedia from "@/components/SocialMedia";
export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <NavBar></NavBar>

      <div className="mt-2 p-4 sm:flex sm:gap-2.5">
        <aside className="hidden flex-col gap-2 md:block md:grow md:basis-56 lg:flex">
          {/**Este aside es el menu hamburguesa */}
          <CardLogIn></CardLogIn>
          <Categories></Categories>
          <OtherCard></OtherCard>
          <SocialMedia></SocialMedia>
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
