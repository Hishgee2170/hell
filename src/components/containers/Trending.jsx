import TrendingBox from "../blocks/TrendingBox";
import { trendingBoxData } from "@/data/TrendingBoxData";

export const Trending = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div>
        <strong>Trending</strong>
      </div>
      <div className="flex w-[1216px] gap-[20px] overflow-hidden">
        <div className="flex justify-around gap-[28px]">
          {trendingBoxData().map((el, index) => (
            <TrendingBox
              title={el.title}
              badge={el.badge}
              bgUrl={el.bgUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
