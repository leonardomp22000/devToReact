import NavBar from "@/components/NavBar";
import CardLogIn from "@/components/CardLogIn";
import Categories from "@/components/Categories";
import OtherCard from "@/components/OtherCard";
import SocialMedia from "@/components/SocialMedia";
import PopularTags from "@/components/PopularTags";
import Button from "@/components/Button";
import MainCard from "@/components/MainCard";
import Posts from "@/components/Posts";
import Challenges from "@/components/Challenges";
import DiscussCards from "@/components/DiscussCards";
import WaterCoolerCards from "@/components/WatercoolerCards";
import { useAuth } from "@/hooks/useAuth";
export default function Home() {
  const { user, isLogged } = useAuth();

  return (
    <div className="mx-auto max-w-7xl">
      <NavBar isLogged={isLogged}></NavBar>

      <div className="mt-2 p-4 sm:flex sm:gap-2.5">
        <aside className="hidden flex-col gap-2 md:block md:grow md:basis-56 lg:flex">
          {/**Este aside es el menu hamburguesa */}
          {!isLogged ? <CardLogIn></CardLogIn> : null}
          <Categories></Categories>
          <OtherCard></OtherCard>
          <SocialMedia></SocialMedia>
          <PopularTags></PopularTags>
        </aside>
        <main className="flex flex-8/12 flex-col gap-3.5 lg:flex-6/12">
          <div className="flex">
            <Button variant="textCard" className="font-bold">
              Relevant
            </Button>
            <Button variant="textCard"> Latest</Button>
            <Button variant="textCard"> Top</Button>
          </div>
          <MainCard></MainCard>
          {user ? (
            <Posts userPicture={user.profilePic} userName={user.name} />
          ) : (
            <p className="text-sm text-gray-500">Cargando publicaciones...</p>
          )}
        </main>

        <aside className="hidden flex-col gap-4 lg:flex lg:basis-1/4">
          <Challenges></Challenges>
          <DiscussCards></DiscussCards>
          <WaterCoolerCards></WaterCoolerCards>
        </aside>
      </div>
    </div>
  );
}
