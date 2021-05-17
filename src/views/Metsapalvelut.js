import React from "react";

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/forest.jpg";

export default function Metsapalvelut() {
  return (
    <>
      <Navbar transparent />
      <main className="metsapalvelut-page">
        
        <section className="relative block h-500-px">
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
        </section>

       

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 ">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                 
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    {/*
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                    */}
                  </div>
                  
                </div>
                <div className="text-center mt-12">
                  <h2 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Metsapalvelut
                  </h2>
                 
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-6/12 px-6">
                      <h3 className="font-bold text-xl mb-3">Kuvaus</h3>
                      <p className="text-left mb-4 text-lg leading-relaxed text-blueGray-700">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                      </p>
                    </div>
                    <div className="w-full md:w-6/12 px-6">
                      <h3 className="font-bold text-xl mb-3">Hinnasto</h3>
                      <p className="text-left mb-4 ml-4 text-lg text-blueGray-700">
                        <ul className="list-inside list-disc">
                          <li>Hinta koostuu tuosta ja tasta</li>
                          <li>50£ / tunti</li>
                        </ul>
                      </p>
                    </div>
                  </div>
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
