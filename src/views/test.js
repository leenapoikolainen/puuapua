import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import axios from 'axios';

import ScrollingNavbar from "components/Navbars/ScrollingNavbar";
import Footer from "components/Footers/Footer.js";
import background from "../assets/img/petajavesi.jpeg";



export default function Test() {



    return (
        <>
            <ScrollingNavbar />
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

        </>
    );
}
