import React from "react";
import Navbar from "components/Navbars/StaticNavBar";
import Footer from "components/Footers/Footer.js";


export default function Klapihinnasto() {
    return (
        <>
            <Navbar />

            <div className="pt-20 pb-32 pl-10 pr-10 content-center items-center justify-center ">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Klapierät
                  </h3>
                <div className="">   
                    <iframe style={{ width: "80%" }} height="400" className="embed-responsive-item"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT6x1GkXEvrfbmHIJoPZAXp4wxiRX1ANqOk_E-ybGTS56Cgh1R1UPBH96o8FFQXhKn8Vt-cnIH_lnuA/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false">
                    </iframe>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
