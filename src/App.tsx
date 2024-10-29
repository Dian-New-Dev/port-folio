import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";

const App: React.FC = () => {

    return (
        <div id="outer-wrapper" className="p-12 flex flex-col gap-16 w-full h-full bg-black">
            <Header />

            <Hero />

            <Projetos />
        </div>
    );
}

export default App;