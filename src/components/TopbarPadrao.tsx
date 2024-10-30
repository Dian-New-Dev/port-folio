import React from "react";
import Logo from "./Logo";

const TopbarPadrao: React.FC = () => {
    return (
        <div className="flex items-center bg-black/[90%] px-12 z-50">
            <div className="w-[40%]  flex items-start" id="logo">
                <Logo />
            </div>
            
            <div className="w-[60%] text-white flex justify-between " id="nav">
                <a className="neon" href="#A">Início</a>
                <a className="neon" href="#B">Projetos</a>
                <a className="neon" href="#C">Sobre</a>
                <a className="neon" href="#D">Contato</a>
            </div>
        </div>
    );
}

export default TopbarPadrao;