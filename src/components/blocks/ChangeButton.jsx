function uhrah() {
  let j = 0;
  j++;
  console.log(j);
}

export const ChangeButton = () => {
  return (
    <div className="flex justify-end gap-[10px]">
      <div
        onClick={uhrah}
        id="uhrah"
        className="w-[50px] h-[50px] border-2 border-black rounded-[5px] flex justify-center items-center"
      >
        {`<`}
      </div>
      <div
        id="uragshlah"
        className="w-[50px] h-[50px] border-2 border-black rounded-[5px] flex justify-center items-center"
      >
        {`>`}
      </div>
    </div>
  );
};
