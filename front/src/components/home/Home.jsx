import MainTitle from "../MainTitle";
import HomeHeader from "./HomeHeader";
import HomeForm from "./HomeForm";

function Home() {
  return (
    <>
      <main>
        <header className="flex flex-col text-center items-center">
        <MainTitle />
        <HomeHeader />
        </header>
        <HomeForm />
      </main>
    </>
  );
}

export default Home;
