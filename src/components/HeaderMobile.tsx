import React, { useEffect, useState } from 'react';

interface HeaderMobileProps {
    larguraDaTela: number;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ larguraDaTela }) => {

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
    
    //return

    return (
        <div className='relative'>
           <div className={`z-50 w-full fixed flex justify-between top-0 left-0 p-8`}>
                <button onClick={abrirMenu} className='z-50 flex flex-col gap-2'>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                    <div className='z-50 w-8 h-0.5 bg-[#1ac1b1]'></div>
                </button>

                <img className='z-50 w-[40px]' src={`./assets/images/logo.jpg`} alt="Logo da empresa" />

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
        
    );
};

export default HeaderMobile;