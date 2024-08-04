import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PhoneNumberOptions from './components/PhoneNumberOptions.jsx';
import FreeFeatures from './components/FreeFeatures.jsx';
import PremiumFeatures from './components/PremiumFeatures.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes } from 'react-router-dom';

import './App.css'

function App() {

  return (
   <BrowserRouter>
      <div>
        <Header />
        <Routes>

        </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
