import React, {useState} from "react";

interface SobreProps {
    idioma: number;
}

const Sobre: React.FC<SobreProps> = ({idioma}) => {

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
        <>
            {idioma === 0 ?
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
                                <p className="leading-7 text-center">
                                    Ex-docente universitário em Ciência Política, doutor em Ciência Política pela UFRGS.
                                </p>
                                <p className="leading-7 text-center">
                                    Nutrindo gosto por tecnologia e impulsionado pelo desejo de superar desafios, busco atualmente transitar para o desenvolvimento web. Busco aproveitar minhas habilidades analíticas e minha ampla experiência na academia para criar soluções digitais eficientes.                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(1)} className="neon-sobre font-normal text-[#1ac1b1]">Diferencial</button>
                                    <div className={`${mostrar === 1 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Maturidade e capacidade de pesquisa e aprendizado autodidata contínuos advindos do mundo acadêmico.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(2)} className="neon-sobre font-normal text-[#1ac1b1]">Modus Operandi</button>
                                    <div className={`${mostrar === 2 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Aliar aprendizado teórico (estudos de documentaçao, práticas tutoriais) com experiência prática (99Freelas, serviços autônomos locais) como preparo para uma vaga junior.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(3)} className="neon-sobre font-normal text-[#1ac1b1]">Lema</button>
                                    <div className={`${mostrar === 3 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Sintaxe se aprende em dias, lógica se absorve em meses, pensamento crítico e resolutivo se desenvolve continuamente e humildade para aprender se cultiva todos os dias.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="z-20 w-1/2">

                        </div>
                    </div>
                </div>
                :
                <div id="sobre" className="scroll-mt-[100px] text-white w-full mb-[200px] ">
                    <div className="relative codigo-bg w-full flex flex-col sm:flex-row gap-4 items-center">
                        <div className="z-10 absolute left-0 top-0 w-full h-full bg-gradient-to-l from-transparent via-black to-black"></div>
                        
                        <div className="z-20 flex flex-col gap-8 w-full text-center sm:text-left items-center sm:w-[60%]" id="hero-texto">
                            <h4 className="mb-[-5px]">About</h4>
                            <h2 className="text-2xl sm:text-5xltext-5xl">
                                Who am I?
                            </h2>

                            <div className="border border-[#1ac1b1]/50 w-[15%]"></div>
                            <div className="flex flex-col gap-1">
                                <p className="leading-7 text-center">
                                    Former Political Science college professor, Doctor in Political Science from Federal University of Rio Grande do Sul.
                                </p>
                                <p className="leading-7 text-center">
                                    Driven by a passion for technology and the desire to embrace new challenges, I'm transitioning into web development. I'm committed to leveraging my analytical skills and extensive experience in academia to create efficient digital solutions.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(1)} className="neon-sobre font-normal text-[#1ac1b1]">Diferential</button>
                                    <div className={`${mostrar === 1 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Maturity and the ability for continuous research and self-teaching, stemming from the academic world.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(2)} className="neon-sobre font-normal text-[#1ac1b1]">Modus Operandi</button>
                                    <div className={`${mostrar === 2 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Combine theoretical learning (documentation studies, tutorial practices) with practical experience (99Freelas, local freelance services) as preparation for a junior position.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <button onClick={() => renderizarPrincipio(3)} className="neon-sobre font-normal text-[#1ac1b1]">Motto</button>
                                    <div className={`${mostrar === 3 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 pl-4 italic text-center">Syntax is learned in days, logic is absorbed in months, critical and problem-solving thinking is continuously developed, and the humility to learn is cultivated every day.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="z-20 w-1/2">

                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Sobre;