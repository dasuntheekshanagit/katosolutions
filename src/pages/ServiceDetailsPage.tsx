import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTitle2 from "../components/PageTitle2";
import ServiceDetails from "../components/ServiceDetails";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  return (
    <>
      <NavBar page="services" />
      <PageTitle2 title={serviceId ?? ""} />
      <ServiceDetails serviceId={serviceId ?? ""} /> <GetStarted />
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
