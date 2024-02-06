export const MainPictureTitle = ({ mainTit, mainBadge, mainDate }) => {
  return (
    <div className="absolute bottom-[10px] left-[10px] w-[600px] h-[250px] bg-white rounded-[12px] flex flex-col gap-[30px]">
      <div className="w-[100px]  py-[4px] flex justify-center flex-wrap items-center rounded-[5px] bg-[#4B6BFB] text-sm not-italic font-medium leading-5 text-gray-50 mt-[40px] ">
        {mainBadge}
      </div>
      <div className="text-[30px]">{mainTit}</div>
      <div className="text-[10px]">{mainDate}</div>
    </div>
  );
};
