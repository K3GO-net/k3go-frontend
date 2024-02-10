import React, { FC } from "react";
import { Button } from "@/src/components/shared/ui/button";

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
      <Button onClick={confirm}>Confirm</Button>
    </div>
  );
};

export default TypeCard;
