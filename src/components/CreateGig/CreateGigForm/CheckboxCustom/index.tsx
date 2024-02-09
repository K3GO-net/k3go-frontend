import { Checkbox } from "@/src/components/shared/ui/checkbox";
import React from "react";

interface CheckboxCustomProps {
  id: string;
  title: string;
  checked: boolean;
  handleCheckboxChange: () => void;
}

const CheckboxCustom: React.FC<CheckboxCustomProps> = ({
  id,
  title,
  checked,
  handleCheckboxChange,
}) => {
  return (
    <div className="flex items-center space-x-2 max-w-max">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckboxCustom;
