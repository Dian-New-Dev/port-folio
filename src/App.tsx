import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Princípios from "./components/Principios";
import Portfolio from "./components/Portfolio";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import FundoAnimado from "./components/FundoAnimado";

const App: React.FC = () => {

    const mostrarFundoAnimado:boolean = true;

    return (
        <div className='relative grid place-items-center gradient-hero'>
            <div className='scroll-smooth p-4 sm:p-16 relative flex flex-col gap-16 2xl:gap-64 w-full max-w-[1440px] z-20 overflow-hidden'>
                <Header />

                <Hero />

                <Princípios />

                <Portfolio />

                <Sobre />

                <div id="contato" className="scroll-mt-[100px] z-20 absolute bottom-0 left-0 w-full mt-[-400px]">
                    <Footer />
                </div>
            
            </div>

            <div className="absolute top-0 left-0 h-full w-full">
                {mostrarFundoAnimado && <FundoAnimado />}
            </div>
        
        </div>



          
    );
}

export default App;