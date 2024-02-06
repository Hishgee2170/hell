import allData from "@/data/allData";
import TrendingBox from "../blocks/TrendingBox";
export const Trending = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div>
        <strong>Trending</strong>
      </div>
      <div className="flex w-[1216px] gap-[20px] overflow-hidden">
        <div className="flex justify-around gap-[28px]">
          {allData().map((el, index) => (
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
