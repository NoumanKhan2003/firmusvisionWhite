import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ClientPage from "./Pages/ClientPage.jsx";
import ServicesPage from "./Pages/ServicePage.jsx";
import NetworkPage from "./Pages/NetworkPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
