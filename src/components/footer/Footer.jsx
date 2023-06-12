import React from "react";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from 'fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="text-white body-font flex justify-center items-center bg-[#528B93] pl-28">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Все каталоги
            </h2>
            <nav className="list-none mb-10 text-[#B2C8CA]">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Все автомаргруты</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Все автонаправления</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Все автобусные маршруты</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Все автобуснфые напрвления</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Популярные маршруты совместных поездок
            </h2>
            <nav className="list-none mb-10 text-[#B2C8CA]">
             <div className="">
             <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Душанбе<BsArrowRightShort className="w-5 h-5"/>Ходжент</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Ходжент<BsArrowRightShort className="w-5 h-5"/>Душанбе</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Душанбе<BsArrowRightShort className="w-5 h-5"/>Самарканд</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Душанбе<BsArrowRightShort className="w-5 h-5"/>Хорог</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Куляб<BsArrowRightShort className="w-5 h-5"/>Душанбе</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800 flex gap-4">Душанбе<BsArrowRightShort className="w-5 h-5"/>Истаравшан</a>
              </li>
             </div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              О нас
            </h2>
            <nav className="list-none mb-10 text-[#B2C8CA]">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Как работает Hamroh</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">О нас</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Центр помощи</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">Ищем сотрудников</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm text-center mb-3">
              YOU CAN FIND US HERE
            </h2>
            <div className="flex justify-center items-center gap-1">
              <AiFillYoutube className="w-12 h-12 active:scale-90 transition-all" />
              <AiOutlineTwitter className="w-12 h-12 active:scale-90 transition-all"/>
              <FaTelegram className="w-10 h-10 active:scale-90 transition-all"/>
              <AiOutlineInstagram className="w-11 h-11 active:scale-90 transition-all"/>
              <FaFacebook className="w-10 h-10 active:scale-90 transition-all"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
