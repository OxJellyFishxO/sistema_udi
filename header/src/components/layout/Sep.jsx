import React from "react";

const headerSep = {
    urlHeaderSep:'https://www.gob.mx/sep',
    imgHeaderSep: '/header/svg-sep.svg',
    nameHeaderSep: 'Logo de Sep'
};

const LayoutSep = () => {
    return (
        <>
            <a 
                href={headerSep.urlHeaderSep} 
                className="a-grid-header">
                <img 
                    src={headerSep.imgHeaderSep}
                    className="img-a-grid-header"
                    alt={headerSep.nameHeaderSep}
                />
            </a>
        </>
    )
} 

export default LayoutSep;