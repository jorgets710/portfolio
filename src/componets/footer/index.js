import React from "react";
import './footer.css'

export default function Footer(params) {

    return (
        <div className="footer-gral">

            <div className="download">
                <a download href={process.env.PUBLIC_URL + `/assets/CV.pdf`}>
                    <i className="fi-rr-cloud-download"></i>
                    Descarga mi CV
                </a>
            </div>
            
            

        </div>
    )
}