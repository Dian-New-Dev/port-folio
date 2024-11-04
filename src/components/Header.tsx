import React, { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header: React.FC = () => {

    const [abriuNoMobile, setAbriuNoMobile] = useState<boolean>(false);
    const [larguraDaTela, setLarguraDaTela] = useState<number>(document.documentElement.clientWidth)

    useEffect(() => {
        function definirFormatodoHeader() {
            if (document.documentElement.clientWidth < 639) {
                setAbriuNoMobile(true);
            } else {
                setAbriuNoMobile(false)
            }
            setLarguraDaTela(document.documentElement.clientWidth)  
        }

        //chama a função na primeira renderização, equivale a um "onload"
        definirFormatodoHeader();

        //chama a função se o viewport tiver o tamanho alterado
        window.addEventListener('resize', definirFormatodoHeader);

        //limpa o listener (não sei pq é necessáriom mas é)
        return () => {
            window.removeEventListener('resize', definirFormatodoHeader)
        }
        
    }, []); 



    return (
        <div>
            {abriuNoMobile ? <HeaderMobile larguraDaTela={larguraDaTela} /> : <HeaderDesktop larguraDaTela={larguraDaTela} />}
        </div>


    );
};

export default Header;

