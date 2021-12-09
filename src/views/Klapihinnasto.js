import React from "react";
import Navbar from "components/Navbars/StaticNavBar";
import Footer from "components/Footers/Footer.js";


export default function Klapihinnasto() {
    return (
        <>
            <Navbar />
                
            <div className="pt-20 pb-32 ">
                <div class="pl-7 justify-start">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Klapierät
                    </h3>
                    <div className="container mb-4 flex flex-wrap">
                        <p>
                            Soita 040 258 76 07 ja varmista saatavuus!
                        </p>
                    </div>
                    
                </div>
                <div class="pl-7 justify-start"> 
                    <iframe height="500" width="90%" className=""
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_2cjcj875181i4yjUBu43E7CxresBqLCPdBKx2_WXQyB8R0X2KhKrWkRIdfisT_X_J-SATIjd34va/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:B26"
                    >
                    </iframe>   
               </div>
            </div>
            
            <Footer />
        </>
    );
}
