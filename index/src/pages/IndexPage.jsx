import React from "react";
import NavegacionInicio from "../components/ui/NavegacionInicio";
import PresentacionInicio from "../components/ui/PresentacionInicio";

const IndexPage = () => {
    return (
        <>
            <main>
                <div className="grid-cols-2 gap-12 justify-center flex">
                    <PresentacionInicio />
                    <NavegacionInicio />
                </div>
            </main>
        </>
    )
}

export default IndexPage;

