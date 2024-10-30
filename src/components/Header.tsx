import React, { useState } from "react";
import TopbarPadrao from "./TopbarPadrao";
import TopbarMobile from "./TopbarMobile";

const Header: React.FC = () => {

    const [abriuMobile, setAbriuMobile] = useState<boolean>(false)

    return (
        <div className="w-full fixed top-0 left-0 z-50">
            {!abriuMobile && <TopbarPadrao />}

            {abriuMobile && <TopbarMobile />}
        </div>
    );
}

export default Header;