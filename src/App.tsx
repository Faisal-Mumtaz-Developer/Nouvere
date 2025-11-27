import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Get_Started from "./pages/GetStarted";
import Services from "./pages/Services";
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Home from './pages/Home'
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <Header />
       <ScrollToTop />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/get-started" element={<Get_Started />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
