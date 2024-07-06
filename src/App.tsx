import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import StatsCounter from "./components/StatsCounter";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <>
      <NavBar page="home" />
      <HeroSection />
      <StatsCounter />
      <WhyUs />
      <Services />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
