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
          <PopularTags></PopularTags>
        </aside>
        <main className="flex-8/12 lg:flex-6/12">
          <div className="flex">
            <Button variant="textCard" className="font-bold">
              {" "}
              Relevant
            </Button>
            <Button variant="textCard"> Latest</Button>
            <Button variant="textCard"> Top</Button>
          </div>
          <MainCard></MainCard>
          <Posts></Posts>
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
