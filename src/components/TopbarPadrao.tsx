import React from "react";
import Logo from "./Logo";

const TopbarPadrao: React.FC = () => {
    return (
        <div className="flex items-center  p-12">
            <div className="w-[40%]  flex items-start" id="logo">
                <Logo />
            </div>
            <div className="w-[60%] text-white flex justify-between " id="nav">
                <a className="neon" href="">Início</a>
                <a className="neon" href="">Sobre</a>
                <a className="neon" href="">Projetos</a>
                <a className="neon" href="">Contato</a>
            </div>
        </div>
    );
}

export default TopbarPadrao;