import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import Services from "../components/Services";
import StatsCounter from "../components/StatsCounter";

const OurServices = () => {
  return (
    <>
      <NavBar page="services" />
      <PageTitle title="Our Services" />
      <Services />
      <StatsCounter />
      <GetStarted />
      <CommentsSection />
      <Footer />
    </>
  );
};

export default OurServices;
