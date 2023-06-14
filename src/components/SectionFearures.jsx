import React from "react";
import coins from "../assets/img/coins.png";
import bolt from "../assets/img/bolt.png";
import commentUser from "../assets/img/comment-user.png";

function SectionFeatures() {
  return (
    <div className="bg-white px-20 flex justify-center items-center">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
        <div className="m-10">
          <img src={coins} alt="" className="mb-8" />
          <h4 className="text-[16px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            Ваша поездка по низкой цене
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Куда бы вы ни собирались, на автобусе или с попутчиками,<br /> вы сможете
            найти свою<br /> идеальную поездку среди<br /> множества маршрутов и <br />доехать по
            самой низкой цене.
          </p>
        </div>
        <div className="m-10">
          <img src={commentUser} alt="" className="mb-8" />
          <h4 className="text-[16px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            Доверяйте своим попутчикам{" "}
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Мы стараемся узнать ваших <br />будущих попутчиков и<br /> автобусных
            перевозчиков как<br /> можно лучше. Мы проверяем<br /> отзывы, профили
            попутчиков,<br /> чтобы вы знали, с кем поедете.
          </p>
        </div>
        <div className="m-10">
          <img src={bolt} alt="" className="mb-8" />
          <h4 className="text-[16px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            В дорогу за пару кликов!{" "}
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Забронировать поездку проще <br /> простого. В нашем приложении<br /> легко
            разобраться: мощный<br /> алгоритм за пару минут найдет<br /> водителя
            поблизости, и вам<br /> останется нажать пару кнопок для брони.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFeatures;