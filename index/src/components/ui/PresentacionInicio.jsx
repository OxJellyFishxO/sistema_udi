import React from "react";

const PresentacionInicio = () => {
    return (
        <>
            <section className="flex justify-center items-center">
                <div>
                    <span className="span-Plantel">IPN - ENCB - UDI</span>
                    <h1 className="h1-Principal">Unidad de Informática</h1>
                    <hr  className="hr-Main"/>
                    <p className="p-Main">La UDI tiene el compromiso de dar seguimiento a las solución de problemas técnicos de los equipos de cómputo.</p>
                    <a className="a-Main" href="https://www.encb.ipn.mx/servicios/tics.html">Cónocenos</a>
                </div>
            </section>
        </>
    );
}

export default PresentacionInicio;