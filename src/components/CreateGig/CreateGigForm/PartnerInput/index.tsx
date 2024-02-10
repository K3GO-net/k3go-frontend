import { cn } from "@/src/lib/utils";
import React, { useState } from "react";

interface PartnerInputProps {
  partners: string[];
  setPartners: React.Dispatch<React.SetStateAction<string[]>>;
}

const PartnerInput: React.FC<PartnerInputProps> = ({
  partners,
  setPartners,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (!input.trim()) return;
    setPartners([...partners, input]);
    setInput("");
  };

  const handleTagDelete = (indexToDelete: number) => {
    setPartners((prevTags) =>
      prevTags.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div
      className={cn(
        "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        { "outline-none ring-2 ring-ring ring-offset-2": active }
      )}
    >
      {partners.map((item, index) => {
        return (
          <div
            key={index}
            className="flex bg-black text-white items-center gap-[6px] px-[14px] py-[8px] rounded-full mr-[10px]"
          >
            <p>{item}</p>
            <div
              onClick={() => handleTagDelete(index)}
              className="cursor-pointer bg-white text-black rounded-full w-[18px] h-[18px] flex items-center justify-center"
            >
              <span className="font-[600] leading-0 mb-[2px]">x</span>
            </div>
          </div>
        );
      })}
      {partners.length < 3 && (
        <input
          type="text"
          className="flex-1 outline-none bg-transparent text-sm"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Enter your Top 3 Partner"
        />
      )}
    </div>
  );
};

export default PartnerInput;
