import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
