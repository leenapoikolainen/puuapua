import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/forest.jpg";


export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  {/*
                  <h1 className="text-white font-semibold text-4xl">
                    Puuapua
                  </h1>
                  */}
                  <div className="justify-center mt-10">
                    <img
                      alt="..."
                      src={require("assets/img/logo.png").default}
                      className="h-1/2 w-1/2 mx-auto"
                    />
                  </div>
                  
                  <div className="lg:pt-12 pt-6 w-full px-4 justify-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        
                        <h6 className="text-xl font-semibold">Monipuoliset metsapalvelut</h6>
                        <p className="mt-2 mb-4 text-blueGray-500 text-lg">
                        Puuapua auttaa sinua kaikessa metsään liittyvässä.
                      Lisätietoja palveluista löydät näiltä sivuilta tai voit
                      ottaa meihin suoraan yhteytta niin kerromme mielellään lisää!
                        </p>
                        <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="text-xl">
                          <p><b>Puhelinumero:</b> 040 052 7577</p>
                          <p><b>Sahkoposti:</b> puuapua@puuapua.fi</p>
                        </div>
                        
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
          </div>
        </div>

        <section className="pb-20 bg-gray-200 -mt-24" >
          <div className="container mx-auto px-4" >
            <div className="flex flex-wrap" >

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-forestGreen-100">
                  <img
                    alt="..."
                    src={require("assets/img/runko.jpg").default}
                    className="w-full align-middle rounded-t-lg object-cover h-48"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <Link
                      to="/metsapalvelut"
                      className={
                        "text-xl font-bold block text-white"
                      }
                    >
                      Metsapalvelut
                    </Link>
                    <p className="text-md font-light mt-2 text-white">
                      Tahan voi kirjoittaa kuvauksen palvelusta tai muuta
                      lisatietoja.
                    </p>
                  </blockquote>
                </div>
              </div>


              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-forestGreen-100">
                  <img
                    alt="..."
                    src={require("assets/img/runko.jpg").default}
                    className="w-full align-middle rounded-t-lg object-cover h-48"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <Link
                      to="/klapipalvelu"
                      className={
                        "text-xl font-bold block text-white"
                      }
                    >
                      Klapikone
                    </Link>
                    <p className="text-md font-light mt-2 text-white">
                      Tahan voi kirjoittaa kuvauksen palvelusta tai muuta
                      lisatietoja.
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* WAITING FOR LOGO
              <div className="w-full md:w-4/12 px-4 text-center pb-4">
                
              </div>
              
              <div className="px-4 w-full md:w-4/12 pb-4">
                <img
                  alt="..."
                  src={require("assets/img/puuapua_logo.png").default}
                  className="mx-auto "
                />
              </div>

              
              <div className="w-full md:w-4/12 px-4 text-center pb-4">
               
              </div>
              */}

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-forestGreen-100">
                  <img
                    alt="..."
                    src={require("assets/img/runko.jpg").default}
                    className="w-full align-middle rounded-t-lg object-cover h-48"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <Link
                      to="/puunmyynti"
                      className={
                        "text-xl font-bold block text-white"
                      }
                    >
                      Puun myynti
                    </Link>
                    <p className="text-md font-light mt-2 text-white">
                      Tahan voi kirjoittaa kuvauksen palvelusta tai muuta
                      lisatietoja.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-forestGreen-100">
                  <img
                    alt="..."
                    src={require("assets/img/runko.jpg").default}
                    className="w-full align-middle rounded-t-lg object-cover h-48"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <Link
                      to="/lisatietoja"
                      className={
                        "text-xl font-bold block text-white"
                      }
                    >
                      Lisatietoja
                    </Link>
                    <p className="text-md font-light mt-2 text-white">
                      Tahan voi kirjoittaa kuvauksen palvelusta tai muuta
                      lisatietoja.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
