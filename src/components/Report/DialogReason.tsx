"use client";

import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../shared/ui/dialog";
import { useState } from "react";

export const DialogReason = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  const [reason, setReason] = useState<string>("");

  const handleChangeReason = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    setReason("");
    closeModal();
  };

  const openInput = () => {
    const input: any = document.getElementById("import-file");
    input.click();
  };
  return (
    <Dialog open={open}>
      <DialogContent className="bg-white py-4 px-10">
        <div className="relative flex flex-col gap-4 items-center justify-center">
          <p className="font-bold text-[28px]">State Your Case</p>
          <input
            placeholder="Submit Reason and proof"
            className="w-full border border-gray-400 py-2 px-4"
            value={reason}
            onChange={handleChangeReason}
          />
          <p>Upload file/image for more proof</p>
          <div
            className="bg-gray-300 w-[300px] h-[100px] flex items-center justify-center"
            role="button"
            onClick={openInput}
          >
            <img
              src="./images/upload-no-bg.png"
              className="w-[60px] h-[60px]"
            />
          </div>
          <input
            className="hidden"
            type="file"
            id={"import-file"}
            accept=".csv, .xlsx"
          />
          <button
            className="bg-red-500 px-10 py-1.5 text-white"
            onClick={handleSubmit}
          >
            Send
          </button>
          <button className="absolute top-2 right-2" onClick={closeModal}>
            <X className="h-6 w-6 " />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
