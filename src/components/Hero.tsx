import React from "react";

const Hero: React.FC = () => {
    return (
        <div id="hero" className="text-white mt-64 w-full z-10">
            <div className="flex gap-4 w-full items-center">
                <div className="flex flex-col gap-8 w-[60%]" id="hero-texto">
                    <h4 className="mb-[-5px]">Na luta</h4>
                    <h1 className="text-5xl">
                        Desenvolvedor Web, Programador, Aprendiz
                    </h1>

                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>

                    <p>Bem-vindo ao meu portfolio. Lhe
                        apresento em alguns minutos um panorama de meus projetos,
                        um pouco sobre mim e meus dados de contato. 
                    </p>
                </div>

                <div id="foto" className="relative w-[30%]">
                    <img className="relative opacity-0 z-10 w-full h-full" src={`./assets/images/me.jpg`} alt="Foto minha, estilizada com um filtro de cor verde-claro." />
                    <div className="absolute z-0 top-0 left-0 bg-blend-hero rounded-lg sombra-hero w-full h-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;