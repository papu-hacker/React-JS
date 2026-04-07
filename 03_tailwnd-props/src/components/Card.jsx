import React from 'react'

function Card({name, logo="logo"}) {
    // console.log("test",props);
    return (
        <div
            className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#1f1f1f] mb-4">
            
            <div className="absolute flex items-start justify-items-center-safe text-white z-1 text-2xl pl-2 pt-1 opacity-70 rounded-xl inset-0.5 bg-[#323132] font-mono font-extrabold">{name}
            </div>
            
            <div className="text-5xl z-1 sticky flex items-center justify-center mt-26 "> {logo} </div>

            <div className="absolute w-56 h-48 bg-white blur-[60px] -left-1/2 -top-1/2"></div>
        </div>
    )
}

export default Card