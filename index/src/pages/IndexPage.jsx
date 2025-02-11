import React from "react";
import Main from "../components/MainUDI";

const IndexPage = () => {
    return (
        <>
            <main>
                <div className="grid grid-cols-2 gap-12">
                    <section>
                        <div>
                            <span className="span-Plantel">IPN - ENCB - UDI</span>
                            <h1 className="h1-Principal">Unidad de Informática</h1>
                            <hr  className="hr-Main"/>
                            <p className="p-Main">La UDI tiene el compromiso de dar seguimiento a las solución de problemas técnicos de los equipos de cómputo.</p>
                            <a className="a-Main" href="https://www.encb.ipn.mx/servicios/tics.html">Cónocenos</a>
                        </div>
                    </section>

                    <div className="swiper">
                        <div className="swiper-wrap">
                            <div>
                                <section>
                                    <h2>UDI</h2>
                                    <p>
                                        Para personal de la Unidad de Informática
                                    </p>
                                    <a href='https://www.encb.ipn.mx/servicios/tics.html' target="_blank">Explorar</a>
                                </section>
                            </div>

                            <div>
                                <section>
                                    <h2>Registro de Aulas</h2>
                                    <p>Aqui puedes realizar la inscripción del laboratorio</p>
                                    <a href="https://www.encb.ipn.mx/servicios/tics.html" target="_blank">Explorar</a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                
                </main>
            
            <Main />
        </>
    )
}

export default IndexPage;

