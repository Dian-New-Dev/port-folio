import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const HeaderDesktop: React.FC = () => {

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

    return (
        <div className='relative w-full'>
            <div className='z-50 fixed flex items-cente px-12 lg:px-28 2xl:px-48  w-full top-0 left-0 text-sky-100 pt-4'>

                <div className='w-1/4'>
                    <Logo />
                </div>
                
                <div className='w-3/4 flex gap-8 justify-end items-center'>
                    <a className='neon' href="#inicio">Início</a>
                    <a className='neon' href="#principios">Princípios</a>
                    <a className='neon' href="#portfolio">Portfolio</a>
                    <a className='neon' href="#sobre">Sobre</a>
                    <a className='neon' href="#contato">Contato</a>

                </div>

            </div>

            <div className={`z-40 fixed flex items-center px-12 w-full top-0 left-0 text-sky-100 pt-4 transicao-opacidade h-24 ${rolouScroll ? 'nao-opaco' : 'opaco'}`}>
            </div>

        </div>
    );
};

export default HeaderDesktop;