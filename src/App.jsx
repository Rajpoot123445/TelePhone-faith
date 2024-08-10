import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PhoneNumberOptions from "./components/PhoneNumberOptions.jsx";
import FreeFeatures from "./components/FreeFeatures.jsx";
import PremiumFeatures from "./components/PremiumFeatures.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/phone-number-options" element={<PhoneNumberOptions />} />
          <Route path="/free-features" element={<FreeFeatures />} />
          <Route path="/premium-features" element={<PremiumFeatures />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
