import { cn } from "@/src/lib/utils";
import { Check } from "lucide-react";
import React, { FC } from "react";

interface TypeCardProps {
  title: string;
  id: string;
  info: string;
  checked: boolean;
  onClick: (id: string) => void;
}

const TypeCard: FC<TypeCardProps> = ({ title, id, info, checked, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className={cn(
        "relative flex flex-col items-center justify-center w-[220px] p-[22px] border-[2px] border-dashed border-spacing-10 border-gray-500 hover:border-primary cursor-pointer",
        { "border-primary": checked }
      )}
    >
      <h1 className="text-[24px] mb-[36px]">{title}</h1>
      <p className="text-[16px] text-center mb-[48px]">{info}</p>
      {checked && (
        <div className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Check className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default TypeCard;
