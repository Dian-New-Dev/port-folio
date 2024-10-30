import React from "react";
import projetos from "../data/projetos";

const Portfolio: React.FC = () => {

    return (
        <div className="text-white">
            <div className="flex flex-col items-center gap-8 w-full" id="hero-texto">
                <h4 className="mb-[-10px]">Portfolio</h4>
                <h2 className="text-5xl">Cada projeto, uma jornada</h2>
                <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                <h3>
                    Munido dos princípios supramencionados, busco orientar meu aprendizado a uma abordagem
                    prática: o aprender por fazer.
                </h3>

                <div className="bg-[black] rounded-lg p-8 gap-16 flex overflow-x-auto snap-mandatory snap-x">
                    {projetos.map((item:projetos, index:number) => (
                        <div key={index} className="bg-[|] p-4 sombra-portfolio rounded-lg snap-center flex items-center gap-8 min-w-full">

                            <div className="w-[60%] rounded-lg">
                                <img className="rounded-lg" src={item.thumbnail} alt="Thumbnail" />
                            </div>

                            <div className="w-[40%] flex flex-col gap-2">
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
            </div>
        </div>

    );
}

export default Portfolio;