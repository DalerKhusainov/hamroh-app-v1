import React from "react";
import company from "../img/company.png";

function SectionHow() {
  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <div className="flex flex-col text-center md:text-left md:flex-row md:items-center ">
          <div>
            <h2 className="text-[24px] text-[#054550] font-bold mb-5">
              Экономьте, когда вы за рулем{" "}
            </h2>
            <p className="text-[#528B93] text-[18px]">
              Зарегистрируйте профиль водителя, берите <br />
              попутчиков и экономьте на бензине. Чтобы
              <br /> опубликовать первую поездку, нужно всего пару<br /> минут. Готовы
              ехать?
            </p>
            <div className="flex justify-center">
              
                <button className=" text-[18px] text-white text-center bg-[#054550] rounded-full px-14 py-5 my-14 active:scale-90 transition-all">
                  Узнать как это работает
                </button>
              
            </div>
          </div>
          <img src={company} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionHow;
