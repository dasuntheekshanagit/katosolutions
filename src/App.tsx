import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ContactUs from "./pages/ContactUs";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
