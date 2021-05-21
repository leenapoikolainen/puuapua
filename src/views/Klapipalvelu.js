import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/forest.jpg";

export default function Klapipalvelu() {
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
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full -mt-64 ">
                            <div className="w-full md:w-10/12 lg:w-8/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <h2 className="text-4xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Klapikone
                                        </h2>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                    </div>
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
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center text-center">
                            <div className="w-full md:w-10/12 lg:w-8/12 px-4">
                                <a className="bg-yellow-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button" href="mailto:leena.poikolainen@gmail.com?&subject=Tiedustelu klapipalvelusta">Laheta tiedustelu</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
