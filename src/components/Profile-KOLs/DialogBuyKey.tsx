import { useModal } from "@/src/hooks/useModal";
import { useState } from "react";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const DialogBuyKey = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  const { open: openDialog, openModal, closeModal: closeDialog } = useModal();
  const [amountKeys, setAmountKeys] = useState<number>();

  const handleChangeAmountKeys = (e: any) => {
    setAmountKeys(e.target.value);
  };

  const handleOpenDialogResult = () => {
    closeModal();
    openModal();
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white flex items-center justify-center p-[40px]">
        <div
          className="absolute top-4 right-4"
          role="button"
          onClick={closeModal}
        >
          <X className="h-4 w-4" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-10">
              <p className="text-xl font-semibold">Henry's Key:</p>
              <p className="text-lg">100 ETH</p>
            </div>
            <p className="text-gray-400 italic">You owned 0 key</p>
            <input
              placeholder="Amount"
              type="number"
              min={0}
              className="border px-2 py-1 border-black outline-none"
              value={amountKeys}
              onChange={handleChangeAmountKeys}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={cn(
                " text-white px-4 py-1 text-base transition-all duration-300",
                !amountKeys ? "bg-gray-400" : "bg-green-500"
              )}
              disabled={!amountKeys}
              onClick={handleOpenDialogResult}
            >
              Buy
            </button>
            <button
              className={cn(
                "text-white px-4 py-1 text-base transition-all duration-300",
                !amountKeys ? "bg-gray-400" : "bg-red-500"
              )}
              disabled={!amountKeys}
            >
              Sell
            </button>
          </div>
        </div>
      </DialogContent>
      <Dialog open={openDialog}>
        <DialogContent className="bg-white">
          <div className="p-10 flex flex-col items-center justify-between gap-10">
            <p className="font-bold text-lg">
              Your've acquired {amountKeys} keys
            </p>
            <div className="w-full justify-between items-center flex">
              <button className="bg-green-500 text-white py-1.5 px-3 text-lg font-semibold">
                <a href="/dashboard">Check Dashboard</a>
              </button>
              <button
                onClick={closeDialog}
                className="border border-gray-500 text-lg font-semibold py-1.5 px-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};
