import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

// components

import Navbar from "components/Navbars/Navbar.js";
import ScrollingNavbar from "components/Navbars/ScrollingNavbar";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/petajavesi.jpeg";

export default function Landing() {
  return (
    <>
      <ScrollingNavbar />
      {/*<Navbar transparent /> */}
      <main className="relative" id="main" name="main">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`
            }}
          >            
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                
                  <div className="justify-center mt-10">
                    <img
                      alt="..."
                      src={require("assets/img/logo.png").default}
                      className="h-1/2 w-1/2 mx-auto"
                    />
                  </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">

                  <div className="lg:pt-12 pt-6 w-full px-4 justify-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">

                        <h6 className="text-xl font-semibold">Monipuoliset puupalvelut</h6>
                        <p className="mt-2 mb-4 text-blueGray-500 text-lg">
                          PuuApua auttaa sinua puuhun liittyvissä toiminnoissa. 
                          Lisätietoja palveluista löydät näiltä sivuilta tai voit ottaa suoraan yhteyttä, 
                          niin kerron mielelläni lisää ja tulen arvioimaan kohteesi!
                        </p>
                        <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="text-xl">
                          <p><b>Puhelinnumero:</b> 040 258 7607</p>
                          <p><b>Sähköposti:</b> puuapua@puuapua.fi</p>
                        </div>

                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>


        <Element id="metsapalvelut" name="metsapalvelut">
          <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4 flex flex-wrap">

              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Puuta metsästä
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    PuuApua auttaa mm. tuulenkaatojen poistoissa (myös pienet määrät ja vaikeat maastot), 
                    konkeloiden laukaisuissa, jättöpuiden noudoissa, rankojen keräämisessä, alueiden maisemoinneissa 
                    sekä tietysti tekee puutavarasta polttopuita. 
                    Kysy lisätietoja tai pyydä arviointikäynnille.  
                  </p>

                  <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center text-center">
                      <div className="w-full md:w-10/12 lg:w-8/12 px-4 mt-5 mb-8">
                        <a className="bg-yellow-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button" href="mailto:puuapua@puuapua.fi?&subject=Tiedustelu metsäpalveluista">
                          Lähetä tiedustelu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <img
                      alt="..."
                      src={require("assets/img/PuuApuaMetsasta1.jpg").default}
                      className="w-full align-middle rounded-t-lg"
                    />

                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >

                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-white fill-current "
                        ></polygon>

                      </svg>
                      <p className="text-md font-light mt-2 text-black">
                        Koneen työleveys on 1,2 metriä ja JärnHäst-vetokoneessa on kumitelat. 
                        Vetokone toimii juonnoissa myös yksin ilman perävaunua. 
                        Tarvittaessa vetokone kääntyy paikallaan ja kykenee toimimaan 
                        vinssiensä avulla myös todella vaikeassa maastossa.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element id="klapikone" name="klapikone">
          <section className="relative py-20">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 bg-blueGray-200"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <img
                      alt="..."
                      src={require("assets/img/Klapeiksi.jpg").default}
                      className="w-full align-middle rounded-t-lg bg-blueGray-200"
                    />

                    <blockquote className="relative p-8 mb-4 bg-blueGray-200">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px "
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-200 fill-current"
                        ></polygon>
                      </svg>
                      <p className="text-md font-light mt-2 text-black bg-blueGray-200">
                        Kone on siirrettävä ja toimii omalla polttomoottorillaan. 
                        Koneessa on säädettävä kuljetin, jonka avulla puut voi tehdä suoraan 
                        vaikka liiteriin, verkkohäkkiin tai klapisäkkeihin.
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Puuta klapeiksi
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Teen asiakkaiden puista, asiakkaiden luona polttopuita eli klapeja. 
                    Polttopuiden tekoon on Pilkemaster Evo 30. Kone on tehokas ja  helposti siirrettävä. 
                    Se toimii polttomoottorin voimalla. Puunhalkaisija voi olla max. 35cm ja 
                    valmiin polttopuun pituudeksi voi valita 20-60 cm.
                  </p>

                  <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center text-center">
                      <div className="w-full md:w-10/12 lg:w-8/12 px-4 mt-5">
                        <a className="bg-yellow-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button" href="mailto:puuapua@puuapua.fi?&subject=Tiedustelu klapipalvelusta">
                          Lähetä tiedustelu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>

        </Element>

        <Element id="puunmyynti" name="puunmyynti">
        <section className="relative py-5 bg-blueGray-200">
          <div className="container mx-auto px-4 flex flex-wrap">
            <div className="flex flex-wrap items-center mt-10">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Puuta myytäväksi
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Myyn myös jonkin verran valmista polttopuuta. Voin tehdä klapeja asiakkaan tarpeiden mukaan: 
                  puulaji, klapin pituus, klapin koko. Tässä tapauksessa kannattaa tilaus tehdä jo keväällä. 
                  Tarvittaessa voin toimittaa valmiiksi katkottuja (esim. 30 cm) puupöllejä kokonaisina ja halkaisupöllin, 
                  jolloin asiakas voi itse nautiskella klapien teosta. <b>Toimitan myös pienempiä määriä.</b>
                </p>

                <div className="container mx-auto px-4 h-full">
                  <div className="flex content-center items-center justify-center text-center">
                    <div className="w-full md:w-10/12 lg:w-8/12 px-4 mt-5 mb-8">
                      <a className="bg-yellow-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button" href="mailto:puuapua@puuapua.fi?&subject=Tiedustelu puun myynnistä">
                        Lähetä tiedustelu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <img
                    alt="..."
                    src={require("assets/img/klapikasa.jpg").default}
                    className="w-full align-middle rounded-t-lg"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-white fill-current "
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      Hinnoittelu
                    </h4>
                    <p className="text-md font-light mt-2 text-black">  
                        Hinnat vaihtelevat puulajien ja toimitusmäärien sekä kuivuusasteen mukaan.                     
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        </Element>

       
      
        <Element id="lisatietoja" name="lisatietoja">
        <section className="pt-20 pb-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-10/12 px-4">
                <h2 className="text-4xl font-semibold">Mitä muuta?</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">  
                  PuuApua auttaa maisemanhoidollisissa raivauksissa. Tavaroiden ja varusteiden kuljetus onnistuu edullisesti myös hankalaan maastoon. 
                  
                </p>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500"> 
                Voin auttaa pienissä moottori- ja raivaussahoihin liittyvissä ongelmissa (puhdistukset,säädöt, käynnistysongelmat, teroitukset ym.). 
                </p>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500"> 
                Teen kesäaikana jonkin verran ns. mökkitalkkarin hommia. 
                </p>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500"> 
                Kuulun ennakkoperintärekisteriin ja työstäni saa kotitalousvähennyksen verottajan ohjeistuksen mukaisesti.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Element>

      </main>
      <Footer />
    </>
  );
}
