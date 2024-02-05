import React, { FC } from "react";

interface TypeCardProps {
  title: string;
  info: string;
  confirm: () => void;
}

const TypeCard: FC<TypeCardProps> = ({ title, info, confirm }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[220px] p-[22px] border-[1px] border-dashed border-gray-500">
      <h1 className="text-[24px] mb-[36px]">{title}</h1>
      <p className="text-[16px] text-center mb-[48px]">{info}</p>
      <div
        onClick={confirm}
        className="py-[4px] px-[12px] rounded-[4px] bg-black text-white cursor-pointer"
      >
        Confirm
      </div>
    </div>
  );
};

export default TypeCard;
