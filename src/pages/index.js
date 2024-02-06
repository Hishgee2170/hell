import { Header, MainPicture, Trending } from "@/components/containers/index";
import trendingBoxData from "@/data/TrendingBoxData";
export default function () {
  const data = trendingBoxData();
  return (
    <div className="flex flex-col gap-[30px]">
      <Header />
      <MainPicture boxData={data} />
      <Trending />
    </div>
  );
}
