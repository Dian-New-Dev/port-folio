import React, { useEffect, useState } from "react";
import projetos from "../data/projetos";
import projetosEN from "../data/projetosEN";

interface PortfolioProps {
    idioma: number;
}

const Portfolio: React.FC<PortfolioProps> = ({idioma}) => {

    const [scroll, setScroll] = useState<HTMLElement | null>()
    useEffect(() => {
        const horizontalDiv = document.getElementById('horizontal-scroller') as HTMLElement | null;
        setScroll(horizontalDiv)
    }, [])

    function clicouSeta(direcao:string) {
        if (direcao === 'esq') {
            if (scroll) {
                scroll.scrollBy({
                    left: -50,
                    behavior: 'smooth'
                });
            }

        } else {
            if (scroll) {
                scroll.scrollBy({
                    left: 50,
                    behavior: 'smooth'
                });
            }

        }   
    }

    return (
        <>
        {idioma === 0 ? 
            <div id="portfolio-pt" className="scroll-mt-[100px] text-white">
                <div className="relative flex flex-col items-center gap-8 w-full" id="hero-texto">
                    <h4 className="mb-[-10px]">Portfolio</h4>
                    <h2 className="text-2xl sm:text-5xl">Cada projeto, uma jornada</h2>
                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                    <h3 className="text-center sm:text-left">
                        Munido dos princípios supramencionados, busco orientar meu aprendizado a uma abordagem
                        prática: o aprender por fazer.
                    </h3>

                    <div id="horizontal-scroller" className="bg-[black] relative rounded-lg p-2 sm:p-8 gap-16 flex sm:no-scrollbar overflow-x-auto w-full md:w-auto snap-mandatory snap-x">
                        {projetos.map((item:projetos, index:number) => (
                            <div key={index} className="bg-[|] p-4 sombra-portfolio rounded-lg snap-center flex flex-col md:flex-row items-center gap-4 sm:gap-8 min-w-full">

                                <div className="w-full md:w-[60%] rounded-lg">
                                    <img className="rounded-lg" src={item.thumbnail} alt="Thumbnail" />
                                </div>

                                <div className="w-full md:w-[40%] flex flex-col gap-2">
                                    <h3 className="text-3xl font-bold">{item.nome}</h3>
                                    <div className="border border-[#1ac1b1] w-[40%]"></div>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Descrição: </b>{item.descricao}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Categoria: </b>{item.categoria}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Tech-Stack: </b>{item.tecnologias}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Status: </b>{item.status}</p>
                                    
                                    <div className="flex gap-2 w-full">
                                        <button className="bg-[#052522] p-2 rounded-lg hover:bg-[#1ac1b1]">
                                            <a className="text-white font-bold text-sm" target="_blank" href={item.repositorio}>
                                                Repositório
                                            </a>
                                        </button>

                                        <button className="bg-[#052522] p-2 rounded-lg hover:bg-[#1ac1b1]">
                                            {item.link === 'N' ? (
                                                <p className="text-gray-700 font-normal">Offline</p>
                                            ) : (
                                                <a className="text-white font-bold text-sm" target="_blank" href={item.link}>Acessar</a>
                                            )}

                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))}

                        
                        

                    </div>
                    
                    
                    <button onClick={() => clicouSeta("esq")} className="text-5xl neon text-[#1ac1b1] absolute bottom-[-30px] left-[30px] sm:left-0 font-bold origin-center scale-[2] ">←</button>
                    <button onClick={() => clicouSeta("dir")} className="text-5xl neon text-[#1ac1b1] absolute bottom-[-30px] right-[30px] sm:right-0 font-bold origin-center scale-[2] ">→</button>
                </div>
            </div>
        
            :
            <div id="portfolio-en" className="scroll-mt-[100px] text-white">
                <div className="relative flex flex-col items-center gap-8 w-full" id="hero-texto">
                    <h4 className="mb-[-10px]">Portfolio</h4>
                    <h2 className="text-2xl sm:text-5xl">Each project, a new journey</h2>
                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                    <h3 className="text-center sm:text-left">
                        Armed with the aforementioned principles, I seek to orient my learning towards a hands-on aproach: learning by doing.
                    </h3>

                    <div id="horizontal-scroller" className="bg-[black] relative rounded-lg p-2 sm:p-8 gap-16 flex sm:no-scrollbar overflow-x-auto w-full md:w-auto snap-mandatory snap-x">
                        {projetosEN.map((item:projetos, index:number) => (
                            <div key={index} className="bg-[|] p-4 sombra-portfolio rounded-lg snap-center flex flex-col md:flex-row items-center gap-4 sm:gap-8 min-w-full">

                                <div className="w-full md:w-[60%] rounded-lg">
                                    <img className="rounded-lg" src={item.thumbnail} alt="Thumbnail" />
                                </div>

                                <div className="w-full md:w-[40%] flex flex-col gap-2">
                                    <h3 className="text-3xl font-bold">{item.nome}</h3>
                                    <div className="border border-[#1ac1b1] w-[40%]"></div>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Description: </b>{item.descricao}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Category: </b>{item.categoria}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Tech-Stack: </b>{item.tecnologias}</p>
                                    <p className="text-sm text-gray-300"><b className="text-lg text-white">Status: </b>{item.status}</p>
                                    
                                    <div className="flex gap-2 w-full">
                                        <button className="bg-[#052522] p-2 rounded-lg hover:bg-[#1ac1b1]">
                                            <a className="text-white font-bold text-sm" target="_blank" href={item.repositorio}>
                                                Repository
                                            </a>
                                        </button>

                                        <button className="bg-[#052522] p-2 rounded-lg hover:bg-[#1ac1b1]">
                                            {item.link === 'N' ? (
                                                <p className="text-gray-700 font-normal">Offline</p>
                                            ) : (
                                                <a className="text-white font-bold text-sm" target="_blank" href={item.link}>Visit</a>
                                            )}

                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))}

                        
                        

                    </div>
                    
                    
                    <button onClick={() => clicouSeta("esq")} className="text-5xl neon text-[#1ac1b1] absolute bottom-[-30px] left-[30px] sm:left-0 font-bold origin-center scale-[2] ">←</button>
                    <button onClick={() => clicouSeta("dir")} className="text-5xl neon text-[#1ac1b1] absolute bottom-[-30px] right-[30px] sm:right-0 font-bold origin-center scale-[2] ">→</button>
                </div>
            </div>
        }
        
        </>

    );
}

export default Portfolio;