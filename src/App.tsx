import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Princípios from "./components/Principios";
import Portfolio from "./components/Portfolio";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

const App: React.FC = () => {

    return (
        <div id="outer-wrapper" className="relative p-12 flex flex-col mx-auto gap-64 w-full max-w-[1440px] h-full bg-black">
            <Header />

            <Hero />

            <Princípios />

            <Portfolio />

            <Sobre />

            <div className="absolute bottom-0 left-0 w-full mb-[-350px]">
                <Footer />
            </div>
        </div>
    );
}

export default App;