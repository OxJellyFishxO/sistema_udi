import React from "react";

const headerIpn= {
    urlHeaderIpn: 'https://www.ipn.mx/',
    imgHeaderIpn: '/header/svg-ipn.svg',
    nameHeaderIpn: 'Logo del IPN'
}

const HeaderIpn = () => {
    return (
        <>
            <a
                className="inline" 
                href={headerIpn.urlHeaderIpn}
            >
                <img  
                    className="max-h-[120px] object-contain mx-auto"
                    src={headerIpn.imgHeaderIpn}
                    alt={headerIpn.nameHeaderIpn}
                />
            </a>
        </>
    )
}

export default HeaderIpn;