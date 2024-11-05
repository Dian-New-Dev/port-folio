import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderDesktopProps {
    larguraDaTela: number;
}

const HeaderDesktop: React.FC<HeaderDesktopProps> = ( {larguraDaTela} ) => {

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        const seRolarScroll = () => {
            if (window.scrollY > 50) {
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);

    //logica para animação atrás dos links
    
    
    const [leftP, setLeftP] = useState<number>();
    const [widthP, setWidthP] = useState<number>();
    useEffect(() => {
        const link1 = document.getElementById('link1')
        const linkUltimo = document.getElementById('linkUltimo')
        const rectLink1 = link1!.getBoundingClientRect();
        console.log(rectLink1.left)
        const rectLinkUltimo = linkUltimo!.getBoundingClientRect();

        if (larguraDaTela && rectLink1.left && rectLinkUltimo.right) {
            setLeftP(Math.floor(larguraDaTela) - Math.floor(rectLink1.left))
            setWidthP(rectLinkUltimo.right - rectLink1.left)
        }

    }, [larguraDaTela])
    
    







    

    return (
        <div className='relative w-full'>
            <div className='z-50 fixed flex items-cente px-12 lg:px-28 2xl:px-48  w-full top-0 left-0 text-sky-100 pt-4'>

                <div className='w-1/4'>
                    <Logo />
                </div>


                    <div 
                    id='part-menu'
                    className={`hidden z-0 absolute w-full h-full`}
                    style={{ 

                        left:leftP !== undefined ? (leftP - 10) : 0, 
                        width:widthP !== undefined ? (widthP + 10) : 0 
                    
                    }} 
                    >
                        <span className=' h-2 w-2 bg-[#1ac1b1]/50 absolute anim-menu'></span>
                    </div>
                
                <div className='z-10 relative w-3/4 flex gap-8 justify-end items-center'>


                    <a id='link1' className='neon' href="#inicio">Início</a>
                    <a className='neon' href="#principios">Princípios</a>
                    <a className='neon' href="#portfolio">Portfolio</a>
                    <a className='neon' href="#sobre">Sobre</a>
                    <a id='linkUltimo' className='neon' href="#contato">Contato</a>

                </div>

            </div>

            <div className={`z-40 fixed flex items-center px-12 w-full top-0 left-0 text-sky-100 pt-4 transicao-opacidade h-24 ${rolouScroll ? 'nao-opaco' : 'opaco'}`}>
            </div>

        </div>
    );
};

export default HeaderDesktop;