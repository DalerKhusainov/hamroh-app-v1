import React from 'react'
import logo from '../assets/img/logo1.png'
import {AiOutlineSearch} from '@react-icons/all-files/ai/AiOutlineSearch'
import {AiOutlinePlusCircle} from '@react-icons/all-files/ai/AiOutlinePlusCircle'
import {BsFillPersonFill} from '@react-icons/all-files/bs/BsFillPersonFill'
import {IoIosArrowUp} from '@react-icons/all-files/io/IoIosArrowUp'

export default function Header() {
  return (
    <div>
<header class="text-gray-600 bg-white body-font text-[#054550]">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-10">
      <a href="#"><img className='w-52 h-16 active:scale-95 transition-all' src={logo} alt="Logo" /></a>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
      <a class="mr-5 flex justify-center items-center gap-1 text-[15px]"><AiOutlineSearch className='w-10 h-10 active:scale-90 transition-all'/>Искать</a>
      <a class="mr-5 flex justify-center items-center gap-1 text-[15px]"><AiOutlinePlusCircle className='w-10 h-10 active:scale-90 transition-all'/>Опубликовать поездку</a>
      <div className='flex justify-center items-center gap-1'><img src="" alt="" /></div>
    </nav>
    <div className='flex justify-center items-center gap-2 mr-10 cursor-pointer'>
        <BsFillPersonFill className='w-12 h-12 border-2 rounded-full'/>
        <IoIosArrowUp className='w-8 h-8 active:scale-90 transition-all'/>
    </div>
  </div>
</header>

    </div>
  )
}
