import React from "react";

export default function RegistrationPage() {
  return (
    <div className="flex justify-center items-center bg-[#B2C8CA]">
      <div className="lg:w-2/6 md:w-1/2 md:mx-10 sm:w-[550px] bg-[#528B93] rounded-lg p-8 flex flex-col w-full mt-10 md:ml-32 lg:ml-36 md:mt-0 px-12">
        <h2 className="text-white font-semibold text-lg title-font mb-5 text-center">
          Регистрация
        </h2>
        <div className="relative mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Почта"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
          />
        </div>
        <button className="text-white border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-[#054550] active:scale-95 transition-all">
          Создать
        </button>
        <div className="flex justify-center items-center gap-2 text-[#B2C8CA]">
          <p>У вас есть учетной записи?</p>
          {/* <a href="#">Вход</a> */}
        </div>
      </div>
    </div>
  );
}
