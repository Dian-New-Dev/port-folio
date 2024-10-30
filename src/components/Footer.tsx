import React from "react";


const Footer: React.FC = () => {
    return (
        <div className="z-10 relative text-white w-full h-full">
            <div className="z-20 relative w-full p-4 h-full flex flex-col items-center gap-2 footer-gradiente">
                <div className={`z-20 w-full h-full flex justify-center text-[#1ac1b1]`}>
                    <div id='logo-container' className='mb-[-30px] scale-[0.4] origin-center flex w-40 h-28'>
                        <div className='w-full '>
                            <p className='acme-regular neon text-[120px] mt-[-33px]'>D</p>
                        </div>
                        <div className='flex flex-col w-full '>
                            <div className='h-20 '>
                            <p className='acme-regular neon text-[100px] mt-[-33px]'>A</p>
                            </div>
                            <div className=''>
                                <p className='acme-regular neon pl-2'>Web Dev</p>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className=" z-20 flex gap-2">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5567991592199&text=Ol%C3%A1,%20seja%20bem%20vindo!%20Caso%20tenha%20interesse%20em%20adquirir%20uma%20Landing%20Page%20para%20o%20seu%20neg%C3%B3cio,%20ou%20tenha%20d%C3%BAvidas%20sobre%20meus%20servi%C3%A7os,%20sinta-se%20livre%20para%20mandar%20uma%20mensagem.%20Responderei%20o%20quanto%20antes!">
                        <img className="rounded-lg border-2 border-[#1ac1b1] sombra-footer w-[40px]" src={`./assets/icons/whatsapp.png`} alt="Ícone do Whatsapp" />
                    </a>
                    
                    <a target="_blank "href="https://www.linkedin.com/in/diego-antunes-339648293/">
                        <img className="rounded-lg border-2 border-[#1ac1b1] sombra-footer w-[40px]" src={`./assets/icons/linkedin.png`} alt="Ícone do Linkedin" />
                    </a>

                    <a target="_blank" href="https://github.com/Dian-New-Dev">
                        <img className="rounded-lg border-2 border-[#1ac1b1] sombra-footer w-[40px]" src={`./assets/icons/github.png`} alt="Ícone do Github" />
                    </a>
                </div>

                <p className="z-20 text-sm italic">DA Web Dev - 2024</p>

                <div className="z-10 absolute left-0 top-0 bg-gradient-to-b from-black to-transparent w-full h-full"></div>
            </div>
        </div>
    );
}

export default Footer;