import React from "react";

const footerIpn = {
    imgFooterIpn: '/footer/png-educacion.png',
    nameFooterIpn: 'Lodo de Educacion'
};


const Footer = () => {
    return (
        <>
            <img
                src={footerIpn.imgFooterIpn}
                className="max-h-auto px-3 py-0 my-auto"
                alt={footerIpn.nameFooterIpn}
            />
        </>
    )
}

export default Footer;