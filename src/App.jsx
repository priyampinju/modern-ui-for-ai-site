import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Button className="mt-10" href="#login" /> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
