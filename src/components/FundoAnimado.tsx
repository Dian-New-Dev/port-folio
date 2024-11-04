import React, { useState } from "react";

const FundoAnimado: React.FC = () => {

    const [descer, setDescer] = useState<boolean>()
    const [top] = useState<number>(0)
    //const [left] = useState<number>(0)


        // setInterval(() => {
            
        //     const numero = Math.floor(Math.random() * 2)
        //     if (numero === 0) {
                
        //     } else {

        //     }
        // }, 2000);

        function ligardesce() {
            if (descer) {
                setDescer(false)
            } else {
                setDescer(true)
            }
        }


    return (

        
        <div className="relative w-full h-full overflow-hidden">
                <button className="absolute z-50 text-white top-52" onClick={ligardesce}>Ligar</button>
                
                
                <div className={`
                    absolute
                    ${descer ? 'desce-anim' : ''}
                    
                    animate-pulse formato-circulo  bg-[#1ac1b1]/[1] w-20 h-20 border]`}
                    style={{ left: '0%', top: top }}>
                </div>

                <div id="meteoros">
                    <span className="animate-meteor-effect absolute top-1/2 left-[10%] h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" ></span>

                    <span className="animate-meteor-effect absolute top-1/2 left-[30%] h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" ></span>

                    <span className="animate-meteor-effect absolute top-1/2 left-[50%] h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" ></span>

                    <span className="animate-meteor-effect absolute top-1/2 left-[70%] h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" ></span>

                    <span className="animate-meteor-effect absolute top-1/2 left-[90%] h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" ></span>
                </div>



            </div>

    );
}

export default FundoAnimado;