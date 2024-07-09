import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OurStory from "../components/OurStory";
import PageTitle from "../components/PageTitle";
import ReviewForm from "../components/ReviewForm";
import StatsCounter from "../components/StatsCounter";
import WhyUs from "../components/WhyUs";

const AboutUs = () => {
  return (
    <>
      <NavBar page="aboutus" />
      <PageTitle title="About Us" />
      <OurStory />
      <StatsCounter />
      <WhyUs />
      <CommentsSection />
      <ReviewForm />
      <Footer />
    </>
  );
};

export default AboutUs;
