import React from "react";

const imgLoginUDI = {
    imgLogin: "/index/img-login.png",
}

const TarjetaIngresoUDI = () => {
    return (
        <>
            <section>
                <article className="article-tarjeta">
                    <div className="div-tarjeta">
                        <div className="div-imagen">
                            <img src={imgLoginUDI.imgLogin} className="img-UDI"/>
                        </div>
                        <div>
                            <h2 className="div-h2">UDI</h2>
                            <p className="div-p">Para personal de la Unidad de Informática.</p>
                            <div className="div-a">
                                <a className="a-Main div-a-explorar" href="">Explorar</a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>   
        </>
    )
}

export default TarjetaIngresoUDI;