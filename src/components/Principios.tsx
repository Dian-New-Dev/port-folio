import React from "react";

interface PrincipiosProps {
    idioma: number;
}


const Principios: React.FC<PrincipiosProps> = ({idioma}) => {
    return (
        <>
        {idioma === 0 ?
            <div id="principios-pt" className="scroll-mt-[100px] text-center text-white">
                <div className="flex flex-col items-center gap-8 w-full" id="hero-texto">
                    <h4 className="mb-[-10px]">Projetos</h4>
                    <h2 className="text-2xl sm:text-5xl">O que desenvolvo</h2>
                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                    <h3>E os princípios que guiam meu processo de desenvolvimento e aprendizado</h3>
                    <div className="flex flex-col sm:flex-row w-full max-w-[1024px] items-center sm:items-stretch gap-2 lg:gap-8">
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/iso.png`} alt="Ícone de uma medalha com a sigla 'ISO'." />
                                <h4 className="font-bold text-lg text-white">Padrões de Mercado</h4>
                                <p className="text-sm">Priorizar projetos reais, atuais e aplicáveis ao atual mercado.</p>
                            </div>
                            
                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/brickwall.png`} alt="Ícone de uma pá de construção sobre uma pilha de tijolos." />
                                <h4 className="font-bold text-lg text-white">Foco nos Fundamentos</h4>
                                <p className="text-sm">Estabelecer bases gerais para aprender skills específicas exigidas pelos empregadores.</p>
                            </div>
                            
                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/machine-learning.png`} alt="Ícone de um crânio com uma engrenagem no lugar do cérebro." />
                                <h4 className="font-bold text-lg text-white">Meta-Aprendizado</h4>
                                <p className="text-sm">Aprender a aprender de maneira independente, ágil e eficaz.</p>
                            </div>
                            

                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/idea.png`} alt="Ícone de uma lâmpada composta de peças de quebra-cabeça." />
                                <h4 className="font-bold text-lg text-white">Analista de Problemas</h4>
                                <p className="text-sm">Resolver os problemas do cliente e/ou empregador acima de dominar tecnologia A ou B.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        :
            <div id="principios-en" className="scroll-mt-[100px] text-center text-white">
                <div className="flex flex-col items-center gap-8 w-full" id="hero-texto">
                    <h4 className="mb-[-10px]">Projects</h4>
                    <h2 className="text-2xl sm:text-5xl">What I Develop</h2>
                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                    <h3>And the underlying principles that guide my development and learning process</h3>
                    <div className="flex flex-col sm:flex-row w-full max-w-[1024px] items-center sm:items-stretch gap-2 lg:gap-8">
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/iso.png`} alt="Icon of a medal with the letters 'ISO' written on it." />
                                <h4 className="font-bold text-lg text-white">Industry Standards</h4>
                                <p className="text-sm">"Prioritize real, current, and market-relevant projects.</p>
                            </div>
                            
                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/brickwall.png`} alt="Icon of a construction shovel above a pile of bricks." />
                                <h4 className="font-bold text-lg text-white">Fundamentals-Oriented</h4>
                                <p className="text-sm">Stablish general foundations for learning the skills specifically required by employers.</p>
                            </div>
                            
                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/machine-learning.png`} alt="Icon of a cranium with a gear where the brain would be." />
                                <h4 className="font-bold text-lg text-white">Meta-Learning</h4>
                                <p className="text-sm">Learn to learn in independent, agile and efficient fashion.</p>
                            </div>
                            

                        </div>
                        <div className="gap-2 rounded-md hover:scale-[1.1] hover:border border-gray-600/50 bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                            <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                                <img className="w-[50px]" src={`./assets/icons/idea.png`} alt="Icon of lamp made out of puzzle pieces." />
                                <h4 className="font-bold text-lg text-white">Problem Solver</h4>
                                <p className="text-sm">Solve the client's/employer's problems above mastering technology A or B.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        }
        </>

    );
}

export default Principios;