import React from "react";
import Index from "../components/indexUDI";

const IndexPage = () => {
    return (
        <>
            <section className="w-full flex items-center justify-center max-w-4xl">
                <article className="mr-[25px] transition-all duration-4000 ease-in-out bg-white w-[33%] relative rounded-2xl overflow-hidden shadow-[0_13px_10px_-7px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_18px_-8px_rgba(0,0,0,0.1)]">
                    <div>
                        <a>
                            <div>

                            </div>
                        </a>
                        <div>
                            <span>Profesores</span>
                            <h1>Préstamo de Aulas</h1>
                            <p>El sistema de préstamo de aulas de laboratorio permite a profesores y personal autorizado solicitar y reservar espacios en los laboratorios de cómputo para actividades académicas</p>
                        </div>
                    </div>
                </article>
            </section>
            
            <Index />
        </>
    )
}

export default IndexPage;

