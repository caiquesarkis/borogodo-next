import '../styles/globals.css'

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhatWeDo from './components/WhatWeDo';
import Costumers from './components/Costumers';
import MarketingData from './components/MarketingData';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MyApp() {
  return(
    <>
      <Navbar/>
      <Banner/>
      <WhatWeDo/>
      <Costumers/>
      <MarketingData/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default MyApp
