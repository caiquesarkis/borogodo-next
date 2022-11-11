import '../styles/globals.css'

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Costumers from './components/Costumers';
import MarketingData from './components/MarketingData';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';

function MyApp() {
  return(
    <>
      <Navbar/>
      <Banner/>
      <WhatWeDo/>
      <Costumers/>
      <MarketingData/>
      <Footer/>
    </>
  )
}

export default MyApp
