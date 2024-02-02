import React from "react";
import { MainPictureTitle, ChangeButton } from "@/components/blocks";

export const MainPicture = () => {
  return (
    <div>
      <div className="w-[1216px] flex overflow-hidden">
        <div className="w-[1216px] h-[600px] bg-black rounded-[12px] relative">
          <div>
            <img alt="" />
            <MainPictureTitle />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[10px] mt-[10px] ">
        <ChangeButton />
      </div>
    </div>
  );
};
