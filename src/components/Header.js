import React from 'react'
import disney from '../img/disney_logo.png';
import { VscTriangleUp } from "react-icons/vsc";

function Header() {
    return (
        <div className=' h-16 bg-white text-black p-4 flex items-center justify-between '>
            <ul className='flex '>
                <li className='float-left flex items-center  '>
                    <a>
                    <img src={disney} className="h-10 w-24 cursor-pointer
                    " />
                    </a>
                </li>
                <li className='px-6  flex items-center group relative'>
                    <a className='cursor-pointer ml-3 font-bold text-sm font-serif,font-sans group-hover:text-[#0077DA]'>
                        FİLMLER 
                    </a>
                    
                    <div className='opacity-0 invisible z-20 my-3 w-[250px] py-[14px]  px-[26px] flex absolute top-full left-0 bg-[#232B2D] text-sm text-white group-hover:visible opacity-100 transition-all'>
                            <VscTriangleUp className='-top-[16px] left-12 text-2xl absolute text-[#232B2D]'/>
                            <ul>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Öne Çıkanlar</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Işıkyılı</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Robot Ron: Bir Sorun Var</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Kırmızı</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Lucasfilm Filimleri</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Marvel Filimleri</li>
                                <li  className='py-[10px] px-[10px]  cursor-pointer ease-out font-bold hover:text-[#0077DA]'>Pixar Filimleri </li>
                            </ul>
                    </div>
                </li>
                
            </ul>
            
        </div>
    )
}

export default Header
