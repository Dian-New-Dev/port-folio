import React from "react";

interface HeroProps {
    idioma: number;
}

const Hero: React.FC<HeroProps> = ({idioma}) => {
    return (
        <>
        {idioma === 0 ?
            <div id="inicio-pt" className="scroll-mt-[200px] text-white mt-16 2xl:mt-[-64px] w-full z-10">
                <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
                    <div className="flex flex-col gap-8 w-full items-center sm:items-start sm:w-[60%]" id="hero-texto">
                        <h4 className="mb-[-5px]">Na luta</h4>
                        <h1 className="text-2xl sm:text-5xl text-center sm:text-left">
                            Desenvolvedor Web, Programador, Aprendiz
                        </h1>
    
                        <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
    
                        <p className="leading-7 text-center sm:text-left">Bem-vindo ao meu portfolio. Lhe
                            apresento em alguns minutos um panorama de meus projetos,
                            um pouco sobre mim e meus dados de contato. 
                        </p>
                    </div>
    
                    <div id="foto" className="relative w-1/2 sm:w-[30%]">
                        <img className="relative opacity-0 z-10 w-full h-full" src={`./assets/images/me.jpg`} alt="Foto minha, estilizada com um filtro de cor verde-claro." />
                        <div className="absolute z-0 top-0 left-0 bg-blend-hero rounded-lg sombra-hero w-full h-full"></div>
                    </div>
                </div>
            </div>
            
            :
            <div id="inicio-en" className="scroll-mt-[200px] text-white mt-16 2xl:mt-[-64px] w-full z-10">
                <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
                    <div className="flex flex-col gap-8 w-full items-center sm:items-start sm:w-[60%]" id="hero-texto">
                        <h4 className="mb-[-5px]">On the grind</h4>
                        <h1 className="text-2xl sm:text-5xl text-center sm:text-left">
                            Web Developer, Programmer, Apprentice
                        </h1>

                        <div className="border border-[#1ac1b1]/50 w-[15%]"></div>

                        <p className="leading-7 text-center sm:text-left">Welcome to my portfolio page. In a few minutes I'll give you an overview of my projects,
                            a little about me and how to contact me. 
                        </p>
                    </div>

                    <div id="foto" className="relative w-1/2 sm:w-[30%]">
                        <img className="relative opacity-0 z-10 w-full h-full" src={`./assets/images/me.jpg`} alt="Foto minha, estilizada com um filtro de cor verde-claro." />
                        <div className="absolute z-0 top-0 left-0 bg-blend-hero rounded-lg sombra-hero w-full h-full"></div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default Hero;