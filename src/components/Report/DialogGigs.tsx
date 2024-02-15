import { useModal } from "@/src/hooks/useModal";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { DialogReason } from "./DialogReason";

export const DialogGigs = ({
  open,
  closeModal,
  budget,
  currency,
}: {
  open: boolean;
  closeModal: () => void;
  budget?: number;
  currency?: string;
}) => {
  const dialogReason = useModal();

  const openDialogReason = () => {
    dialogReason.openModal();
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold">Gigs</p>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-semibold text-base">Details:</p>
              <p>
                - {budget} {currency} for 10,000 followers
              </p>
              <p>- Released after finished the gigs</p>
            </div>
            <div>
              <p className="text-base italic text-gray-500">Rate me</p>
              <p>4.9 (30)</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-purple-500 px-10 py-1.5 text-white"
              onClick={closeModal}
            >
              Finish
            </button>
            <button
              onClick={openDialogReason}
              className="bg-red-500 px-10 py-1.5 text-white"
            >
              Report
            </button>
            <DialogReason
              open={dialogReason.open}
              closeModal={dialogReason.closeModal}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
