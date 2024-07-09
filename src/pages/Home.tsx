import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import StatsCounter from "../components/StatsCounter";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
      <NavBar page="home" />
      <HeroSection />
      <StatsCounter />
      <WhyUs />
      <Services />
      <GetStarted />
      <CommentsSection />
      <Footer />
    </>
  );
};

export default Home;
