import React from 'react'

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/forest.jpg";

function Lisatiedot() {
    return (
        <>
            <Navbar transparent />
            <main className="yhteystiedot-page">
                <section className="relative block h-500-px ">
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

                <section className="pb-20 bg-blueGray-200 -mt-64">
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-info"></i>
                                        </div>
                                        <h6 className="text-2xl font-semibold">Yritysinfo</h6>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        <p className="mt-4 mb-4 text-blueGray-500">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                                        id est laborum et dolorum fuga. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-piggy-bank"></i>
                                        </div>
                                        <h6 className="text-2xl font-semibold">Verovahennys</h6>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        <p className="mt-4 mb-4 text-blueGray-500">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                                        id est laborum et dolorum fuga. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-address-card"></i>
                                        </div>
                                        <h6 className="text-2xl font-semibold">Yhteystiedot</h6>
                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        <p className="mt-4 mb-4 text-blueGray-500">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                                        id est laborum et dolorum fuga. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Lisatiedot
