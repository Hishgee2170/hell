import { trendingBoxData } from "@/data/TrendingBoxData";
export default function TrendingBox({ badge, title }) {
  return (
    <>
      {trendingBoxData().map((el, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${el.bgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          }}
          className="flex gap-[20px] rounded-[12px]"
        >
          <div className="w-[280px] h-[320px]  flex items-end justify-center py-[20px]">
            <div className="flex w-[230px] h-[120px] gap-[16px] flex-col px-[10px]">
              <div className="w-[100px] px-[10px] py-[4px] flex justify-center flex-wrap items-center rounded-[5px] bg-[#4B6BFB] text-sm not-italic font-medium leading-5 text-gray-50">
                {el.badge}
              </div>
              <div className="flex flex-wrap text-white">{el.title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
