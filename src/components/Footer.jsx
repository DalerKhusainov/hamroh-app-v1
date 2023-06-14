import React from "react";

function Footer() {
  return (
    <div className="bg-[#528B93]">
      <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row md:justify-around py-10">
        <div className="">
          <h6 className="text-[24px] text-white mb-7">Все каталоги</h6>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Все автомаршруты</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Все автонаправление</p>
        </div>
        <div>
          <h6 className="text-[24px] text-white mb-7">Популярные маршруты</h6>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Душанбе Худжанд</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Худжанд Душанбе</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Душанбе Самарканд</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Душанбе Хорог</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Куляб Душанбе</p>
        </div>
        <div>
          <h6 className="text-[24px] text-white mb-7">О нас</h6>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Как работает Hamroh</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">О нас</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Центр помощи</p>
          <p className="text-[#B2C8CA] text-[18px] mb-3">Ищем сотрудников</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
