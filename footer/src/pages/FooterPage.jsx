import React from "react";
import Footer from "../components/Footer";

const FooterPage = () => {
    return(
        <>
            <footer className="bg-[#333] text-white tex-[1rem] font-bold py-[15px] px-0 flex"> 
                <div className="py-[15px] px-0 mx-56">
                    <div className="flex-wrap -mx-3">
                        <div className="px-3 grid grid-cols-3 gap-3">
                            <Footer />
                            <div className="col-span-2">
                                <p className="text-[#CCC] font-normal text-[0.8rem] py-[5px] px-0">INSTITUTO POLITÉCNICO NACIONAL</p>
                                
                                <p className="text-[#CCC] font-normal text-[0.8rem] py-[5px ] px-0">
                                    D.R. Instituto Politécnico Nacional (IPN). Av. Luis Enrique Erro S/N, Unidad Profesional Adolfo López Mateos, Zacatenco, Alcaldía Gustavo A. Madero, C.P. 07738, Ciudad de México. Conmutador: 55 57 29 60 00 / 55 57 29 63 00.
                                </p>

                                <p className="text-[#CCC] font-normal text-[0.8rem] py-[5px] px-0">
                                    Esta página es una obra intelectual protegida por la Ley Federal del Derecho de Autor, puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica; su uso para otros fines, requiere autorización previa y por escrito de la Dirección General del Instituto.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterPage;