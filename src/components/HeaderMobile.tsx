import React, { useState } from 'react';

interface HeaderMobileProps {
    larguraDaTela: number;
    idioma: number;
    setIdioma: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ larguraDaTela, idioma, setIdioma }) => {

    //o seguinte código cuida de usar a prop para dinamicamente
    //definir a posição left do painel hamburguer escondido
    //à esquerda da margem esquerda
    
    const [hamburguerAberto, setHamburguerAberto] = useState(false);

    function abrirMenu() {
        if (hamburguerAberto) {
            setHamburguerAberto(false)
        } else {
            setHamburguerAberto(true)
        }

    }

    const posicaoEsquerda = hamburguerAberto ? 0 : -larguraDaTela;
    
    //logica para trocar idioma
    function trocarIdioma(numero:number) {
        if (numero === 0) {
            setIdioma(0)
        } else {
            setIdioma(1)
        }
    }

    return (
        <>
        {idioma === 0 ? 
            <div id='headerMobile-pt' className='relative'>
            <div className={`z-50 w-full fixed flex justify-between top-0 left-0 p-8`}>
                    <button onClick={abrirMenu} className='z-50 flex flex-col gap-2'>
                        <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                        <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                        <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                    </button>

                    <img className='z-50 w-[40px]' src={`./assets/images/logo.jpg`} alt="Logo da empresa" />

                    <div className='absolute header-central w-flex'>
                        <button onClick={() => trocarIdioma(0)}>
                            <img className='rounded-lg w-[40px]' src={`./assets/icons/brasil.png`} alt="Button with the Brazilian flag." />
                        </button>

                        <button onClick={() => trocarIdioma(1)}>
                            <img className='rounded-lg w-[40px]' src={`./assets/icons/eua.png`} alt="Button with the American flag." />
                        </button>
                    </div>
                    
                    <div 
                    className={`z-40 absolute w-full h-screen top-0 left-0 flex flex-col gap-5 p-8 pt-20 bg-black/[0.95] font-bold hamburguer-transition`}
                    style={{left: `${posicaoEsquerda}px` }}
                    >
                        <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#inicio">Início</a>
                        <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#principios">Princípios</a>
                        <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#portfolio">Portfólio</a>
                        <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#sobre">Sobre</a>
                        <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#contato">Contato</a>
                    
                    </div>

                </div> 

                <div className={`z-40 w-full fixed top-0 left-0 p-8 py-12 bg-black/[0.95]`}></div>
            </div>
        :
        <div id='headerMobile-en' className='relative'>
        <div className={`z-50 w-full fixed flex justify-between top-0 left-0 p-8`}>
                <button onClick={abrirMenu} className='z-50 flex flex-col gap-2'>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                </button>

                <img className='z-50 w-[40px]' src={`./assets/images/logo.jpg`} alt="Logo da empresa" />

                <div className='absolute header-central w-flex'>
                    <button onClick={() => trocarIdioma(0)}>
                        <img className='rounded-lg w-[40px]' src={`./assets/icons/brasil.png`} alt="Button with the Brazilian flag." />
                    </button>

                    <button onClick={() => trocarIdioma(1)}>
                        <img className='rounded-lg w-[40px]' src={`./assets/icons/eua.png`} alt="Button with the American flag." />
                    </button>
                </div>

                <div 
                className={`z-40 absolute w-full h-screen top-0 left-0 flex flex-col gap-5 p-8 pt-20 bg-black/[0.95] font-bold hamburguer-transition`}
                style={{left: `${posicaoEsquerda}px` }}
                >
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#inicio">Home</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#principios">Principles</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#portfolio">Portfolio</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#sobre">About</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal neon' href="#contato">Contact</a>

                </div>

            </div> 

            <div className={`z-40 w-full fixed top-0 left-0 p-8 py-12 bg-black/[0.95]`}></div>
            </div>
        }
        </>
        
    );
};

export default HeaderMobile;