import React from "react";
import homepage from "./img/homePage.png";
import coin from "./img/coins.png";
import comment from "./img/comment-user.png";
import bolt from "./img/bolt.png";
import app from "./img/MobileApp.png";
import drive from "./img/driver.with.png";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

export default function HomePage() {
  return (
    <header className="text-gray-600 body-font bg-white py-14 flex flex-col justify-center items-center">
      <h1 className="text-[#054550] text-5xl font-bold text-center lg:text-4xl md:text-4xl sm:text-3xl">
        Поездки на ваш выбор по самым <br /> низким ценам
      </h1>
      <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col justify-center items-center pt-10">
        <div className="lg:w-2/6 md:w-1/2 md:mx-10 sm:w-[550px] bg-[#528B93] rounded-lg p-8 flex flex-col w-full mt-10 md:ml-32 lg:ml-36 md:mt-0 px-12">
          <h2 className="text-white font-semibold text-lg title-font mb-5 text-center">
            Куда вы хотите поехать?
          </h2>
          <div className="relative mb-4">
            <input
              type="text"
              id="From"
              name="From"
              placeholder="Откуда"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <input
              type="text"
              id="where"
              name="where"
              placeholder="Куда"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Сегодня"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Пассажиров"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
          </div>
          <button className="text-white border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-[#054550] active:scale-95 transition-all">
            Поиск
          </button>
        </div>
        <div className="lg:w-3/5 md:w-1/2 flex justify-center items-center md:mr-14 lg:mr-16">
          <img className="cover-full -scale-x-105" src={homepage} alt="car" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 -m-4 mx-2">
        <div className="p-4 md:w-1/4">
          <div className="flex rounded-lg h-full bg-[#cae0e4] p-8 flex-col shadow-2xl hover:shadow-indigo-400 transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                <img src={coin} alt="" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-xl font-bold text-[#054550]">
                Ваша поездка по низкой цене
              </p>
              <a className="mt-3 text-gray-500 inline-flex items-center">
                Куда бы вы ни собирались, на автобусе или с попутчиками, вы
                сможете найти свою идеальную поездку среди множества маршрутов и
                доехать по самой низкой цене.
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/4">
          <div className="flex rounded-lg h-full bg-[#cae0e4] p-8 flex-col shadow-2xl hover:shadow-indigo-400 transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                <img src={comment} alt="" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-xl font-bold text-[#054550]">
                Ваша поездка по низкой цене
              </p>
              <a className="mt-3 text-gray-500 inline-flex items-center">
                Мы стараемся узнать ваших будущих попутчиков и автобусных
                перевозчиков как можно лучше. Мы проверяем отзывы, профили
                попутчиков, чтобы вы знали, с кем поедете.
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/4">
          <div className="flex rounded-lg h-full bg-[#cae0e4] p-8 flex-col shadow-2xl hover:shadow-indigo-400 transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                <img src={bolt} alt="" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-xl font-bold text-[#054550]">
                Ваша поездка по низкой цене
              </p>
              <a className="mt-3 text-gray-500 inline-flex items-center">
                Забронировать поездку проще простого. В нашем приложении легко
                разобраться: мощный алгоритм за пару минут найдет водителя
                поблизости, и вам останется нажать пару кнопок для брони.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <section className="container mx-auto body-font">
          <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col justify-center items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded -scale-x-105"
                alt="hero"
                src={app}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left justify-center items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#054550]">
                Путешествовать удобнее с <br /> приложением Hamroh
              </h1>
              <p className="mb-8 leading-relaxed text-[#528B93] text-xl mt-5">
                Все поездки и билеты в одном месте, самая <br /> последняя
                информация и специальные функции <br /> для смартфонов.
              </p>
              <div className="flex lg:flex-row justify-center items-center gap-10 md:flex-col">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none hover:shadow-lg hover:shadow-indigo-300 transition-all active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">
                      GET IT ON
                    </span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none hover:shadow-lg hover:shadow-indigo-300 transition-all active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">
                      Download on the
                    </span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col justify-center items-center w-full h-64 md:h-[200px] sm:h-[350px] bg-[#528B93]">
        <h1 className="text-white text-3xl my-10 font-bold">
          Самые популярные направление
        </h1>
        <div className="flex flex-col justify-center sm:h-[400px] md:flex-col lg:flex-row items-center gap-10 pb-[33px]">
          <button className="w-96 bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="h-full flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
              <h1>Душанбе</h1>
              <BsArrowRightShort className="w-14 h-14" />
              <h1>Худжанд</h1>
              <IoIosArrowForward className="w-14 h-14" />
            </div>
          </button>
          <button className="w-96 bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="h-full flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
              <h1>Душанбе</h1>
              <BsArrowRightShort className="w-14 h-14" />
              <h1>Куляб</h1>
              <IoIosArrowForward className="w-14 h-14" />
            </div>
          </button>
          <button className="w-96 bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="h-full flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
              <h1>Душанбе</h1>
              <BsArrowRightShort className="w-14 h-14" />
              <h1>Хорог</h1>
              <IoIosArrowForward className="w-14 h-14" />
            </div>
          </button>
        </div>
      </section>
      <section className="container mx-auto flex justify-center items-center my-20">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row ">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-full content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6 flex flex-col">
                <h1 className="title-font text-4xl font-semibold mb-2 text-[#054550] sm:text-center">
                  Экономьте, когда вы за рулем
                </h1>
                <div className="leading-relaxed mt-5 text-[#528B93] text-2xl sm:text-center">
                  Зарегистрируйте профиль водителя, берите <br /> попутчиков и
                  экономьте на бензине. Чтобы <br /> опубликовать первую
                  поездку, нужно всего пару <br /> минут. Готовы ехать?
                </div>
                <button className="mt-20 ml-20 border-2 rounded-full w-96 h-16 text-white text-2xl bg-[#054550] active:scale-95 transition-all">
                  Узнать как это работает
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-[400px] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={drive}
                alt="stats"
              />
            </div>
          </div>
        </section>
      </section>
    </header>
  );
}
