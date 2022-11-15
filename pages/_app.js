import "../styles/globals.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhatWeDo from "./components/WhatWeDo";
import Costumers from "./components/Costumers";
import MarketingData from "./components/MarketingData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

function MyApp() {
  return (
    <>
      <Head>
        <title>Borogodó</title>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon"></link>
        <meta
          name="description"
          content="Mapeamos todo o ecossistema de influência para dar aquele Borogodó para a sua marca ser mais vista, vender mais e seu perfil crescer de forma estruturada.
Não adianta fazer post e site pensando somente na estrutura do digital, é necessário ter estratégia para seu negócio começar a andar, e depois acelerar.
E para traçar a melhor estratégia é preciso achar as pessoas certas."
        />
        <link href="URL" rel="canonical"></link>
      </Head>

      <Navbar />
      <Banner />
      <WhatWeDo />
      <Costumers />
      <MarketingData />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
