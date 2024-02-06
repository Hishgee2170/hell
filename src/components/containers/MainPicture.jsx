import React from "react";
import { MainPictureTitle, ChangeButton } from "@/components/blocks";
export const MainPicture = ({ boxData }) => {
  console.log(boxData);
  return (
    <div>
      <div className="  flex gap-[1px]">
        {boxData.map((el) => (
          <div
            key={el.id}
            style={{
              backgroundImage: `url(${el.cover_image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "600px",
            }}
            className="w-[1216px] h-[600px] rounded-[12px] relative"
          >
            <MainPictureTitle
              mainTit={el.title}
              mainBadge={el.type_of}
              mainDate={el.published_timestamp}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-[10px] mt-[10px]">
        <ChangeButton />
      </div>
    </div>
  );
};

export default MainPicture;
