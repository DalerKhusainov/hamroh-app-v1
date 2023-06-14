import React from "react";
import mobailApp from "../img/mobailApp.png";
import appstore from "../img/appstore.svg";
import googleplay from "../img/googleplay.svg";

function MobaileApp() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center ">
        <img src={mobailApp} alt="" />
        <div>
          <h2 className="text-[24px] text-[#054550]">
            Путешествовать удобнее с<br /> приложением Hamroh
          </h2>
          <p className="text-[#528B93] text-[18px]">
            Все поездки и билеты в одном месте, самая <br />
            последняя информация и специальные функции
            <br /> для смартфонов.
          </p>
          <div className="flex">
          <div className="flex mt-10 border-[1px] border-[#3F3D56] w-[144px] rounded-lg px-5 py-3 mr-10">
            <img src={googleplay} alt="" />
            <button className="text-[12px] ml-5 ">Google Play</button>
          </div>
          <div className="flex mt-10 border-[1px] border-[#3F3D56] w-[144px] rounded-lg px-5 py-3">
            <img src={appstore} alt="" />
            <button className="text-[12px] ml-5">App Store</button>
          </div></div>
        </div>
      </div>
    </div>
  );
}

export default MobaileApp;
