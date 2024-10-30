import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Princípios from "./components/Principios";
import Portfolio from "./components/Portfolio";
import Sobre from "./components/Sobre";

const App: React.FC = () => {

    return (
        <div id="outer-wrapper" className="p-12 flex flex-col gap-16 w-full h-full bg-black">
            <Header />

            <Hero />

            <Princípios />

            <Portfolio />

            <Sobre />
        </div>
    );
}

export default App;