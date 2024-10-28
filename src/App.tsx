import React from "react";
import Header from "./components/Header";
import Teste from "./components/Teste";
import Hero from "./components/Hero";

const App: React.FC = () => {

    const teste:boolean = false;

    return (
        <div id="outer-wrapper" className="w-screen h-screen bg-black">
            {!teste && <Header />}

            {!teste && <Hero />}

            {teste && <Teste />}
        </div>
    );
}

export default App;