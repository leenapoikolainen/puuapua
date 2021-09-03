import React from "react";
import Navbar from "components/Navbars/StaticNavBar";
import Footer from "components/Footers/Footer.js";


export default function Klapihinnasto() {
    return (
        <>
            <Navbar/>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                        <div className="items-center flex flex-wrap">
                            <div className="px-4 ml-auto mr-auto text-center mt-10">
                                <h6 className="text-xl font-semibold">Klapierat</h6>
                                <iframe width="600" height="400" className="embed-responsive-item" 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT6x1GkXEvrfbmHIJoPZAXp4wxiRX1ANqOk_E-ybGTS56Cgh1R1UPBH96o8FFQXhKn8Vt-cnIH_lnuA/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false">

                                </iframe>
                             
                            </div>
                        </div>            
                </div>
            <Footer />
        </>
    );
}
