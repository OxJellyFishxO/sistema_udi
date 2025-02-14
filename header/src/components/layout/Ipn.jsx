import React from "react";

const headerIpn= {
    urlHeaderIpn: 'https://www.ipn.mx/',
    imgHeaderIpn: '/header/svg-ipn.svg',
    nameHeaderIpn: 'Logo del IPN'
}

const LayoutIpn = () => {
    return (
        <>
            <a
                className="a-grid-header" 
                href={headerIpn.urlHeaderIpn}
            >
                <img  
                    className="img-a-grid-header"
                    src={headerIpn.imgHeaderIpn}
                    alt={headerIpn.nameHeaderIpn}
                />
            </a>
        </>
    )
}

export default LayoutIpn;