import React, { useEffect, useState } from "react";
import TrendingBox from "../blocks/TrendingBox";

export const Trending = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles") // added '=' before 'page'
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-[40px]">
      <div>
        <strong>Trending</strong>
      </div>
      <div className="flex w-[1216px] gap-[20px] overflow-hidden">
        <div className="flex justify-around gap-[28px]">
          {datas.map((el) => (
            <TrendingBox
              title={el.title}
              badge={el.type_of}
              bgUrl={el.cover_image}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
