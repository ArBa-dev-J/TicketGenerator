import MainTitle from "../MainTitle";
import HomeHeader from "./HomeHeader";
import HomeForm from "./HomeForm";
import HomeLogin from "./HomeLogin";

function Home() {
  return (
    <>
      <main>
        <header className="flex flex-col text-center items-center">
        <MainTitle />
        <HomeHeader />
        </header>
        <section>
        <HomeForm />
        <HomeLogin/>
        </section>
      </main>
    </>
  );
}

export default Home;
