import React, { useState } from "react";

const FundoAnimado: React.FC = () => {

    const [descer, setDescer] = useState<boolean>()
    const [top, setTop] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)


        setInterval(() => {
            
            const numero = Math.floor(Math.random() * 2)
            if (numero === 0) {
                setTop(+ 1)
            } else {
                setLeft(+ 1)
            }
            
        }, 20);


    return (

            <div className="relative w-full h-full overflow-hidden">
                <div className={`
                    absolute

                    
                    animate-pulse formato-circulo  bg-[#1ac1b1]/[1] w-20 h-20 border]`}
                    style={{ left: left, top: top }}>
                </div>
                
            </div>

    );
}

export default FundoAnimado;