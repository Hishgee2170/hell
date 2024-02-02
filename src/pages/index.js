import { Header, MainPicture, Trending } from "@/components/containers/index";
export default function () {
  return (
    <div className="flex flex-col gap-[30px]">
      <Header />
      <MainPicture />
      <Trending />
    </div>
  );
}
