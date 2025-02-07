import React from "react";
import HeaderSep from "../components/HeaderSep";
import HeaderIpn from "../components/HeaderIpn";

const HeaderPage = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="no-underline max-w-full">
                        <div className="py-[15px] mx-auto container">
                            <div className="-mx-3">
                                <div className="px-3 grid grid-cols-2 gap-52">
                                    <HeaderSep />
                                    <HeaderIpn />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderPage;