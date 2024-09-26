import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContentInfoBlack from './components/infoBlack/InfoBlack';
import Header from './components/header/Header'
import SectionWithBackground from './components/firstSectionWithBackground/FirstSectionWithBackground';
import Category from './components/category/Category';
import Technology from './components/technology/Technology';
import Advantages from './components/advantages/Advantages';
import Works from './components/ourWorks/OurWorks';
import Asks from './components/asks/Asks';
import Footer from './components/footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContentInfoBlack />
    <Header />
    <SectionWithBackground />
    <Category />
    <Technology />
    <Advantages />
    <Works />
    <Asks/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
