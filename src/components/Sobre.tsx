import React, {useState} from "react";

const Sobre: React.FC = () => {

    //logica para alternar a exibição entre os 3 princípios
    const [mostrar, setMostrar] = useState<number>(0);

    function renderizarPrincipio(index:number) {
        if (index === 1) {
            setMostrar(index)
        } else if (index === 2) {
            setMostrar(index)
        } else if (index === 3) {
            setMostrar(index)
        }
        
    }
    return (
        <div id="sobre" className="scroll-mt-[100px] text-white w-full mb-[200px] ">
            <div className="relative codigo-bg w-full flex flex-col sm:flex-row gap-4 items-center">
                <div className="z-10 absolute left-0 top-0 w-full h-full bg-gradient-to-l from-transparent via-black to-black"></div>
                
                <div className="z-20 flex flex-col gap-8 w-full text-center sm:text-left items-center sm:w-[60%]" id="hero-texto">
                    <h4 className="mb-[-5px]">Sobre</h4>
                    <h2 className="text-2xl sm:text-5xltext-5xl">
                        Quem sou eu
                    </h2>

                    <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                    <div className="flex flex-col gap-1">
                        <p className="text-center">
                            Ex-docente universitário em Ciência Política, doutor em Ciência Política pela UFRGS.
                        </p>
                        <p className="text-center">
                            Problemas de saúde me forçaram a abandonar o mundo acadêmico, desafio que abraço como oportunidade de buscar uma transição de carreira, rumo ao desenvolvimento web.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <button onClick={() => renderizarPrincipio(1)} className="neon-sobre font-normal text-[#1ac1b1]">Diferencial</button>
                            <div className={`${mostrar === 1 ? 'block' : 'hidden'}`}>
                                <p className="pl-4 italic text-center">Maturidade e capazidade de pesquisa e aprendizado autodidata contínuos advindos do mundo acadêmico.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <button onClick={() => renderizarPrincipio(2)} className="neon-sobre font-normal text-[#1ac1b1]">Modus Operandi</button>
                            <div className={`${mostrar === 2 ? 'block' : 'hidden'}`}>
                                <p className="pl-4 italic text-center">Aliar aprendizado teórico (estudos de documentaçao, práticas tutoriais) com experiência prática (99Freelas, serviços autônomos locais) como preparo para uma vaga junior.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <button onClick={() => renderizarPrincipio(3)} className="neon-sobre font-normal text-[#1ac1b1]">Lema</button>
                            <div className={`${mostrar === 3 ? 'block' : 'hidden'}`}>
                                <p className="pl-4 italic text-center">Sintaxe se aprende em dias, lógica se absorve em meses, pensamento crítico e resolutivo se desenvolve continuamente e humildade para aprender se cultiva todos os dias.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="z-20 w-1/2">

                </div>
            </div>
        </div>
    );
}

export default Sobre;