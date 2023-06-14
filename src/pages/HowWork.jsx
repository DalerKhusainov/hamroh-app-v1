import React from "react";

import { useNavigate } from "react-router-dom";

import driver from "../assets/img/driver.png";
import passenger from "../assets/img/passenger.png";
// import { Link } from "react-router-dom";

export const HowWork = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <h1 className="text-[#054550] text-center text-[28px] p-32 ">
        Как это работает если вы...
      </h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2">
        <div className="flex flex-col items-center">
          <img
            className="h-[251px] w-[396px]"
            src={passenger}
            alt="Women in a car"
          />
          <p
            to="/howpassenger"
            className="bg-[#054550] py-2 px-5 text-white m-14 rounded-[5px] w-fit text-[24px] active:scale-90 transition-all"
            onClick={() => navigate("how-passenger")}
          >
            Пассажир
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-[251px] w-[396px]"
            src={driver}
            alt="Women in a car"
          />
          <p
            to="/howdriver"
            className="bg-[#054550] py-2 px-5 text-white m-14 rounded-[5px] w-fit text-[24px] active:scale-90 transition-all"
            onClick={() => navigate("how-driver")}
          >
            Водитель
          </p>
        </div>
      </div>
    </div>
  );
};
