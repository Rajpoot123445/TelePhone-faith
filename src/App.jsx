import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PhoneNumberOptions from "./components/PhoneNumberOptions.jsx";
import FreeFeatures from "./components/FreeFeatures.jsx";
import PremiumFeatures from "./components/PremiumFeatures.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Trust from "./components/Trust.jsx";
import ContactUs from "./components/ContactUs.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import Usage from "./components/Usage.jsx";
import WhatsAppBussiness from "./components/WhatsAppBussiness.jsx";
import OutBoundCall from "./components/OutBoundCall.jsx";
import ISDN from "./components/ISDN.jsx";
import Voip from "./components/Voip.jsx";

function App() {
  const loc = useLocation();
  const showNavbar = !(loc.pathname.includes('control-panel') || loc.pathname.includes('usage') );
  return (
   
      <div className="body">
        {
          showNavbar && <>
            <Header />
            <Trust />
          </>
        }
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/phone-number-options" element={<PhoneNumberOptions />} />
          <Route path="/free-features" element={<FreeFeatures />} />
          <Route path="/premium-features" element={<PremiumFeatures />} />
          <Route path="/whatsapp-bussiness" element={<WhatsAppBussiness />} />
          <Route path="/outbound-call" element={<OutBoundCall />} />
          <Route path="/isdn" element={<ISDN />} />
          <Route path="/voip" element={<Voip />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/usage" element={ <Usage /> } />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
