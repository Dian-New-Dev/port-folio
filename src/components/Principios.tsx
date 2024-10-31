import React from "react";

const Principios: React.FC = () => {
    return (
        <div id="principios" className="scroll-mt-[100px] text-center text-white">
            <div className="flex flex-col items-center gap-8 w-full" id="hero-texto">
                <h4 className="mb-[-10px]">Projetos</h4>
                <h2 className="text-2xl sm:text-5xl">O que desenvolvo</h2>
                <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                <h3>E os princípios que guiam meu processo de desenvolvimento e aprendizado</h3>
                <div className="flex flex-col sm:flex-row w-full max-w-[1024px] items-center sm:items-stretch gap-2 lg:gap-8">
                    <div className="gap-2 rounded-md bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                            <img className="w-[50px]" src={`./assets/icons/iso.png`} alt="Ícone de uma medalha com a sigla 'ISO'." />
                            <h4 className="font-bold text-lg text-white">Padrões de Mercado</h4>
                            <p className="text-sm">Priorizar projetos reais, atuais e aplicáveis ao atual mercado.</p>
                        </div>
                        
                    </div>
                    <div className="gap-2 rounded-md bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                            <img className="w-[50px]" src={`./assets/icons/brickwall.png`} alt="Ícone de uma pá de construção sobre uma pilha de tijolos." />
                            <h4 className="font-bold text-lg text-white">Foco nos Fundamentos</h4>
                            <p className="text-sm">Estabelecer bases gerais para aprender skills específicas exigidas pelos empregadores.</p>
                        </div>
                        
                    </div>
                    <div className="gap-2 rounded-md bg-[#141414] sm:mt-12 w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                            <img className="w-[50px]" src={`./assets/icons/machine-learning.png`} alt="Ícone de um crânio com uma engrenagem no lugar do cérebro." />
                            <h4 className="font-bold text-lg text-white">Meta-Aprendizado</h4>
                            <p className="text-sm">Aprender a aprender de maneira independente, ágil e eficaz.</p>
                        </div>
                        

                    </div>
                    <div className="gap-2 rounded-md bg-gradient-to-b from-black from-0% to-[#083b36] to-100% w-[75%] sm:w-1/4 h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full  h-[90%] flex flex-col items-center gap-3">
                            <img className="w-[50px]" src={`./assets/icons/idea.png`} alt="Ícone de uma lâmpada composta de peças de quebra-cabeça." />
                            <h4 className="font-bold text-lg text-white">Analista de Problemas</h4>
                            <p className="text-sm">Resolver os problemas do cliente e/ou empregador acima de dominar tecnologia A ou B.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Principios;