import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";

const ContactUs = () => {
  return (
    <>
      <NavBar page="contact" />
      <PageTitle title="Contact Us" />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactUs;
