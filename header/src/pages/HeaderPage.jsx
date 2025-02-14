import React from "react";

import LayoutSep from "../components/layout/Sep";
import LayoutIpn from "../components/layout/Ipn";

const HeaderPage = () => {
    return (
        <>
            <header className="header-contenedor">
                <nav className="nav-contenedor">
                    <div className="div-contenedor-grid">
                        <div className="div-grid">
                            <LayoutSep />
                            <LayoutIpn />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderPage;