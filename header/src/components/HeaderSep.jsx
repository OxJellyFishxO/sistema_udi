import React from "react";

const headerSep = {
    urlHeaderSep:'https://www.gob.mx/sep',
    imgHeaderSep: '/header/svg-sep.svg',
    nameHeaderSep: 'Logo de Sep'
};

const HeaderSep = () => {
    return (
        <>
            <a 
                href={headerSep.urlHeaderSep} 
                className="inline">
                <img 
                    src={headerSep.imgHeaderSep}
                    className="max-h-[120px] object-contain mx-auto"
                    alt={headerSep.nameHeaderSep}
                />
            </a>
        </>
    )
} 

export default HeaderSep;