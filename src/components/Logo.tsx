import React from "react";

const Logo: React.FC = () => {
    return (

            <div className={`w-full h-full pointer-events-none text-[#1ac1b1]`}>
                <div id='logo-container' className='scale-[0.4] origin-left flex w-40 h-28'>
                    <div className='w-full '>
                        <p className='acme-regular neon text-[120px] mt-[-33px]'>D</p>
                    </div>
                    <div className='flex flex-col w-full '>
                        <div className='h-20 '>
                        <p className='acme-regular  neon text-[100px] mt-[-33px]'>A</p>
                        </div>
                        <div className=''>
                            <p className='acme-regular neon pl-2'>Web Dev</p>
                        </div>

                    </div>
                </div>
            </div>

    );
}

export default Logo;